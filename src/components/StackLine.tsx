// Technologies as one quiet mono line. Each separator sticks to the item before it,
// so a wrapped line never starts with a stray "·".
export default function StackLine({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <p className={`meta ${className}`}>
      <span className="sr-only">Technologies: </span>
      {items.map((t, i) => (
        <span key={t}>
          <span className="whitespace-nowrap">
            {t}
            {i < items.length - 1 && <span aria-hidden="true"> ·</span>}
          </span>{" "}
        </span>
      ))}
    </p>
  );
}
