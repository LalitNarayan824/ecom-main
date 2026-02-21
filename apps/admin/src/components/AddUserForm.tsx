"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { UserPlus, Mail, Phone, Info, ShieldCheck } from "lucide-react"

export default function AddUserForm() {
  
  async function handleRegister(event: React.FormEvent) {
    event.preventDefault();
    console.log("Registering new identity node...");
  }

  return (
    <form onSubmit={handleRegister} className=" grid grid-cols-1 lg:grid-cols-12 gap-12">
      
      {/* LEFT COLUMN: Identity Details (8 Cols) */}
      <div className="lg:col-span-8 space-y-12">
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-muted-foreground">
            <UserPlus size={16} />
            <h2 className="text-[10px] font-mono uppercase tracking-[0.3em]">Section_01: Identity_Details</h2>
          </div>

          <div className="grid gap-8 p-8 border border-border bg-muted/5 rounded-none">
            <div className="grid gap-2">
              <Label className="text-[10px] uppercase font-mono text-muted-foreground tracking-widest">Full_Legal_Name</Label>
              <Input 
                placeholder="e.g. Alexander Vance" 
                className="rounded-none border-border bg-transparent h-12 focus-visible:ring-primary/20" 
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="grid gap-2">
                <Label className="text-[10px] uppercase font-mono text-muted-foreground tracking-widest flex items-center gap-2">
                  <Mail size={12} /> Email_Address
                </Label>
                <Input 
                  type="email" 
                  placeholder="vance@archive.io" 
                  className="rounded-none border-border bg-transparent h-12 font-mono text-xs" 
                />
              </div>
              <div className="grid gap-2">
                <Label className="text-[10px] uppercase font-mono text-muted-foreground tracking-widest flex items-center gap-2">
                  <Phone size={12} /> Contact_Phone
                </Label>
                <Input 
                  type="tel" 
                  placeholder="+44 0000 000000" 
                  className="rounded-none border-border bg-transparent h-12 font-mono text-xs" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Info Note */}
        <div className="p-6 border border-border bg-muted/30 rounded-none flex items-start gap-4">
          <Info className="text-muted-foreground mt-0.5" size={14} />
          <p className="text-[10px] font-mono uppercase tracking-tighter text-muted-foreground leading-relaxed">
            Note: Address nodes are locked during initial registration. Logistics nodes (addresses) must be 
            appended post-initialization via the Collector detail interface.
          </p>
        </div>
      </div>

      {/* RIGHT COLUMN: System Config (4 Cols) */}
      <div className="lg:col-span-4 space-y-8">
        <div className="p-8 border border-border bg-muted/10 rounded-none space-y-10">
          <div className="space-y-6">
            <h3 className="text-[10px] uppercase font-mono text-primary tracking-widest flex items-center gap-2">
               <ShieldCheck size={14} /> System_Permissions
            </h3>
            
            <div className="flex items-center justify-between p-4 border border-border bg-background rounded-none">
              <div className="space-y-1">
                <Label className="text-[11px] font-mono uppercase tracking-tight">Verification_Status</Label>
                <p className="text-[9px] text-muted-foreground font-mono uppercase tracking-tighter leading-none">Authorized_Node</p>
              </div>
              <Switch className="data-[state=checked]:bg-emerald-500" />
            </div>
          </div>

          <div className="pt-8 border-t border-border space-y-4">
            <Button 
              type="submit" 
              className="w-full rounded-none bg-primary text-primary-foreground font-mono text-[10px] uppercase tracking-[0.2em] h-12 hover:opacity-90"
            >
              Commit_Identity_Node
            </Button>
            <Button 
              variant="ghost" 
              type="button" 
              className="w-full rounded-none font-mono text-[9px] uppercase text-muted-foreground hover:text-destructive hover:bg-transparent"
            >
              Discard_Entry
            </Button>
          </div>
        </div>

        <div className="px-6 text-[9px] font-mono text-muted-foreground uppercase text-center leading-loose opacity-50">
          Identity establishment requires manual verification by the lead curator per security protocol_v1.
        </div>
      </div>

    </form>
  )
}