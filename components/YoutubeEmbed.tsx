interface YoutubeEmbedProps {
  videoId: string;
  title?: string;
  aspect?: "landscape" | "portrait"; // landscape = 16:9, portrait = 9:16 (Reel)
}

export default function YoutubeEmbed({
  videoId,
  title = "YouTube video",
  aspect = "landscape",
}: YoutubeEmbedProps) {
  const paddingBottom = aspect === "portrait" ? "177.78%" : "56.25%";

  return (
    <div className="relative w-full" style={{ paddingBottom }}>
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-sm"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
