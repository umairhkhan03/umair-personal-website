import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  const links = [
    { path: "/about", label: "about" },
    { path: "/reading", label: "reading" },
    { path: "/life", label: "life" },
    { path: "/poetry", label: "poetry" },
    { path: "/blog", label: "blog" },
    { path: "/building", label: "building" },
  ];

  return (
    <nav className="fixed top-0 right-0 z-50 p-5 md:p-8">
      <ul className="flex gap-6 md:gap-8 text-nav">
        {links.map(({ path, label }) => (
          <li key={path}>
            <Link
              to={path}
              className={`transition-opacity hover:opacity-60 ${
                location.pathname === path ? "opacity-60" : "opacity-100"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
