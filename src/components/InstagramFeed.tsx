'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface InstagramPost {
  id: string;
  caption: string;
  media_url: string;
  permalink: string;
  timestamp: string;
  like_count: number;
  comments_count: number;
}

export function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('/api/instagram');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setPosts(data.posts || []);
      } catch (err) {
        setError('Unable to load Instagram feed');
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-3 gap-4" aria-busy="true">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="aspect-square bg-gray-100 animate-pulse rounded-lg" />
        ))}
      </div>
    );
  }

  if (error || posts.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>Instagram feed unavailable</p>
        <a
          href="https://instagram.com/fitaacademy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mt-2 inline-block"
        >
          Visit FITA Academy on Instagram
        </a>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4" role="list" aria-label="Instagram posts">
      {posts.map((post) => (
        <article key={post.id} className="group relative" role="listitem">
          <a
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="block aspect-square overflow-hidden rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={`View Instagram post: ${post.caption || 'FITA Academy post'}`}
          >
            <Image
              src={post.media_url}
              alt={post.caption || 'FITA Academy Instagram post'}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-4">
              <div className="text-white w-full">
                <p className="text-sm font-medium truncate">{post.caption || 'FITA Academy'}</p>
                <div className="flex gap-4 text-xs mt-1 opacity-90">
                  <span>❤️ {post.like_count.toLocaleString()}</span>
                  <span>💬 {post.comments_count.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </a>
        </article>
      ))}
    </div>
  );
}