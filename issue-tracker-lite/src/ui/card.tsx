import type React from "react";

export function Card(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      style={{
        padding: 12,
        border: "1px solid #ddd",
        borderRadius: 12,
        boxShadow: "0 1px 3px rgba(0,0,0,.07)",
      }}
    />
  );
}
