// Organization logo on a white tile, so white-background logos stay clean in dark mode.
// Decorative: the organization's name always sits right next to it.
export default function LogoTile({ src }: { src: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      width={80}
      height={56}
      className="h-11 w-16 shrink-0 rounded-lg border border-line bg-white object-contain sm:h-14 sm:w-20"
    />
  );
}
