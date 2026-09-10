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

// Fallback posts when API is not configured
const fallbackPosts: InstagramPost[] = [
  { id: '1', caption: 'Java Full Stack batch in action 🚀', media_url: '', permalink: 'https://instagram.com/fita_academy', timestamp: new Date().toISOString(), like_count: 124, comments_count: 12 },
  { id: '2', caption: 'Placement celebration 🎉', media_url: '', permalink: 'https://instagram.com/fita_academy', timestamp: new Date().toISOString(), like_count: 256, comments_count: 18 },
  { id: '3', caption: 'Data Science workshop 💡', media_url: '', permalink: 'https://instagram.com/fita_academy', timestamp: new Date().toISOString(), like_count: 189, comments_count: 9 },
  { id: '4', caption: 'AWS DevOps lab session ☁️', media_url: '', permalink: 'https://instagram.com/fita_academy', timestamp: new Date().toISOString(), like_count: 145, comments_count: 7 },
  { id: '5', caption: 'Student success story 🌟', media_url: '', permalink: 'https://instagram.com/fita_academy', timestamp: new Date().toISOString(), like_count: 312, comments_count: 24 },
  { id: '6', caption: 'Campus life at FITA 🏫', media_url: '', permalink: 'https://instagram.com/fita_academy', timestamp: new Date().toISOString(), like_count: 198, comments_count: 11 },
];

export async function GET() {
  const rapidApiKey = process.env.RAPIDAPI_KEY;
  const rapidApiHost = process.env.RAPIDAPI_HOST;

  if (!rapidApiKey || !rapidApiHost || rapidApiHost === 'rapidapi.com') {
    // Return fallback posts with placeholder images
    const posts = fallbackPosts.map((p) => ({
      ...p,
      media_url: `https://placehold.co/400x400/036ad1/ffffff?text=${encodeURIComponent(p.caption?.slice(0, 15) || 'FITA')}`,
    }));
    return NextResponse.json({ posts });
  }

  try {
    const username = 'fita_academy';
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
    // Return fallback on error
    const posts = fallbackPosts.map((p) => ({
      ...p,
      media_url: `https://placehold.co/400x400/036ad1/ffffff?text=${encodeURIComponent(p.caption?.slice(0, 15) || 'FITA')}`,
    }));
    return NextResponse.json({ posts });
  }
}
