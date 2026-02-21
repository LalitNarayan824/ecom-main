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

interface EditProductProps {
  name: string;
  latinName: string;
  category: string;
  price: number;
  stock: number;
}

const EditProduct = ({ name, latinName, category, price, stock }: EditProductProps) => {
  
  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log("Committing changes to registry...");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-3">
      <div className="space-y-4">
        {/* 1. Specimen Identity */}
        <div className="grid gap-2">
          <Label htmlFor="name" className="text-[10px] uppercase font-mono text-muted-foreground tracking-widest">
            Specimen_Name
          </Label>
          <Input 
            id="name" 
            defaultValue={name} 
            className="rounded-none border-border bg-transparent focus-visible:ring-primary/20" 
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="latin" className="text-[10px] uppercase font-mono text-muted-foreground tracking-widest">
            Scientific_Classification
          </Label>
          <Input 
            id="latin" 
            defaultValue={latinName} 
            className="rounded-none border-border bg-transparent italic font-mono text-xs" 
          />
        </div>
      </div>

      {/* 2. Classification & Notes */}
      <div className="grid gap-2">
        <Label className="text-[10px] uppercase font-mono text-muted-foreground tracking-widest">
          Registry_Class
        </Label>
        <Select defaultValue={category.toLowerCase()}>
          <SelectTrigger className="rounded-none border-border bg-transparent font-mono text-xs uppercase">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent className="bg-popover border-border">
            <SelectItem value="flowers" className="text-xs font-mono uppercase">Flowers</SelectItem>
            <SelectItem value="plants" className="text-xs font-mono uppercase">Plants</SelectItem>
            <SelectItem value="pottery" className="text-xs font-mono uppercase">Pottery</SelectItem>
            <SelectItem value="candles" className="text-xs font-mono uppercase">Candles</SelectItem>
            <SelectItem value="seeds" className="text-xs font-mono uppercase">Seeds</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="desc" className="text-[10px] uppercase font-mono text-muted-foreground tracking-widest">
          Archive_Notes
        </Label>
        <Textarea 
          id="desc" 
          placeholder="Enter specimen characteristics..." 
          className="rounded-none border-border bg-transparent min-h-[120px] text-xs resize-none leading-relaxed"
        />
      </div>

      {/* 3. Financial & Inventory Nodes */}
      <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
        <div className="grid gap-2">
          <Label htmlFor="price" className="text-[10px] uppercase font-mono text-muted-foreground tracking-widest">
            Unit_Value ($)
          </Label>
          <Input 
            id="price" 
            type="number" 
            defaultValue={price} 
            className="rounded-none border-border bg-transparent font-mono text-sm" 
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="stock" className="text-[10px] uppercase font-mono text-muted-foreground tracking-widest">
            Stock_Count
          </Label>
          <Input 
            id="stock" 
            type="number" 
            defaultValue={stock} 
            className="rounded-none border-border bg-transparent font-mono text-sm" 
          />
        </div>
      </div>

      <Button type="submit" className="w-full rounded-none bg-primary text-primary-foreground hover:opacity-90 mt-4 uppercase font-mono text-[10px] tracking-[0.2em] h-11">
        Commit_Changes
      </Button>
    </form>
  )
}

export default EditProduct;