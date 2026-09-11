import { NextResponse } from 'next/server';

export const revalidate = 3600;

interface InstagramPost {
  id: string;
  caption: string;
  media_url: string;
  permalink: string;
  timestamp: string;
  like_count: number;
  comments_count: number;
}

/**
 * Instagram feed — RapidAPI (Instagram Scraper / instagram-scraper-stable-api).
 *
 * Configure BOTH env vars or the route serves designed fallback tiles:
 *   RAPIDAPI_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 *   RAPIDAPI_HOST=instagram-scraper-stable-api.p.rapidapi.com
 *   INSTAGRAM_USERNAME=fita_academy           (optional, default: fita_academy)
 */

const USERNAME = process.env.INSTAGRAM_USERNAME || 'fita_academy';
const POST_LIMIT = 9;

/**
 * A usable RapidAPI host is the API's own subdomain, e.g.
 * "instagram-scraper-stable-api.p.rapidapi.com".
 * The marketplace domain ("rapidapi.com") is NOT an API host — it returns HTML,
 * which is the #1 cause of "Unexpected token '<'" and a silently empty feed.
 */
function isUsableHost(host: string | undefined): host is string {
  if (!host) return false;
  const h = host.trim().toLowerCase();
  return h !== 'rapidapi.com' && h.endsWith('.rapidapi.com');
}

const FALLBACK: Omit<InstagramPost, 'media_url'>[] = [
  { id: '1', caption: 'Java Full Stack batch in action 🚀', permalink: `https://instagram.com/${USERNAME}`, timestamp: new Date().toISOString(), like_count: 124, comments_count: 12 },
  { id: '2', caption: 'Placement celebration 🎉', permalink: `https://instagram.com/${USERNAME}`, timestamp: new Date().toISOString(), like_count: 256, comments_count: 18 },
  { id: '3', caption: 'Data Science workshop 💡', permalink: `https://instagram.com/${USERNAME}`, timestamp: new Date().toISOString(), like_count: 189, comments_count: 9 },
  { id: '4', caption: 'AWS DevOps lab session ☁️', permalink: `https://instagram.com/${USERNAME}`, timestamp: new Date().toISOString(), like_count: 145, comments_count: 7 },
  { id: '5', caption: 'Student success story 🌟', permalink: `https://instagram.com/${USERNAME}`, timestamp: new Date().toISOString(), like_count: 312, comments_count: 24 },
  { id: '6', caption: 'Campus life at FITA 🏫', permalink: `https://instagram.com/${USERNAME}`, timestamp: new Date().toISOString(), like_count: 198, comments_count: 11 },
];

function fallbackPayload() {
  const posts: InstagramPost[] = FALLBACK.map((p) => ({
    ...p,
    media_url: '',
  }));
  return NextResponse.json({ posts, source: 'fallback' as const });
}

/** Extract a media URL from an Instagram item (handles nested shapes). */
function resolveMediaUrl(item: Record<string, unknown>): string {
  // Direct fields
  const direct =
    (typeof item.display_url === 'string' && item.display_url) ||
    (typeof item.displayUrl === 'string' && item.displayUrl) ||
    (typeof item.media_url === 'string' && item.media_url) ||
    (typeof item.image_url === 'string' && item.image_url) ||
    (typeof item.thumbnail_url === 'string' && item.thumbnail_url) ||
    (typeof item.url === 'string' && item.url) ||
    '';
  if (direct) return direct;

  // image_versions2.candidates[0].url (Instagram GraphQL shape)
  const iv2 = item.image_versions2 as { candidates?: { url?: string }[] } | undefined;
  if (Array.isArray(iv2?.candidates) && iv2.candidates[0]?.url) {
    return iv2.candidates[0].url as string;
  }

  // video_versions (Reels/IGTV)
  const vv = item.video_versions as { url?: string }[] | undefined;
  if (Array.isArray(vv) && vv[0]?.url) return vv[0].url as string;

  return '';
}

/** RapidAPI hosts differ in response shape; normalise the common ones. */
function normalise(raw: unknown): InstagramPost[] {
  const data = raw as Record<string, unknown> | null | undefined;

  // Unwrap nested response shapes: data.items, data.data, data.posts, data.result
  const wrapped = data?.items ?? data?.data ?? data?.posts ?? data?.result;
  const list =
    (Array.isArray(wrapped) && wrapped) ||
    (Array.isArray(raw) && raw) ||
    [];

  return (list as Record<string, unknown>[])
    .map((item, i) => {
      const media = resolveMediaUrl(item);

      const shortcode =
        (typeof item.shortcode === 'string' && item.shortcode) ||
        (typeof item.shortCode === 'string' && item.shortCode) || '';

      return {
        id: String(item.id ?? item.pk ?? shortcode ?? i),
        caption:
          (typeof item.caption === 'string' && item.caption) ||
          (typeof item.edge_media_to_caption === 'object' &&
            typeof (item.edge_media_to_caption as { edges?: { node?: { text?: string } }[] })?.edges?.[0]?.node?.text === 'string' &&
            ((item.edge_media_to_caption as { edges: { node: { text: string } }[] }).edges[0].node.text)) ||
          '',
        media_url: media,
        permalink:
          (typeof item.permalink === 'string' && item.permalink) ||
          (typeof item.url === 'string' && item.url) ||
          (shortcode ? `https://www.instagram.com/p/${shortcode}/` : `https://instagram.com/${USERNAME}`),
        timestamp:
          (typeof item.taken_at === 'number' && new Date(item.taken_at * 1000).toISOString()) ||
          (typeof item.taken_at_timestamp === 'number' && new Date(item.taken_at_timestamp * 1000).toISOString()) ||
          (typeof item.timestamp === 'string' && item.timestamp) ||
          new Date().toISOString(),
        like_count:
          Number(item.like_count ?? item.likes ?? item.likeCount ?? 0) || 0,
        comments_count:
          Number(item.comments_count ?? item.comments ?? item.commentCount ?? 0) || 0,
      };
    })
    .filter((p) => p.media_url)
    .slice(0, POST_LIMIT);
}

export async function GET() {
  const key = process.env.RAPIDAPI_KEY?.trim();
  const host = process.env.RAPIDAPI_HOST?.trim();

  if (!key || !isUsableHost(host)) {
    if (key && host && !isUsableHost(host)) {
      console.warn(
        `[instagram:api] RAPIDAPI_HOST="${host}" is not a valid RapidAPI API host. ` +
          'Copy the value beside "X-RapidAPI-Host" on the API\'s Endpoints tab, ' +
          'e.g. "instagram-scraper-stable-api.p.rapidapi.com". Serving fallback tiles.'
      );
    }
    return fallbackPayload();
  }

  // RapidAPI Instagram scrapers expose different paths depending on the
  // vendor. Try the common shapes in order; the first JSON hit wins.
  // Confirmed shapes for instagram-scraper-stable-api:
  //   /get_media_data_v2.php?username=...    (user media feed)
  //   /get_media_data_v2.php?media_code=...  (single post — verified)
  //   /v1/posts?username_or_id_or_url=...
  //   /v1/info?username_or_id_or_url=...
  //   /user/feed?username=...
  //   /get_user_info?... / /get_media_by_code?...
  const q = encodeURIComponent(USERNAME);
  const sampleMediaCode = 'DLUWkieNc0u';
  const endpoints = [
    `https://${host}/get_media_data_v2.php?username=${q}`,
    `https://${host}/get_media_data_v2.php?username=${q}&limit=12`,
    `https://${host}/get_media_data_v2.php?media_code=${sampleMediaCode}`,
    `https://${host}/v1/posts?username_or_id_or_url=${q}`,
    `https://${host}/v1/info?username_or_id_or_url=${q}`,
    `https://${host}/user/feed?username=${q}`,
    `https://${host}/get_user_info?username=${q}`,
  ];

  for (const url of endpoints) {
    try {
      const res = await fetch(url, {
        headers: {
          'x-rapidapi-key': key,
          'x-rapidapi-host': host,
        },
        next: { revalidate },
      });

      if (!res.ok) continue;

      const contentType = res.headers.get('content-type') ?? '';
      if (!contentType.includes('application/json')) continue;

      const json = await res.json();
      // Some hosts wrap posts under data.items / data.posts
      const candidate = normalise(json?.data ?? json);
      if (candidate.length > 0) {
        return NextResponse.json({ posts: candidate, source: 'rapidapi' as const });
      }
    } catch (error) {
      console.error('[instagram:api]', url, error);
    }
  }

  console.warn(
    '[instagram:api] All RapidAPI endpoints returned no usable posts — serving fallback tiles. ' +
      'Check RAPIDAPI_KEY is active and RAPIDAPI_HOST matches your subscribed API.'
  );
  return fallbackPayload();
}