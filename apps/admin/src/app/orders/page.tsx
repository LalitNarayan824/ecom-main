"use client"

import { Search, Filter, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { OrderRow } from "@/components/OrderRow";
import { Badge } from "@/components/ui/badge";

const ordersData = [
  { id: "ACQ-7721", collector: "Sarah Jenkins", date: "FEB 03, 2026", amount: "$420.00", status: "Processing" as const, items: 3 },
  { id: "ACQ-7718", collector: "Marcus Chen", date: "FEB 01, 2026", amount: "$1,150.00", status: "Shipped" as const, items: 1 },
  { id: "ACQ-7690", collector: "Elena Rodriguez", date: "JAN 28, 2026", amount: "$85.00", status: "Delivered" as const, items: 2 },
];

export default function OrdersPage() {
  return (
    <div className="p-8 space-y-12 min-h-screen w-full bg-background text-foreground">
      
      {/* Header Area */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-border pb-8 gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-medium tracking-tighter">
            Acquisition_Ledger
          </h1>
          <p className="text-[10px] text-muted-foreground uppercase font-mono tracking-[0.2em]">
            Global_Transaction_Logs // Index: 412_Records
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="h-9 border-border text-[10px] uppercase font-mono px-4 text-muted-foreground hover:text-foreground">
            <Filter className="mr-2 h-3.5 w-3.5" /> Filter_Logs
          </Button>
          <Button variant="outline" size="sm" className="h-9 border-border text-[10px] uppercase font-mono px-4 text-muted-foreground hover:text-foreground">
            <Download className="mr-2 h-3.5 w-3.5" /> Export_CSV
          </Button>
        </div>
      </div>

      {/* Utilities: Search and Quick Filters */}
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <div className="relative flex-1 w-full max-w-md group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input 
            placeholder="Search Acquisition_ID or Collector_Identity..." 
            className="pl-10 bg-muted/20 border-border font-mono text-xs h-10 rounded-none focus-visible:ring-1 focus-visible:ring-primary/20"
          />
        </div>
        <div className="flex items-center gap-1 bg-muted/30 p-1 border border-border">
            <button className="text-[9px] font-mono uppercase px-3 py-1.5 bg-background text-primary shadow-sm">All</button>
            <button className="text-[9px] font-mono uppercase px-3 py-1.5 text-muted-foreground hover:text-foreground transition-colors">Active</button>
            <button className="text-[9px] font-mono uppercase px-3 py-1.5 text-muted-foreground hover:text-foreground transition-colors">Completed</button>
        </div>
      </div>

      {/* Main Ledger Table */}
      <div className="border border-border bg-background">
        <Table>
          <TableHeader className="bg-muted/30">
            <TableRow className="border-border hover:bg-transparent uppercase text-[10px] font-mono">
              <TableHead className="py-4">Ref_ID</TableHead>
              <TableHead className="py-4">Collector</TableHead>
              <TableHead className="py-4">Timestamp</TableHead>
              <TableHead className="py-4">Composition</TableHead>
              <TableHead className="py-4">Progress</TableHead>
              <TableHead className="py-4 text-right">Value</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ordersData.map((order) => (
              <OrderRow key={order.id} {...order} />
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-center pt-4 border-t border-border/50">
        <Button variant="ghost" className="text-[10px] font-mono text-muted-foreground uppercase hover:text-primary tracking-[0.2em]">
          Load_Older_Acquisitions
        </Button>
      </div>
    </div>
  );
}