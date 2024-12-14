"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  BellRing,
  ChartLine,
  House,
  Lightbulb,
  ListChecks,
  Settings,
} from "lucide-react";

const items = [
  {
    title: "Home",
    url: "#",
    icon: House,
  },
  {
    title: "Tasks",
    url: "#",
    icon: ListChecks,
  },
  {
    title: "Report",
    url: "#",
    icon: ChartLine,
  },
  {
    title: "Insights",
    url: "#",
    icon: Lightbulb,
  },
  {
    title: "Inbox",
    url: "#",
    icon: BellRing,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="mt-16">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className={`${
                    item.title === "Tasks"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }  rounded-lg transition-all duration-200 `}
                >
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="flex items-center space-x-2 px-4 py-2"
                    >
                      <item.icon className="text-xl" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
