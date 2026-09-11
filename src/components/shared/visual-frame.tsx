import { cn } from "cn";

/**
 * VisualFrame — premium SSR-safe illustrations for FITA Academy.
 * Each variant renders a rich, detailed SVG scene with animated elements.
 */
export function VisualFrame({
  variant = "hero",
  className,
  label,
  children,
}: {
  variant?: "hero" | "about" | "course" | "trainer" | "placement";
  className?: string;
  label?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-[1.75rem] border border-white/10 bg-ink shadow-[var(--e4)]",
        className
      )}
      role="img"
      aria-label={label ?? "FITA Academy premium visual"}
    >
      {/* ── Base deep gradient ───────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#06101e] via-[#0a1a3a] to-[#0f2a5e]" />

      {/* ── Ambient glow orbs ────────────────────────────── */}
      <div className="absolute -top-32 -right-32 size-[35rem] rounded-full bg-gradient-to-br from-blue-500/25 to-purple-500/20 blur-[100px]" aria-hidden />
      <div className="absolute -bottom-32 -left-32 size-[35rem] rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-600/15 blur-[100px]" aria-hidden />

      {/* ── HERO VARIANT ─────────────────────────────────── */}
      {variant === "hero" && (
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 600 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Subtle grid pattern */}
          <defs>
            <pattern id="heroGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e3a5f" strokeWidth="0.4" opacity="0.5"/>
            </pattern>
            <linearGradient id="heroGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2"/>
            </linearGradient>
            <filter id="heroBlur">
              <feGaussianBlur stdDeviation="2"/>
            </filter>
          </defs>
          <rect width="600" height="500" fill="url(#heroGrid)"/>

          {/* ── Central code editor window ─────────────── */}
          <g transform="translate(90, 50)">
            {/* Window frame with glow */}
            <rect x="0" y="0" width="420" height="300" rx="16" fill="#0a1628" stroke="#2563eb" strokeWidth="1.5" opacity="0.95"/>
            <rect x="0" y="0" width="420" height="44" rx="16" fill="#0e1e3a" stroke="#2563eb" strokeWidth="1.5"/>
            <rect x="0" y="30" width="420" height="14" fill="#0e1e3a"/>

            {/* Window traffic lights */}
            <circle cx="24" cy="22" r="6" fill="#ef4444"/>
            <circle cx="44" cy="22" r="6" fill="#f59e0b"/>
            <circle cx="64" cy="22" r="6" fill="#22c55e"/>

            {/* Tab bar */}
            <rect x="100" y="10" width="120" height="24" rx="6" fill="#1a2d4a" stroke="#2a4a7a" strokeWidth="0.8"/>
            <text x="160" y="26" fontFamily="monospace" fontSize="10" fill="#60a5fa" fontWeight="600" textAnchor="middle">career.js</text>
            <rect x="230" y="10" width="100" height="24" rx="6" fill="#0e1e3a"/>
            <text x="280" y="26" fontFamily="monospace" fontSize="10" fill="#64748b" textAnchor="middle">resume.ts</text>

            {/* Line numbers */}
            <g fontFamily="'JetBrains Mono', 'Fira Code', monospace" fontSize="11" fill="#334155">
              <text x="20" y="72">1</text>
              <text x="20" y="92">2</text>
              <text x="20" y="112">3</text>
              <text x="20" y="132">4</text>
              <text x="20" y="152">5</text>
              <text x="20" y="172">6</text>
              <text x="20" y="192">7</text>
              <text x="20" y="212">8</text>
              <text x="20" y="232">9</text>
              <text x="14" y="252">10</text>
              <text x="14" y="272">11</text>
            </g>

            {/* Code lines with syntax highlighting */}
            <g fontFamily="'JetBrains Mono', 'Fira Code', monospace" fontSize="12">
              <text x="42" y="72" fill="#c084fc" fontWeight="600">const</text>
              <text x="88" y="72" fill="#e2e8f0">buildCareer </text>
              <text x="182" y="72" fill="#94a3b8">= </text>
              <text x="196" y="72" fill="#f472b6">(student)</text>
              <text x="275" y="72" fill="#94a3b8"> =&gt; {"{"}</text>

              <text x="54" y="92" fill="#64748b">{"// Real projects that deploy to production"}</text>

              <text x="54" y="112" fill="#c084fc" fontWeight="600">const</text>
              <text x="100" y="112" fill="#67e8f9"> projects </text>
              <text x="180" y="112" fill="#94a3b8">= </text>
              <text x="194" y="112" fill="#e2e8f0">student.</text>
              <text x="260" y="112" fill="#fbbf24">buildProjects</text>
              <text x="370" y="112" fill="#94a3b8">();</text>

              <text x="54" y="132" fill="#64748b">{"// Mock interviews with industry mentors"}</text>

              <text x="54" y="152" fill="#c084fc" fontWeight="600">const</text>
              <text x="100" y="152" fill="#67e8f9"> interviews </text>
              <text x="195" y="152" fill="#94a3b8">= </text>
              <text x="209" y="152" fill="#e2e8f0">student.</text>
              <text x="275" y="152" fill="#fbbf24">mockInterviews</text>
              <text x="395" y="152" fill="#94a3b8">();</text>

              <text x="54" y="172" fill="#64748b">{"// Placement offers from 3000+ partners"}</text>

              <text x="54" y="192" fill="#c084fc" fontWeight="600">const</text>
              <text x="100" y="192" fill="#67e8f9"> offers </text>
              <text x="162" y="192" fill="#94a3b8">= </text>
              <text x="176" y="192" fill="#e2e8f0">student.</text>
              <text x="242" y="192" fill="#fbbf24">getOffers</text>
              <text x="325" y="192" fill="#94a3b8">();</text>

              <text x="54" y="212" fill="#c084fc" fontWeight="600">return</text>
              <text x="110" y="212" fill="#e2e8f0"> {"{ "}</text>
              <text x="140" y="212" fill="#67e8f9">projects</text>
              <text x="215" y="212" fill="#e2e8f0">, interviews, offers {"}"}</text>
              <text x="375" y="212" fill="#94a3b8">;</text>

              <text x="42" y="232" fill="#94a3b8">{"};"}</text>

              <text x="42" y="258" fill="#22c55e" fontWeight="500">{"// ✅ 94% placement rate — since 1999"}</text>
              <text x="42" y="278" fill="#60a5fa" fontWeight="600">export</text>
              <text x="90" y="278" fill="#e2e8f0"> default </text>
              <text x="160" y="278" fill="#fbbf24">buildCareer</text>
              <text x="255" y="278" fill="#94a3b8">;</text>
            </g>

            {/* Cursor blink */}
            <rect x="255" y="265" width="2" height="16" fill="#60a5fa" opacity="0.8">
              <animate attributeName="opacity" values="0.8;0;0.8" dur="1.2s" repeatCount="indefinite"/>
            </rect>
          </g>

          {/* ── Floating stat card: top-right ──────────── */}
          <g transform="translate(440, 40)">
            <rect width="140" height="80" rx="14" fill="#0e1e3a" stroke="#2563eb" strokeWidth="1" opacity="0.9"/>
            <rect width="140" height="80" rx="14" fill="url(#heroGlow)" opacity="0.15"/>
            <circle cx="30" cy="28" r="12" fill="#22c55e" opacity="0.2"/>
            <circle cx="30" cy="28" r="5" fill="#22c55e">
              <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite"/>
            </circle>
            <text x="52" y="24" fontFamily="sans-serif" fontSize="9" fill="#94a3b8" fontWeight="500">Live batch</text>
            <text x="52" y="38" fontFamily="sans-serif" fontSize="11" fill="#e2e8f0" fontWeight="700">Running now</text>
            <text x="16" y="62" fontFamily="sans-serif" fontSize="22" fill="#22c55e" fontWeight="800">25+</text>
            <text x="52" y="62" fontFamily="sans-serif" fontSize="9" fill="#94a3b8">students enrolled</text>
          </g>

          {/* ── Floating placement card: bottom-left ──── */}
          <g transform="translate(20, 380)">
            <rect width="180" height="90" rx="14" fill="#0e1e3a" stroke="#8b5cf6" strokeWidth="1" opacity="0.9"/>
            <text x="18" y="24" fontFamily="sans-serif" fontSize="9" fill="#94a3b8" fontWeight="600" letterSpacing="1">PLACEMENT RATE</text>
            <text x="18" y="52" fontFamily="sans-serif" fontSize="32" fill="#8b5cf6" fontWeight="900">94%</text>
            <rect x="18" y="62" width="144" height="6" rx="3" fill="#1a2d4a"/>
            <rect x="18" y="62" width="135" height="6" rx="3" fill="linear-gradient(90deg,#8b5cf6,#60a5fa)">
              <animate attributeName="width" from="0" to="135" dur="1.5s" fill="freeze"/>
            </rect>
            <text x="18" y="82" fontFamily="sans-serif" fontSize="8" fill="#64748b">Students hired at top companies</text>
          </g>

          {/* ── Floating card: bottom-right ────────────── */}
          <g transform="translate(420, 340)">
            <rect width="155" height="85" rx="14" fill="#0e1e3a" stroke="#f59e0b" strokeWidth="1" opacity="0.9"/>
            <circle cx="30" cy="28" r="14" fill="#f59e0b" opacity="0.15"/>
            <text x="30" y="33" fontFamily="sans-serif" fontSize="16" textAnchor="middle">⭐</text>
            <text x="52" y="24" fontFamily="sans-serif" fontSize="20" fill="#f59e0b" fontWeight="900">4.8</text>
            <text x="52" y="38" fontFamily="sans-serif" fontSize="8" fill="#94a3b8">Google Rating</text>
            <text x="18" y="62" fontFamily="sans-serif" fontSize="8" fill="#64748b">★★★★★</text>
            <text x="18" y="76" fontFamily="sans-serif" fontSize="8" fill="#94a3b8">500+ reviews</text>
          </g>

          {/* ── Animated connection lines ───────────────── */}
          <line x1="510" y1="120" x2="530" y2="340" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" opacity="0.3">
            <animate attributeName="stroke-dashoffset" from="40" to="0" dur="3s" repeatCount="indefinite"/>
          </line>
          <line x1="160" y1="350" x2="310" y2="470" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="4 4" opacity="0.3">
            <animate attributeName="stroke-dashoffset" from="40" to="0" dur="4s" repeatCount="indefinite"/>
          </line>

          {/* ── Floating particles ─────────────────────── */}
          <circle cx="50" cy="80" r="3" fill="#60a5fa" opacity="0.5">
            <animate attributeName="cy" values="80;65;80" dur="4s" repeatCount="indefinite"/>
          </circle>
          <circle cx="560" cy="200" r="2.5" fill="#a78bfa" opacity="0.5">
            <animate attributeName="cy" values="200;185;200" dur="3.5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="300" cy="460" r="2" fill="#22d3ee" opacity="0.5">
            <animate attributeName="cy" values="460;445;460" dur="3s" repeatCount="indefinite"/>
          </circle>
          <circle cx="80" cy="400" r="2" fill="#fbbf24" opacity="0.4">
            <animate attributeName="cy" values="400;388;400" dur="4.5s" repeatCount="indefinite"/>
          </circle>
        </svg>
      )}

      {/* ── ABOUT VARIANT ───────────────────────────────── */}
      {variant === "about" && (
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 600 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern id="aboutGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e3a5f" strokeWidth="0.4" opacity="0.4"/>
            </pattern>
          </defs>
          <rect width="600" height="500" fill="url(#aboutGrid)"/>

          {/* ── Mentor figure (left) ──────────────────── */}
          <g transform="translate(80, 100)">
            {/* Body */}
            <ellipse cx="60" cy="170" rx="45" ry="55" fill="#1a3a5e" stroke="#2563eb" strokeWidth="1"/>
            {/* Head */}
            <circle cx="60" cy="80" r="42" fill="#0e1e3a" stroke="#2563eb" strokeWidth="1.5"/>
            <circle cx="60" cy="72" r="28" fill="#1a3a5e"/>
            {/* Face */}
            <circle cx="48" cy="68" r="4" fill="#60a5fa"/>
            <circle cx="72" cy="68" r="4" fill="#60a5fa"/>
            <path d="M45 88 Q60 98 75 88" stroke="#22c55e" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            {/* Laptop glow */}
            <rect x="15" y="140" width="90" height="55" rx="8" fill="#0a1628" stroke="#2563eb" strokeWidth="1"/>
            <rect x="20" y="145" width="80" height="35" rx="4" fill="#0e1e3a"/>
            <text x="60" y="165" fontFamily="monospace" fontSize="8" fill="#60a5fa" textAnchor="middle">mentor@fita</text>
            <rect x="20" y="185" width="80" height="5" rx="2" fill="#1a2d4a"/>
            <text x="22" y="190" fontFamily="monospace" fontSize="4" fill="#334155">{"▸ "}</text>

            {/* Label */}
            <rect x="-10" y="240" width="140" height="36" rx="10" fill="#0e1e3a" stroke="#2563eb" strokeWidth="1"/>
            <text x="60" y="256" fontFamily="sans-serif" fontSize="10" fill="#60a5fa" fontWeight="700" textAnchor="middle">Industry Mentor</text>
            <text x="60" y="270" fontFamily="sans-serif" fontSize="8" fill="#94a3b8" textAnchor="middle">15+ years experience</text>
          </g>

          {/* ── Student figure (right) ─────────────────── */}
          <g transform="translate(360, 120)">
            <ellipse cx="60" cy="160" rx="45" ry="50" fill="#1a3a5e" stroke="#a78bfa" strokeWidth="1"/>
            <circle cx="60" cy="75" r="42" fill="#0e1e3a" stroke="#a78bfa" strokeWidth="1.5"/>
            <circle cx="60" cy="67" r="28" fill="#1a3a5e"/>
            <circle cx="48" cy="63" r="4" fill="#a78bfa"/>
            <circle cx="72" cy="63" r="4" fill="#a78bfa"/>
            <path d="M45 83 Q60 93 75 83" stroke="#fbbf24" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            {/* Notepad */}
            <rect x="20" y="130" width="80" height="60" rx="8" fill="#0a1628" stroke="#a78bfa" strokeWidth="1"/>
            <text x="30" y="150" fontFamily="monospace" fontSize="7" fill="#a78bfa">{"// notes"}</text>
            <text x="30" y="162" fontFamily="monospace" fontSize="7" fill="#67e8f9">React, Node</text>
            <text x="30" y="174" fontFamily="monospace" fontSize="7" fill="#fbbf24">Portfolio ready!</text>

            <rect x="-10" y="225" width="140" height="36" rx="10" fill="#0e1e3a" stroke="#a78bfa" strokeWidth="1"/>
            <text x="60" y="241" fontFamily="sans-serif" fontSize="10" fill="#a78bfa" fontWeight="700" textAnchor="middle">Student</text>
            <text x="60" y="255" fontFamily="sans-serif" fontSize="8" fill="#94a3b8" textAnchor="middle">Ready to launch career</text>
          </g>

          {/* ── Knowledge transfer arrows ──────────────── */}
          <g>
            {/* Arrow 1 */}
            <path d="M185 190 C240 160 320 180 355 195" stroke="#60a5fa" strokeWidth="2" strokeDasharray="6 4" fill="none" strokeLinecap="round">
              <animate attributeName="stroke-dashoffset" from="50" to="0" dur="2.5s" repeatCount="indefinite"/>
            </path>
            <polygon points="355,190 365,195 355,200" fill="#60a5fa" opacity="0.8"/>

            {/* Arrow 2 */}
            <path d="M185 220 C240 250 320 240 355 225" stroke="#a78bfa" strokeWidth="2" strokeDasharray="6 4" fill="none" strokeLinecap="round">
              <animate attributeName="stroke-dashoffset" from="50" to="0" dur="3s" repeatCount="indefinite"/>
            </path>
            <polygon points="355,220 365,225 355,230" fill="#a78bfa" opacity="0.8"/>
          </g>

          {/* ── Knowledge bubble ───────────────────────── */}
          <g transform="translate(230, 155)">
            <rect width="130" height="60" rx="12" fill="#0e1e3a" stroke="#22c55e" strokeWidth="1.5"/>
            <text x="65" y="22" fontFamily="sans-serif" fontSize="9" fill="#22c55e" fontWeight="700" textAnchor="middle">Live Mentoring</text>
            <text x="65" y="38" fontFamily="monospace" fontSize="8" fill="#67e8f9" textAnchor="middle">mentor.review(code)</text>
            <text x="65" y="50" fontFamily="monospace" fontSize="7" fill="#94a3b8" textAnchor="middle">Real-time feedback</text>
          </g>

          {/* ── Bottom stat badges ─────────────────────── */}
          <g transform="translate(30, 400)">
            <rect width="150" height="70" rx="12" fill="#0e1e3a" stroke="#2563eb" strokeWidth="1" opacity="0.9"/>
            <text x="75" y="24" fontFamily="sans-serif" fontSize="9" fill="#94a3b8" fontWeight="600" textAnchor="middle" letterSpacing="1">YEARS</text>
            <text x="75" y="50" fontFamily="sans-serif" fontSize="28" fill="#60a5fa" fontWeight="900" textAnchor="middle">25+</text>
            <text x="75" y="64" fontFamily="sans-serif" fontSize="8" fill="#64748b" textAnchor="middle">Of Excellence</text>
          </g>

          <g transform="translate(225, 400)">
            <rect width="150" height="70" rx="12" fill="#0e1e3a" stroke="#22c55e" strokeWidth="1" opacity="0.9"/>
            <text x="75" y="24" fontFamily="sans-serif" fontSize="9" fill="#94a3b8" fontWeight="600" textAnchor="middle" letterSpacing="1">PLACED</text>
            <text x="75" y="50" fontFamily="sans-serif" fontSize="28" fill="#22c55e" fontWeight="900" textAnchor="middle">10K+</text>
            <text x="75" y="64" fontFamily="sans-serif" fontSize="8" fill="#64748b" textAnchor="middle">Students hired</text>
          </g>

          <g transform="translate(420, 400)">
            <rect width="150" height="70" rx="12" fill="#0e1e3a" stroke="#f59e0b" strokeWidth="1" opacity="0.9"/>
            <text x="75" y="24" fontFamily="sans-serif" fontSize="9" fill="#94a3b8" fontWeight="600" textAnchor="middle" letterSpacing="1">BRANCHES</text>
            <text x="75" y="50" fontFamily="sans-serif" fontSize="28" fill="#f59e0b" fontWeight="900" textAnchor="middle">8+</text>
            <text x="75" y="64" fontFamily="sans-serif" fontSize="8" fill="#64748b" textAnchor="middle">Cities across India</text>
          </g>

          {/* Floating particles */}
          <circle cx="50" cy="60" r="2.5" fill="#60a5fa" opacity="0.5">
            <animate attributeName="cy" values="60;48;60" dur="4s" repeatCount="indefinite"/>
          </circle>
          <circle cx="550" cy="100" r="2" fill="#a78bfa" opacity="0.5">
            <animate attributeName="cy" values="100;88;100" dur="3.5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="300" cy="340" r="2" fill="#22d3ee" opacity="0.4">
            <animate attributeName="cy" values="340;328;340" dur="3s" repeatCount="indefinite"/>
          </circle>
        </svg>
      )}

      {/* ── COURSE VARIANT ──────────────────────────────── */}
      {variant === "course" && (
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 500 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern id="courseGrid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1e3a5f" strokeWidth="0.3" opacity="0.4"/>
            </pattern>
          </defs>
          <rect width="500" height="400" fill="url(#courseGrid)"/>

          {/* Curriculum card */}
          <g transform="translate(30, 30)">
            <rect width="440" height="340" rx="16" fill="#0a1628" stroke="#2563eb" strokeWidth="1.2"/>
            <rect width="440" height="44" rx="16" fill="#0e1e3a"/>
            <rect width="440" height="44" y="16" fill="#0e1e3a"/>
            <circle cx="24" cy="22" r="6" fill="#ef4444"/>
            <circle cx="44" cy="22" r="6" fill="#f59e0b"/>
            <circle cx="64" cy="22" r="6" fill="#22c55e"/>
            <text x="220" y="26" fontFamily="sans-serif" fontSize="11" fill="#94a3b8" textAnchor="middle" fontWeight="600">Course Curriculum</text>

            {/* Module rows */}
            {[
              { y: 60, num: "01", title: "Programming Fundamentals", items: "Java, Python, DSA", color: "#60a5fa" },
              { y: 110, num: "02", title: "Frontend Development", items: "React, Next.js, Tailwind", color: "#a78bfa" },
              { y: 160, num: "03", title: "Backend & APIs", items: "Node.js, Express, REST", color: "#22c55e" },
              { y: 210, num: "04", title: "Database & Cloud", items: "MongoDB, PostgreSQL, AWS", color: "#f59e0b" },
              { y: 260, num: "05", title: "DevOps & Deployment", items: "Docker, CI/CD, Kubernetes", color: "#f472b6" },
            ].map((m) => (
              <g key={m.num} transform={`translate(20, ${m.y})`}>
                <rect width="400" height="40" rx="10" fill="#0e1e3a" stroke="#1a2d4a" strokeWidth="0.8"/>
                <circle cx="28" cy="20" r="14" fill={m.color} opacity="0.15"/>
                <text x="28" y="24" fontFamily="monospace" fontSize="10" fill={m.color} fontWeight="700" textAnchor="middle">{m.num}</text>
                <text x="52" y="16" fontFamily="sans-serif" fontSize="11" fill="#e2e8f0" fontWeight="600">{m.title}</text>
                <text x="52" y="30" fontFamily="sans-serif" fontSize="9" fill="#64748b">{m.items}</text>
                {/* Checkmark */}
                <circle cx="380" cy="20" r="10" fill={m.color} opacity="0.15"/>
                <text x="380" y="24" fontFamily="sans-serif" fontSize="10" fill={m.color} textAnchor="middle">✓</text>
              </g>
            ))}

            {/* Progress bar */}
            <g transform="translate(20, 310)">
              <text x="0" y="0" fontFamily="sans-serif" fontSize="9" fill="#94a3b8" fontWeight="600">COURSE PROGRESS</text>
              <rect x="0" y="8" width="400" height="6" rx="3" fill="#1a2d4a"/>
              <rect x="0" y="8" width="320" height="6" rx="3" fill="url(#heroGlow)">
                <animate attributeName="width" from="0" to="320" dur="2s" fill="freeze"/>
              </rect>
              <text x="330" y="16" fontFamily="sans-serif" fontSize="10" fill="#60a5fa" fontWeight="700">80%</text>
            </g>
          </g>
        </svg>
      )}

      {/* ── TRAINER VARIANT ─────────────────────────────── */}
      {variant === "trainer" && (
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 500 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern id="trainerGrid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1e3a5f" strokeWidth="0.3" opacity="0.4"/>
            </pattern>
          </defs>
          <rect width="500" height="400" fill="url(#trainerGrid)"/>

          {/* Trainer profile card */}
          <g transform="translate(100, 30)">
            <rect width="300" height="340" rx="20" fill="#0a1628" stroke="#f59e0b" strokeWidth="1.5"/>
            {/* Avatar circle */}
            <circle cx="150" cy="90" r="50" fill="#1a3a5e" stroke="#f59e0b" strokeWidth="2"/>
            <circle cx="150" cy="78" r="24" fill="#0e1e3a"/>
            <ellipse cx="150" cy="130" rx="32" ry="35" fill="#0e1e3a"/>
            <circle cx="140" cy="74" r="3.5" fill="#f59e0b"/>
            <circle cx="160" cy="74" r="3.5" fill="#f59e0b"/>
            <path d="M137 90 Q150 100 163 90" stroke="#22c55e" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

            {/* Name */}
            <text x="150" y="170" fontFamily="sans-serif" fontSize="16" fill="#e2e8f0" fontWeight="800" textAnchor="middle">Senior Trainer</text>
            <text x="150" y="188" fontFamily="sans-serif" fontSize="10" fill="#f59e0b" textAnchor="middle">Full Stack Development</text>

            {/* Stats grid */}
            {[
              { y: 210, label: "Experience", value: "15+ yrs", color: "#60a5fa" },
              { y: 248, label: "Students", value: "5,000+", color: "#22c55e" },
              { y: 286, label: "Rating", value: "4.9/5", color: "#f59e0b" },
            ].map((s) => (
              <g key={s.label} transform={`translate(30, ${s.y})`}>
                <rect width="240" height="30" rx="8" fill="#0e1e3a" stroke="#1a2d4a" strokeWidth="0.8"/>
                <text x="16" y="20" fontFamily="sans-serif" fontSize="9" fill="#64748b">{s.label}</text>
                <text x="224" y="20" fontFamily="sans-serif" fontSize="12" fill={s.color} fontWeight="700" textAnchor="end">{s.value}</text>
              </g>
            ))}
          </g>
        </svg>
      )}

      {/* ── PLACEMENT VARIANT ───────────────────────────── */}
      {variant === "placement" && (
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 500 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern id="placeGrid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1e3a5f" strokeWidth="0.3" opacity="0.4"/>
            </pattern>
          </defs>
          <rect width="500" height="400" fill="url(#placeGrid)"/>

          {/* Offer letter cards */}
          {[
            { x: 20, y: 20, company: "TCS", role: "Full Stack Dev", pkg: "₹6.5 LPA", color: "#60a5fa" },
            { x: 175, y: 10, company: "Infosys", role: "React Developer", pkg: "₹5.8 LPA", color: "#22c55e" },
            { x: 330, y: 20, company: "Zoho", role: "Backend Engineer", pkg: "₹7.2 LPA", color: "#a78bfa" },
            { x: 20, y: 150, company: "Accenture", role: "Cloud Engineer", pkg: "₹6.8 LPA", color: "#f59e0b" },
            { x: 175, y: 140, company: "Cognizant", role: "Data Scientist", pkg: "₹6.2 LPA", color: "#f472b6" },
            { x: 330, y: 150, company: "Wipro", role: "DevOps Engineer", pkg: "₹7.5 LPA", color: "#22d3ee" },
          ].map((o) => (
            <g key={o.company} transform={`translate(${o.x}, ${o.y})`}>
              <rect width="140" height="120" rx="12" fill="#0a1628" stroke={o.color} strokeWidth="1" opacity="0.9"/>
              <rect x="12" y="12" width="50" height="20" rx="6" fill={o.color} opacity="0.15"/>
              <text x="37" y="26" fontFamily="sans-serif" fontSize="9" fill={o.color} fontWeight="700" textAnchor="middle">{o.company}</text>
              <text x="12" y="52" fontFamily="sans-serif" fontSize="11" fill="#e2e8f0" fontWeight="600">{o.role}</text>
              <text x="12" y="72" fontFamily="sans-serif" fontSize="16" fill={o.color} fontWeight="800">{o.pkg}</text>
              <text x="12" y="90" fontFamily="sans-serif" fontSize="8" fill="#22c55e">✓ Offer received</text>
              <rect x="12" y="100" width="116" height="4" rx="2" fill="#1a2d4a"/>
              <rect x="12" y="100" width={116 * 0.94} height="4" rx="2" fill={o.color} opacity="0.5"/>
            </g>
          ))}

          {/* Central percentage badge */}
          <circle cx="250" cy="340" r="40" fill="#0a1628" stroke="#22c55e" strokeWidth="2.5"/>
          <text x="250" y="336" fontFamily="sans-serif" fontSize="24" fill="#22c55e" fontWeight="900" textAnchor="middle">94%</text>
          <text x="250" y="354" fontFamily="sans-serif" fontSize="8" fill="#94a3b8" textAnchor="middle">Placement Rate</text>
        </svg>
      )}

      {/* ── Film grain overlay ──────────────────────────── */}
      <div className="noise absolute inset-0" aria-hidden />

      {/* ── Content slot (text overlays) ────────────────── */}
      <div className="relative z-10 flex h-full flex-col justify-end p-6">{children}</div>
    </div>
  );
}
