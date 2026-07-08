import React, { useMemo } from 'react';

const EMOJIS = ['🎉', '✨', '🥳', '⭐', '🎊'];

// Lightweight, dependency-free confetti burst made of a handful of emoji
// spans that fall with CSS keyframes (see the `.confetti-piece` rule in
// App.css). Renders nothing after mount is up to the parent (mount for a
// couple seconds then unmount).
export default function Confetti({ count = 18 }) {
  const pieces = useMemo(() => (
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.4,
      duration: 1.4 + Math.random() * 1.2,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
      rotate: Math.random() * 360,
    }))
  ), [count]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[200] overflow-hidden">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti-piece absolute text-2xl"
          style={{
            left: `${p.left}%`,
            top: '-5%',
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            transform: `rotate(${p.rotate}deg)`,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}
