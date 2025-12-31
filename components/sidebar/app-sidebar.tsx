import { CalculatorIcon, HomeIcon } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar"
import NavUser from "./nav-user"
import MenuItem from "./menu-item"
import PokemonIcon from "./icons/pokemon-icon"

// Menu items.
const items = [
  {
    title: "Main",
    url: "/dashboard/main",
    icon: <HomeIcon />,
  },
  {
    title: "Counter",
    url: "/dashboard/counter",
    icon: <CalculatorIcon />,
  },
  {
    title: "Pokemons",
    url: "/dashboard/pokemons",
    icon: <PokemonIcon />,
  },

]

const user = {
  name: "Walker Alfaro",
  email: "m@example.com",
  avatar: "https://github.com/evilrabbit.png"
}

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <NavUser user={user} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <MenuItem key={item.url} {...item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}