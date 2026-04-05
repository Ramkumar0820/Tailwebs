import { navLinks } from "../../data/navLinks";
import { useScroll } from "../../hooks/useScroll";

export default function Header() {
  const { showHeader, scrolled } = useScroll();

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 px-4 md:px-12 lg:px-18 py-3 transition-all duration-300
        ${showHeader ? "translate-y-0" : "-translate-y-full"}
        ${scrolled ? "bg-white shadow-md" : "bg-transparent"}
        `}
      >
        <div className="max-w-480 mx-auto">
          <div className="w-full flex justify-between items-center gap-4">
            <a href="/" className="flex items-center">
              <img src="/logo.png" alt="logoFull" width={100} height={10} />
            </a>
            <nav className="hidden lg:flex gap-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-2 text-black hover:text-[#3DBFB8]"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
