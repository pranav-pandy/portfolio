// Organization logo on a white tile, so white-background logos stay clean in dark mode.
// Decorative: the organization's name always sits right next to it.
export default function LogoTile({ src, size = "md" }: { src: string; size?: "md" | "lg" }) {
  const dims = size === "lg" ? "h-14 w-20" : "h-11 w-16";
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      width={80}
      height={56}
      loading="lazy"
      className={`${dims} mt-1 shrink-0 rounded-[3px] border border-line bg-white object-contain`}
    />
  );
}
