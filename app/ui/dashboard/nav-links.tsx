"use client";

import React from "react";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const links = [
  { name: "Accueil", href: "/dashboard", icon: HomeIcon },
  {
    name: "Factures",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  { name: "Clients", href: "/dashboard/customers", icon: UserGroupIcon },
];

function NavLinks() {
  const pathName = usePathname();
  return (
    <>
      {links.map((single) => {
        const LinkIcon = single.icon;
        return (
          <Link
            key={single.name}
            href={single.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathName === single.href,
              }
            )}
          >
            <LinkIcon  className="w-6"/>
            <p className="hidden md:block">{single.name}</p>
          </Link>
        );
      })}
    </>
  );
}

export default NavLinks;
