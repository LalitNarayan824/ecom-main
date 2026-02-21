"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

export default function EditUserForm({ initialData }: { initialData: any }) {
  return (
    <form className="space-y-6 p-3">
      <div className="space-y-4">
        {/* Collector Name */}
        <div className="grid gap-2">
          <Label className="text-[10px] uppercase font-mono text-muted-foreground tracking-widest">
            Identity_Full_Name
          </Label>
          <Input 
            defaultValue={initialData.full_name} 
            className="rounded-none border-border bg-transparent focus-visible:ring-primary/20" 
          />
        </div>

        {/* Contact Email */}
        <div className="grid gap-2">
          <Label className="text-[10px] uppercase font-mono text-muted-foreground tracking-widest">
            Registry_Email_Node
          </Label>
          <Input 
            defaultValue={initialData.email} 
            className="rounded-none border-border bg-transparent font-mono text-xs" 
          />
        </div>

        {/* Phone Node */}
        <div className="grid gap-2">
          <Label className="text-[10px] uppercase font-mono text-muted-foreground tracking-widest">
            Logistics_Contact
          </Label>
          <Input 
            defaultValue={initialData.phone} 
            className="rounded-none border-border bg-transparent font-mono text-xs" 
          />
        </div>
      </div>

      {/* Verification Toggle */}
      <div className="flex items-center justify-between p-4 border border-border rounded-none bg-muted/20">
        <div className="space-y-0.5">
          <Label className="text-[11px] uppercase font-mono tracking-tight text-foreground">
            Verification_Status
          </Label>
          <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-tighter">
            Authorized_Registry_Access
          </p>
        </div>
        <Switch 
          checked={initialData.is_verified} 
          className="data-[state=checked]:bg-emerald-500"
        />
      </div>

      <Button 
        type="submit" 
        className="w-full rounded-none bg-primary text-primary-foreground hover:opacity-90 uppercase font-mono text-[10px] tracking-[0.2em] h-12"
      >
        Save_Identity_Node
      </Button>
    </form>
  )
}