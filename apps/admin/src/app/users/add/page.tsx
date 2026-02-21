"use client";

import { ChevronLeft, UserPlus } from "lucide-react";
import Link from "next/link";
import AddUserForm from "@/components/AddUserForm";

export default function AddUserPage() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      {/* 1. TOP NAVIGATION BAR */}
      <div className="border-b border-border px-8 py-4 flex items-center justify-between bg-background/50 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-6">
          <Link 
            href="/curator/users" 
            className="p-2 hover:bg-muted rounded-full transition-colors"
          >
            <ChevronLeft size={20} className="text-muted-foreground" />
          </Link>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Identity_Action</span>
              <span className="text-[10px] font-mono text-primary font-bold uppercase flex items-center gap-1">
                <UserPlus size={10} /> Initialize_New_Node
              </span>
            </div>
            <h1 className="text-xl font-medium tracking-tight">New_Collector_Entry</h1>
          </div>
        </div>
      </div>

      {/* 2. FORM CONTENT */}
      <div className="p-8 lg:p-12">
        <div className="space-y-8">
          <header className="space-y-2 border-l-2 border-primary pl-6">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Verification_Protocol</h2>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-lg">
              Authorized curators must input verified contact data to establish a new collector node in the global botanical registry.
            </p>
          </header>

          <div className="border border-border bg-muted/5 p-8 lg:p-10 rounded-none">
            <AddUserForm />
          </div>

          {/* System Footer Meta */}
          <div className="pt-8 border-t border-border flex justify-between items-center text-[10px] font-mono text-muted-foreground uppercase tracking-tighter">
            <span>Identity_Archive_v1.0</span>
            <span>Security_Level: Curator_Authorized</span>
          </div>
        </div>
      </div>
    </div>
  );
}