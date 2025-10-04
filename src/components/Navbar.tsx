import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 right-0 z-50 p-5 md:p-8">
      <NavigationMenu>
        <NavigationMenuList className="gap-6 md:gap-8 text-nav">
          {/* Create Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent hover:opacity-60 data-[state=open]:opacity-60 text-nav p-0 h-auto">
              things i create.
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col gap-2 p-4 w-[200px] bg-background border border-border">
                <li>
                  <Link
                    to="/poetry"
                    className={`block hover:opacity-60 transition-opacity ${
                      location.pathname === "/poetry" ? "opacity-60" : "opacity-100"
                    }`}
                  >
                    poetry
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className={`block hover:opacity-60 transition-opacity ${
                      location.pathname === "/blog" ? "opacity-60" : "opacity-100"
                    }`}
                  >
                    blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/building"
                    className={`block hover:opacity-60 transition-opacity ${
                      location.pathname === "/building" ? "opacity-60" : "opacity-100"
                    }`}
                  >
                    building
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Consume Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent hover:opacity-60 data-[state=open]:opacity-60 text-nav p-0 h-auto">
              things i consume.
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col gap-2 p-4 w-[200px] bg-background border border-border">
                <li>
                  <Link
                    to="/life"
                    className={`block hover:opacity-60 transition-opacity ${
                      location.pathname === "/life" ? "opacity-60" : "opacity-100"
                    }`}
                  >
                    life
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className={`block hover:opacity-60 transition-opacity ${
                      location.pathname === "/blog" ? "opacity-60" : "opacity-100"
                    }`}
                  >
                    blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/watch-list"
                    className={`block hover:opacity-60 transition-opacity ${
                      location.pathname === "/watch-list" ? "opacity-60" : "opacity-100"
                    }`}
                  >
                    watch list
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default Navbar;
