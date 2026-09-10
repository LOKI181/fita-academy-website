---
name: FITA Academy 2.0
description: Premium EdTech platform for IT training and placement
colors:
  primary: "#036ad1"
  secondary: "#f5f7fa"
  accent: "#eaf3ff"
  foreground: "#0a0a0c"
  muted: "#5b6472"
  success: "#16a34a"
  destructive: "#dc2626"
  border: "#e2e4e9"
  background: "#ffffff"
typography:
  h1:
    fontFamily: Space Grotesk
    fontSize: 3.5rem
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: -0.03em
  h2:
    fontFamily: Space Grotesk
    fontSize: 2.5rem
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: -0.02em
  h3:
    fontFamily: Space Grotesk
    fontSize: 1.25rem
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.05em
rounded:
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.background}"
    rounded: "{rounded.md}"
    padding: 12px 24px
  card:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.xl}"
    padding: 24px
    border: "1px solid {colors.border}"
  glass:
    backgroundColor: "rgba(255, 255, 255, 0.72)"
    backdropFilter: "blur(16px) saturate(180%)"
    border: "1px solid rgba(255, 255, 255, 0.25)"
---

# FITA Academy 2.0 — Design System

## Overview

Premium EdTech + Modern SaaS + Editorial Design + Subtle 3D + Intelligent Motion. The website should feel like a modern technology company that provides education, not a traditional coaching center.

## Colors

- **Primary (#036ad1):** FITA Blue — CTAs, links, active states, accents
- **Secondary (#f5f7fa):** Light gray — section backgrounds, muted surfaces
- **Accent (#eaf3ff):** Soft blue — highlight badges, category tags
- **Foreground (#0a0a0c):** Near-black — headlines, body text
- **Muted (#5b6472):** Gray — captions, metadata, secondary text
- **Success (#16a34a):** Green — ratings, placement badges, success states

## Typography

- **Headlines:** Space Grotesk, extrabold, tight tracking, large sizes
- **Body:** Inter, regular weight, relaxed line-height
- **Labels:** Inter, semibold, uppercase, wide tracking

## Components

- **Cards:** Clean borders, subtle shadows, hover lift effect
- **Glass:** Frosted glass for navbar and hero overlays only
- **Bento:** Asymmetric grid layouts for feature sections
- **Buttons:** Rounded, press feedback (scale 0.96), glow on hover

## Layout

- Max-width 1280px centered
- Section padding: 4rem vertical
- Grid gaps: 1rem-1.5rem
- Mobile-first responsive breakpoints
