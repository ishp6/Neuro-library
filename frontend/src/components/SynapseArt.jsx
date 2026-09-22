export default function SynapseArt() {
  return (
    <svg
      viewBox="0 0 420 420"
      className="w-full h-auto max-w-md mx-auto"
      role="img"
      aria-label="Illustration of a neural network with a signal traveling between nodes"
    >
      {/* background dendrite lines */}
      <g stroke="var(--color-line)" strokeWidth="1.4" fill="none">
        <path d="M60 320 L150 260 L210 300 L300 220 L360 260" />
        <path d="M40 140 L130 170 L210 120 L280 160 L370 110" />
        <path d="M150 260 L210 120" />
        <path d="M210 300 L280 160" />
        <path d="M130 170 L60 320" />
      </g>

      {/* traveling signal along the main path */}
      <path
        d="M40 140 L130 170 L210 120 L280 160 L370 110"
        stroke="var(--color-signal)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        className="synapse-pulse"
      />

      {/* nodes */}
      {[
        { x: 60, y: 320, r: 7, c: "var(--color-coral)" },
        { x: 150, y: 260, r: 5, c: "var(--color-line-light)" },
        { x: 210, y: 300, r: 6, c: "var(--color-violet)" },
        { x: 300, y: 220, r: 5, c: "var(--color-line-light)" },
        { x: 360, y: 260, r: 8, c: "var(--color-coral)" },
        { x: 40, y: 140, r: 9, c: "var(--color-signal)" },
        { x: 130, y: 170, r: 6, c: "var(--color-line-light)" },
        { x: 210, y: 120, r: 7, c: "var(--color-violet)" },
        { x: 280, y: 160, r: 6, c: "var(--color-line-light)" },
        { x: 370, y: 110, r: 9, c: "var(--color-signal)" },
      ].map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={n.r}
          fill={n.c}
          className="node-glow"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </svg>
  );
}
