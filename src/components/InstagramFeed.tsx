'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Camera, Heart, MessageCircle } from 'lucide-react';

interface InstagramPost {
  id: string;
  caption: string;
  media_url: string;
  permalink: string;
  timestamp: string;
  like_count: number;
  comments_count: number;
}

const GRADIENTS = [
  'linear-gradient(140deg,#1d63ed,#0b3fb0)',
  'linear-gradient(140deg,#0ea5e9,#1d63ed)',
  'linear-gradient(140deg,#6f9dff,#1d63ed)',
  'linear-gradient(140deg,#8b5cf6,#1d63ed)',
  'linear-gradient(140deg,#0b3fb0,#123a8f)',
  'linear-gradient(140deg,#3b82f6,#0b3fb0)',
];

export function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [broken, setBroken] = useState<Record<string, boolean>>({});

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch('/api/instagram');
        if (!res.ok) throw new Error('failed');
        const data = await res.json();
        if (!cancelled) setPosts(Array.isArray(data.posts) ? data.posts : []);
      } catch {
        if (!cancelled) setPosts([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3" aria-busy="true">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square animate-pulse rounded-2xl bg-[linear-gradient(140deg,var(--mist),var(--azure-soft))]"
          />
        ))}
      </div>
    );
  }

  const visible = posts.slice(0, 9);

  return (
    <div
      role="list"
      aria-label="Instagram posts"
      className="grid grid-cols-2 gap-3 sm:grid-cols-3"
    >
      {visible.map((post, i) => {
        const showImage = Boolean(post.media_url) && !broken[post.id];
        return (
          <article key={post.id} role="listitem" className="group relative">
            <a
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View Instagram post: ${post.caption || 'FITA Academy post'}`}
              className="relative block aspect-square overflow-hidden rounded-2xl border border-border bg-ink shadow-[var(--e2)] outline-none transition-transform duration-500 [transition-timing-function:var(--ease-out-expo)] focus-visible:ring-2 focus-visible:ring-primary group-hover:-translate-y-1 group-hover:shadow-[var(--e4)]"
            >
              {showImage ? (
                <Image
                  src={post.media_url}
                  alt={post.caption || 'FITA Academy Instagram post'}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  onError={() => setBroken((b) => ({ ...b, [post.id]: true }))}
                />
              ) : (
                /* Designed fallback tile — brand gradient + caption */
                <span
                  className="absolute inset-0 grid place-items-center p-4 text-center"
                  style={{ background: GRADIENTS[i % GRADIENTS.length] }}
                >
                  <span className="font-heading text-[0.8rem] font-bold leading-snug text-white/95">
                    {post.caption || 'FITA Academy'}
                  </span>
                  <span className="noise absolute inset-0" aria-hidden />
                </span>
              )}

              {/* Hover overlay */}
              <span className="absolute inset-0 flex items-end bg-[linear-gradient(180deg,transparent_40%,rgba(5,8,15,0.85))] p-3.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="w-full">
                  <span className="line-clamp-2 block text-[0.75rem] font-medium leading-snug text-white">
                    {post.caption || 'FITA Academy'}
                  </span>
                  <span className="mt-1.5 flex items-center gap-3 text-[0.68rem] text-white/80">
                    <span className="inline-flex items-center gap-1">
                      <Heart className="size-3 fill-current" aria-hidden />
                      {post.like_count.toLocaleString()}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MessageCircle className="size-3" aria-hidden />
                      {post.comments_count.toLocaleString()}
                    </span>
                  </span>
                </span>
              </span>

              <span
                className="absolute right-3 top-3 grid size-7 place-items-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden
              >
                <Camera className="size-3.5" />
              </span>
            </a>
          </article>
        );
      })}
    </div>
  );
}