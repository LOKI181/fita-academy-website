'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

function GoogleAnalyticsInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  useEffect(() => {
    if (!gaId || typeof window === 'undefined' || !window.gtag) return
    window.gtag('config', gaId, { page_path: pathname + searchParams?.toString() })
  }, [pathname, searchParams, gaId])

  return null
}

export function GoogleAnalytics() {
  return (
    <Suspense fallback={null}>
      <GoogleAnalyticsInner />
    </Suspense>
  )
}