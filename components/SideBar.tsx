"use client";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import links from "@/utils/link";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SideBar() {
  const pathName = usePathname();
  return (
    <aside className="py-4 px-8 bg-muted h-full">
      <Image src={Logo} alt="logo" className="mx-auto" />
      <div className="flex flex-col mt-20 gap-y-4">
        {links.map((link) => {
          return (
            <Button
              asChild
              key={link.href}
              variant={pathName === link.href ? "default" : "link"}
            >
              <Link href={link.href} className="flex items-center gap-x-2 ">
                {link.icon}
                <span className="capitalize ">{link.label}</span>
              </Link>
            </Button>
          );
        })}
      </div>
    </aside>
  );
}
export default SideBar;
