"use client";

import { useEffect, useState } from "react";

export default function RoleRotator({ roles, interval = 2600 }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % roles.length), interval);
    return () => clearInterval(id);
  }, [roles.length, interval]);

  const prev = (i - 1 + roles.length) % roles.length;

  return (
    <span className="rotator" aria-hidden="true">
      {roles.map((r, n) => (
        <span key={r} className={`role${n === i ? " on" : n === prev ? " out" : ""}`}>
          {r}
        </span>
      ))}
    </span>
  );
}
