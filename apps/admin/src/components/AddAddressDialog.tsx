"use client"

import { useState } from "react"
import { Plus, Home, Briefcase, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export default function AddAddressDialog() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="text-[10px] uppercase font-mono text-white/20 hover:text-white">
          <Plus size={12} className="mr-1" /> Add_Address
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[#0a0a0a] border-white/10 text-white sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="font-mono uppercase text-[#ecec25] tracking-widest">Register_New_Node</DialogTitle>
          <DialogDescription className="text-white/40">
            Add a new delivery location to this collector's profile.
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-6 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-[10px] uppercase font-mono text-white/40">Label</Label>
              <Input placeholder="e.g. Summer House" className="bg-white/5 border-white/10" />
            </div>
            <div className="space-y-2">
              <Label className="text-[10px] uppercase font-mono text-white/40">Node_Type</Label>
              <Select defaultValue="home">
                <SelectTrigger className="bg-white/5 border-white/10">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent className="bg-[#0a0a0a] border-white/10 text-white">
                  <SelectItem value="home">Home</SelectItem>
                  <SelectItem value="work">Work</SelectItem>
                  <SelectItem value="gallery">Gallery</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-[10px] uppercase font-mono text-white/40">Full_Address</Label>
            <Textarea 
              placeholder="Street, City, Postcode, Country" 
              className="bg-white/5 border-white/10 min-h-[80px] resize-none font-mono text-xs italic" 
            />
          </div>

          <div className="space-y-2">
            <Label className="text-[10px] uppercase font-mono text-white/40">Gate_Instructions (Optional)</Label>
            <Input placeholder="Access codes or delivery notes..." className="bg-white/5 border-white/10 text-xs" />
          </div>

          <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-lg">
            <div className="space-y-0.5">
              <Label className="text-xs">Set as Primary Node</Label>
              <p className="text-[10px] text-white/40">Will be used as the default shipping address</p>
            </div>
            <Switch />
          </div>
        </form>

        <DialogFooter>
          <Button variant="ghost" onClick={() => setOpen(false)} className="text-xs font-mono uppercase text-white/40">
            Cancel
          </Button>
          <Button className="bg-[#004b23] hover:bg-[#003d1c] text-white font-mono text-xs uppercase px-8">
            Save_Node
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}