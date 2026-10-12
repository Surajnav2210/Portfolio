import Image from "next/image";

export default function Media({ src, alt, sizes = "(max-width: 720px) 100vw, 33vw", priority = false, contain = false, style }) {
  if (!src) {
    return <div className="ph" data-label={alt} role="img" aria-label={alt} />;
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      unoptimized={src.endsWith(".svg")}
      style={{ objectFit: contain ? "contain" : "cover", ...style }}
    />
  );
}
