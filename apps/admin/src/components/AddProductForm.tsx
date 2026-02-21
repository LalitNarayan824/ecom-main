"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Upload, ChevronLeft, Save, Database, Trash2 } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function AddProductPage() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      {/* 1. TOP BAR: Consistent with Industrial Theme */}
      <div className="sticky top-0 z-20 w-full border-b border-border bg-background/50 backdrop-blur-md px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/curator/products" className="p-2 hover:bg-muted rounded-full transition-colors">
              <ChevronLeft size={20} className="text-muted-foreground" />
            </Link>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Registry_Action</span>
                <span className="text-[10px] font-mono text-primary font-bold uppercase flex items-center gap-1">
                  <Database size={10} /> Initialize_New_Node
                </span>
              </div>
              <h1 className="text-xl font-medium tracking-tight">Create_New_Specimen</h1>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="font-mono text-[10px] uppercase h-8 text-muted-foreground hover:text-destructive">
              Discard_Draft
            </Button>
            <Button className="bg-primary text-primary-foreground font-mono text-[10px] uppercase h-8 px-6 rounded-none gap-2">
              <Save size={14} /> Commit_to_Registry
            </Button>
          </div>
        </div>
      </div>

      {/* 2. TWO-COLUMN CONTENT GRID */}
      <form className="grid grid-cols-1 lg:grid-cols-12 w-full min-h-[calc(100vh-65px)]">
        
        {/* LEFT SECTION (Main Narrative - 8 Cols) */}
        <div className="lg:col-span-8 p-12 space-y-16 border-r border-border">
          
          {/* Section: General Information */}
          <div className="space-y-8">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Narrative_Registration</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[10px] uppercase font-mono text-muted-foreground tracking-widest">Specimen_Name</Label>
                <Input id="name" placeholder="e.g. Obsidian Tulip" className="rounded-none border-border h-11 font-medium bg-transparent" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="latin" className="text-[10px] uppercase font-mono text-muted-foreground tracking-widest">Scientific_Name</Label>
                <Input id="latin" placeholder="e.g. Tulipa nightshade" className="rounded-none border-border h-11 italic font-mono text-xs bg-transparent" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-[10px] uppercase font-mono text-muted-foreground tracking-widest">Archive_Notes_Description</Label>
              <Textarea 
                id="description" 
                placeholder="Detailed specimen characteristics..." 
                className="rounded-none border-border min-h-[300px] text-base leading-relaxed resize-none bg-transparent" 
              />
            </div>
          </div>

          {/* Section: Media Assets */}
          <div className="space-y-8">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Visual_Archive_Assets</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {/* Upload Trigger */}
              <div className="aspect-[4/5] border border-dashed border-border flex flex-col items-center justify-center text-muted-foreground hover:bg-muted/50 transition-all cursor-pointer group">
                <Upload size={20} className="group-hover:-translate-y-1 transition-transform" />
                <span className="text-[9px] mt-3 font-mono uppercase tracking-tighter">Add_Image</span>
              </div>
              
              {/* Image Slots */}
              {[1, 2].map((i) => (
                <div key={i} className="aspect-[4/5] bg-muted/20 border border-border relative group">
                  <div className="absolute inset-0 flex items-center justify-center text-[10px] font-mono uppercase text-muted-foreground/30 italic">
                    Node_0{i}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SECTION (Logistics & Financials - 4 Cols) */}
        <div className="lg:col-span-4 p-12 bg-muted/5 space-y-12 h-full">
          
          {/* Inventory Controls */}
          <div className="space-y-8">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Inventory_Controls</h2>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <Label className="text-[10px] uppercase font-mono text-muted-foreground tracking-widest">Classification_Class</Label>
                <Select>
                  <SelectTrigger className="rounded-none border-border h-11 uppercase font-mono text-[11px]">
                    <SelectValue placeholder="Select_Category" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border">
                    <SelectItem value="flowers" className="text-xs uppercase font-mono">Flowers</SelectItem>
                    <SelectItem value="plants" className="text-xs uppercase font-mono">Plants</SelectItem>
                    <SelectItem value="pottery" className="text-xs uppercase font-mono">Pottery</SelectItem>
                    <SelectItem value="candles" className="text-xs uppercase font-mono">Candles</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="price" className="text-[10px] uppercase font-mono text-muted-foreground tracking-widest">Unit_Value ($)</Label>
                  <Input id="price" type="number" placeholder="0.00" className="rounded-none border-border h-11 font-mono text-sm" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="stock" className="text-[10px] uppercase font-mono text-muted-foreground tracking-widest">Initial_Stock</Label>
                  <Input id="stock" type="number" placeholder="0" className="rounded-none border-border h-11 font-mono text-sm" />
                </div>
              </div>
            </div>
          </div>

          {/* Visibility Section */}
          <div className="space-y-8 pt-8 border-t border-border">
             <h2 className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Registry_Status</h2>
             <div className="p-4 border border-border rounded-none bg-background flex items-center justify-between">
               <span className="text-[10px] font-mono uppercase text-muted-foreground tracking-tighter">Immediate_Publish</span>
               <Badge variant="outline" className="border-emerald-500/50 text-emerald-500 font-mono text-[10px] uppercase font-normal py-0 rounded-none border-t-0 border-r-0 border-b-0 border-l-2">Live</Badge>
             </div>
             <div className="p-4 bg-muted/30 border border-border rounded-none">
              <p className="text-[9px] text-muted-foreground font-mono uppercase leading-relaxed tracking-tighter">
                System Note: Saving this record commits the specimen to the public archive. Ensure all visual assets are verified.
              </p>
             </div>
          </div>

        </div>
      </form>
    </div>
  )
}