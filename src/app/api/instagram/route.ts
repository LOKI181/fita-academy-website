import { NextResponse } from 'next/server';

interface InstagramPost {
  id: string;
  caption?: string;
  media_url: string;
  permalink: string;
  timestamp: string;
  like_count?: number;
  comments_count?: number;
}

export async function GET() {
  const rapidApiKey = process.env.RAPIDAPI_KEY;
  const rapidApiHost = process.env.RAPIDAPI_HOST;

  if (!rapidApiKey || !rapidApiHost) {
    return NextResponse.json({ error: 'Instagram API not configured' }, { status: 503 });
  }

  try {
    const username = 'fitaacademy';
    const res = await fetch(`https://${rapidApiHost}/user/feed?username=${username}`, {
      headers: {
        'X-RapidAPI-Key': rapidApiKey,
        'X-RapidAPI-Host': rapidApiHost,
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`Instagram API error: ${res.status}`);
    }

    const data = await res.json();
    const posts = (data?.data as InstagramPost[] || []).slice(0, 9).map((post) => ({
      id: post.id,
      caption: post.caption?.slice(0, 100) || '',
      media_url: post.media_url,
      permalink: post.permalink,
      timestamp: post.timestamp,
      like_count: post.like_count ?? 0,
      comments_count: post.comments_count ?? 0,
    }));

    return NextResponse.json({ posts });
  } catch (error) {
    console.error('[instagram:api]', error);
    return NextResponse.json({ error: 'Failed to fetch Instagram posts' }, { status: 500 });
  }
}