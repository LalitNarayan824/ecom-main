"use client"

import { ChevronLeft, Edit3, Trash2, Calendar, Package, Tag, DollarSign, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import EditProduct from "@/components/EditProduct"; 
import { useParams } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function ProductDetailPage() {
  const params = useParams();

  const product = {
    id: params.productId || "AF-1001",
    name: "Obsidian Tulip",
    latinName: "Tulipa nightshade",
    category: "Flowers",
    price: 1200,
    stock: 42,
    description: "A rare, deep-pigmented specimen sourced from the volcanic regions. Known for its velvet-like petals and exceptional longevity in cool environments.",
    createdAt: "Jan 12, 2026",
  };

  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      {/* 1. TOP NAVIGATION BAR */}
      <div className="border-b border-border px-8 py-4 flex items-center justify-between bg-background/50 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-6">
          <Link href="/products" className="p-2 hover:bg-muted rounded-full transition-colors">
            <ChevronLeft size={20} className="text-muted-foreground" />
          </Link>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Specimen_Node</span>
              <span className="text-[10px] font-mono text-primary uppercase font-bold tracking-tight">{product.id}</span>
            </div>
            <h1 className="text-xl font-medium tracking-tight">{product.name}</h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="font-mono text-[10px] uppercase h-8 gap-2 border-border hover:bg-muted">
                <Edit3 size={14} /> Edit_Specimen
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-popover border-l-border sm:max-w-md overflow-y-auto">
              <SheetHeader className="mb-6">
                <SheetTitle className="font-mono uppercase text-sm tracking-widest text-primary">Edit_Specimen</SheetTitle>
              </SheetHeader>
              <EditProduct {...product}  />
            </SheetContent>
          </Sheet>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" size="sm" className="font-mono text-[10px] uppercase h-8 gap-2 border-destructive/20 text-destructive hover:bg-destructive hover:text-destructive-foreground transition-all">
                <Trash2 size={14} /> Purge_Node
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-popover border-border">
              <AlertDialogHeader>
                <div className="flex items-center gap-2 text-destructive mb-2">
                  <AlertTriangle size={18} />
                  <AlertDialogTitle className="font-mono uppercase text-sm">Confirm_Deletion</AlertDialogTitle>
                </div>
                <AlertDialogDescription className="text-muted-foreground text-xs leading-relaxed">
                  Are you sure you want to remove <span className="text-foreground font-medium">{product.name}</span> from the archive? 
                  This will permanently delete the specimen data and visual logs.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="mt-4">
                <AlertDialogCancel className="font-mono text-[10px] uppercase h-9">Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90 font-mono text-[10px] uppercase h-9">Confirm_Delete</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
        
        {/* LEFT SIDE: Narrative */}
        <div className="lg:col-span-8 p-12 space-y-16 border-r border-border">
          <section className="space-y-6">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Narrative_Report</h2>
            <p className="text-2xl leading-snug text-foreground/90 max-w-4xl tracking-tight">
              {product.description}
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Visual_Archive</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="aspect-[4/5] bg-muted/30 border border-border rounded-lg flex items-center justify-center text-muted-foreground/30 italic text-[10px] font-mono uppercase">Img_01_Ref</div>
              <div className="aspect-[4/5] bg-muted/30 border border-border rounded-lg flex items-center justify-center text-muted-foreground/30 italic text-[10px] font-mono uppercase">Img_02_Ref</div>
            </div>
          </section>
        </div>

        {/* RIGHT SIDE: Tech Specs */}
        <div className="lg:col-span-4 p-12 bg-muted/5 space-y-12">
          <div className="space-y-8">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Technical_Specifications</h2>
            <div className="space-y-2 border-t border-border pt-4">
              <SpecItem icon={<Tag size={14}/>} label="Classification" value={product.category} />
              <SpecItem icon={<Package size={14}/>} label="Inventory_Level" value={`${product.stock} Units`} />
              <SpecItem icon={<DollarSign size={14}/>} label="Unit_Value" value={`$${product.price}`} />
              <SpecItem icon={<Calendar size={14}/>} label="Registered_On" value={product.createdAt} />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Registry_Status</h2>
            <div className="p-4 border border-border rounded flex items-center justify-between">
              <span className="text-xs font-mono uppercase text-muted-foreground tracking-tighter">Public_Visibility</span>
              <Badge variant="outline" className="border-emerald-500/50 text-emerald-500 font-mono text-[10px] uppercase font-normal py-0">Live</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecItem({ icon, label, value }: { icon: any, label: string, value: string|number }) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-border/50 last:border-none group">
      <div className="flex items-center gap-3">
        <span className="text-muted-foreground group-hover:text-primary transition-colors">{icon}</span>
        <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">{label}</span>
      </div>
      <span className="text-xs font-medium font-mono text-foreground">{value}</span>
    </div>
  );
}