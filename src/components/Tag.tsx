// Small pill used for tech tags and skills.
export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-full bg-tag-bg px-3 py-1 text-xs font-medium text-tag-fg">
      {children}
    </li>
  );
}
