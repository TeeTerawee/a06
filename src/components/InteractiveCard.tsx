"use client";

import { useState } from "react";

export default function InteractiveCard({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={
        hover
          ? "shadow-2xl bg-neutral-200 rounded-lg"
          : "shadow-lg bg-white rounded-lg"
      }
      onMouseOver={() => setHover(true)}
    >
      {children}
    </div>
  );
}
