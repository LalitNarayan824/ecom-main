"use client"

import { Plus, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ProductRow } from "@/components/ProductRow";

const registryData = [
  { id: "PROD-X1", name: "Obsidian Tulip", latinName: "Tulipa Nightshade", category: "Flowers", stock: 42, price: 120.00 },
  { id: "PROD-Y2", name: "Moonlight Fern", latinName: "Selaginella Willdenowii", category: "Plants", stock: 5, price: 85.00 },
  { id: "PROD-Z3", name: "Void Candle", latinName: "Cera Tenebris", category: "Candles", stock: 0, price: 45.00 },
];

export default function ProductsPage() {
  return (
    <div className="p-8 space-y-12 min-h-screen bg-background text-foreground">
      
      {/* Header Section */}
      <div className="flex justify-between items-end border-b border-border pb-8">
        <div className="space-y-1">
          <h1 className="text-3xl font-medium tracking-tighter">
            Specimen_Archive
          </h1>
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
            Registry / Curated_Biological_Assets
          </p>
        </div>
        <Button size="sm" className="font-mono text-[10px] uppercase h-9 px-4 gap-2 rounded-none">
          <Plus size={14} /> New_Entry
        </Button>
      </div>

      {/* Utilities Section */}
      <div className="flex items-center justify-between gap-4">
        <div className="relative w-full max-w-md group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input 
            placeholder="Search by ID, Name or Classification..." 
            className="pl-10 bg-muted/20 border-border font-mono text-xs h-10 rounded-none focus-visible:ring-1 focus-visible:ring-primary/20"
          />
        </div>
        <Button variant="outline" size="sm" className="h-10 px-4 font-mono text-[10px] uppercase gap-2 border-border text-muted-foreground hover:text-foreground">
          <Filter size={14} /> Filter_Results
        </Button>
      </div>

      {/* Registry Table */}
      <div className="border border-border bg-background">
        <Table>
          <TableHeader className="bg-muted/30">
            <TableRow className="border-border hover:bg-transparent">
              <TableHead className="font-mono text-[10px] uppercase py-4">ID_Ref</TableHead>
              <TableHead className="font-mono text-[10px] uppercase py-4">Specimen_Identity</TableHead>
              <TableHead className="font-mono text-[10px] uppercase py-4">Classification</TableHead>
              <TableHead className="font-mono text-[10px] uppercase py-4">Inventory</TableHead>
              <TableHead className="font-mono text-[10px] uppercase py-4 text-right">Unit_Price</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {registryData.map((specimen) => (
              <ProductRow key={specimen.id} {...specimen} />
            ))}
          </TableBody>
        </Table>
      </div>
      
      {/* Footer Meta */}
      <div className="flex justify-between items-center text-[10px] font-mono text-muted-foreground uppercase tracking-tighter pt-4">
        <span>Total_Archive_Nodes: {registryData.length}</span>
        <span>System_Sync: Healthy</span>
      </div>
    </div>
  );
}