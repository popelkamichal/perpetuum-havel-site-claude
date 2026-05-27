"use client";

import { useEffect } from "react";

interface InstagramEmbedProps {
  url: string;
}

export default function InstagramEmbed({ url }: InstagramEmbedProps) {
  useEffect(() => {
    const w = window as any;
    if (w.instgrm) {
      w.instgrm.Embeds.process();
    } else {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [url]);

  return (
    <div className="w-full">
      {/* @ts-expect-error — Instagram blockquote attrs */}
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#fff",
          border: 0,
          borderRadius: "24px",
          margin: 0,
          padding: 0,
          width: "100%",
          minWidth: "100%",
        }}
      />
    </div>
  );
}
