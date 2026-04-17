"use client";

import { useState } from "react";

export default function HostPhoto({
  src,
  alt,
  initials,
  variant = "photo",
}: {
  src: string;
  alt: string;
  initials: string;
  variant?: "photo" | "logo";
}) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`host-photo${variant === "logo" ? " is-logo" : ""}`}>
      {failed ? (
        initials
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} onError={() => setFailed(true)} />
      )}
    </div>
  );
}
