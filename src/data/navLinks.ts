import type { NavLink } from "../types";
import { ROUTES } from "../constants/routes";

export const navLinks: NavLink[] = [
  {
    name: "About Us",
    href: ROUTES.ABOUT,
  },
  {
    name: "Areas of work",
    href: ROUTES.AREAS_OF_WORK,
  },
  {
    name: "Products & Solutions",
    href: ROUTES.PRODUCTS_AND_SOLUTIONS,
  },
  {
    name: "Our Platform",
    href: ROUTES.OUR_PLATFORM,
  },
  {
    name: "Ecosystem",
    href: ROUTES.ECOSYSTEM,
  },
  {
    name: "Resources",
    href: ROUTES.RESOURCES,
  },
];