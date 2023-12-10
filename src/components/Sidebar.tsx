interface SidebarProps {
  collipse?: boolean;
}
export default function Sidebar({ collipse = false }: SidebarProps) {
  return (
    <nav
      className={`transition-all duration-300 ease-in-out bg-green-100 h-full md:w-[25rem] ${
        collipse ? "w-0" : "w-[25rem]"
      }`}
    >
      Sidebar
    </nav>
  );
}
