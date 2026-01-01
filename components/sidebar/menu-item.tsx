'use client'

import Link from "next/link";
import { SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { JSX } from "react";
import { usePathname } from "next/navigation";

interface MenuItemProps {
  title: string,
  url: string,
  icon: JSX.Element
}

export default function MenuItem({ title, url, icon }: MenuItemProps) {

  const currentPath = usePathname()
  const isActive = currentPath === url || currentPath.startsWith(`${url}/`)

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild className={isActive ? "bg-slate-200" : undefined}>
        <Link href={url}>
          {icon}
          <span>{title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}