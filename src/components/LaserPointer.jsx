import React, { useState, useEffect } from 'react';

export function LaserPointer({ enabled }) {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setPos(newPos);
      setTrails((prev) => [newPos, ...prev.slice(0, 4)]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {trails.map((t, index) => (
        <div
          key={index}
          className="absolute rounded-full transition-all duration-75 ease-out"
          style={{
            left: `${t.x}px`,
            top: `${t.y}px`,
            transform: 'translate(-50%, -50%)',
            width: `${14 - index * 2}px`,
            height: `${14 - index * 2}px`,
            backgroundColor: 'rgba(239, 68, 68, 0.4)',
            filter: 'blur(3px)',
            opacity: 1 - index * 0.22,
          }}
        />
      ))}
      <div
        className="absolute rounded-full bg-red-500 shadow-[0_0_15px_6px_rgba(239,68,68,0.85)] border border-red-200"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: 'translate(-50%, -50%)',
          width: '10px',
          height: '10px',
        }}
      />
    </div>
  );
}
