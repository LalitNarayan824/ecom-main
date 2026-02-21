"use client";

import { LogOut, Settings, User, Terminal } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "./mode-toggle";
import { SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
  return (
    <nav className="h-16 border-b border-border bg-background/50 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="text-muted-foreground hover:text-primary transition-colors" />
        <div className="h-4 w-px bg-border hidden md:block" />
        <Link 
          href="/" 
          className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
        >
          <Terminal size={14} />
          System_Dashboard
        </Link>
      </div>

      <div className="flex items-center gap-3">
        {/* theme toggle */}
        <ModeToggle />

        <div className="h-8 w-px bg-border mx-1" />

        {/* user avatar and dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="hover:opacity-80 transition-opacity cursor-pointer outline-none">
              <Avatar className="h-8 w-8 border border-border rounded-none">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback className="font-mono text-xs rounded-none">CN</AvatarFallback>
              </Avatar>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 bg-popover border-border rounded-none mt-2">
            <DropdownMenuLabel className="font-mono uppercase text-[10px] tracking-widest text-muted-foreground">
              Account_Identity
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-border" />
            <DropdownMenuGroup className="p-1">
              <DropdownMenuItem className="text-xs font-mono uppercase gap-3 cursor-pointer py-2">
                <User size={14} className="text-muted-foreground" />
                Profile_Node
              </DropdownMenuItem>
              <DropdownMenuItem className="text-xs font-mono uppercase gap-3 cursor-pointer py-2">
                <Settings size={14} className="text-muted-foreground" />
                System_Settings
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator className="bg-border" />
            <DropdownMenuItem className="text-xs font-mono uppercase gap-3 cursor-pointer py-2 text-destructive focus:text-destructive">
              <LogOut size={14} />
              Terminate_Session
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;