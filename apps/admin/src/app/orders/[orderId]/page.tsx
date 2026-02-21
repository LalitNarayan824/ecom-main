"use client"

import { 
  ChevronLeft, Printer, Truck, CheckCircle2, 
  MapPin, User, Package, Calendar, ArrowUpRight, 
  Clock
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function OrderDetailPage() {
  const params = useParams();

  const order = {
    id: params.orderId as string || "ACQ-7721",
    date: "Feb 03, 2026",
    status: "Processing",
    collector: {
      name: "Sarah Jenkins",
      id: "COLL-881",
      email: "s.jenkins@node.com"
    },
    shippingAddress: "221B Baker Street, London, NW1 6XE, UK",
    items: [
      { id: "SPEC-01", name: "Obsidian Tulip", latin: "Tulipa nightshade", price: 120, qty: 2, total: 240 },
      { id: "SPEC-04", name: "Midnight Lily", latin: "Lilium nocturnum", price: 180, qty: 1, total: 180 },
    ],
    subtotal: 420,
    shipping: 15,
    total: 435
  };

  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      {/* 1. TOP BAR */}
      <div className="border-b border-border px-8 py-4 flex items-center justify-between bg-background/50 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-6">
          <Link href="/curator/orders" className="p-2 hover:bg-muted rounded-full transition-colors">
            <ChevronLeft size={20} className="text-muted-foreground" />
          </Link>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Acquisition_Protocol</span>
              <span className="text-[10px] font-mono text-primary font-bold uppercase">{order.id}</span>
            </div>
            <h1 className="text-xl font-medium tracking-tight">Acquisition_Summary</h1>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="font-mono text-[10px] uppercase h-8 gap-2 border-border">
            <Printer size={14} /> Print_Invoice
          </Button>
          <Button size="sm" className="bg-primary text-primary-foreground font-mono text-[10px] uppercase h-8 px-6 rounded-none">
             Dispatch_Specimens
          </Button>
        </div>
      </div>

      {/* 2. CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
        
        {/* LEFT COLUMN: Manifest (8 Cols) */}
        <div className="lg:col-span-8 p-12 space-y-16 border-r border-border">
          
          <section className="space-y-6">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Manifest_Composition</h2>
            <div className="border border-border">
              <Table>
                <TableHeader className="bg-muted/30">
                  <TableRow className="border-border hover:bg-transparent uppercase text-[10px] font-mono">
                    <TableHead className="py-4">Specimen</TableHead>
                    <TableHead className="text-center py-4">Quantity</TableHead>
                    <TableHead className="text-right py-4">Unit_Price</TableHead>
                    <TableHead className="text-right py-4">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {order.items.map((item) => (
                    <TableRow key={item.id} className="border-border hover:bg-muted/50 transition-colors">
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="font-medium text-sm tracking-tight">{item.name}</span>
                          <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-tighter italic">{item.latin}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-center font-mono text-xs">{item.qty}</TableCell>
                      <TableCell className="text-right font-mono text-xs">${item.price}</TableCell>
                      <TableCell className="text-right font-mono text-sm font-semibold tracking-tighter">${item.total}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </section>

          {/* Timeline */}
          <section className="space-y-8">
             <h2 className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Status_Timeline</h2>
             <div className="space-y-1 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-border">
                <TimelineItem icon={<CheckCircle2 size={12}/>} title="Acquisition_Confirmed" time="Feb 03, 10:15 AM" active />
                <TimelineItem icon={<Clock size={12}/>} title="Awaiting_Dispatch" time="In Progress" active={false} />
             </div>
          </section>
        </div>

        {/* RIGHT COLUMN: Logistics & Financials (4 Cols) */}
        <div className="lg:col-span-4 p-12 bg-muted/5 space-y-12">
          
          {/* Collector Card */}
          <div className="space-y-8">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Collector_Node</h2>
            <div className="p-6 border border-border bg-background rounded-none space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-muted border border-border rounded-full flex items-center justify-center text-muted-foreground/60">
                  <User size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium tracking-tight">{order.collector.name}</p>
                  <Link href={`/users/${order.collector.id}`} className="text-[10px] font-mono text-primary flex items-center gap-1 hover:underline uppercase tracking-tighter font-bold">
                    View_Profile <ArrowUpRight size={10} />
                  </Link>
                </div>
              </div>
              <div className="pt-4 border-t border-border flex items-start gap-2">
                <MapPin size={12} className="text-muted-foreground/40 mt-0.5" />
                <p className="text-xs text-muted-foreground leading-relaxed italic font-mono">{order.shippingAddress}</p>
              </div>
            </div>
          </div>

          {/* Balance Sheet */}
          <div className="space-y-8">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Balance_Sheet</h2>
            <div className="space-y-2 border-t border-border pt-4 font-mono uppercase tracking-tighter">
              <div className="flex justify-between text-[11px] py-1">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${order.subtotal}.00</span>
              </div>
              <div className="flex justify-between text-[11px] py-1 border-b border-border/50 pb-4">
                <span className="text-muted-foreground">Dispatch_Fee</span>
                <span>${order.shipping}.00</span>
              </div>
              <div className="flex justify-between text-xl font-bold pt-4 text-foreground tracking-tighter">
                <span>Total_Value</span>
                <span>${order.total}.00</span>
              </div>
            </div>
          </div>

          <div className="p-4 border border-border bg-muted/30 rounded-none">
             <div className="flex items-center gap-2 text-muted-foreground text-[9px] font-mono uppercase mb-2">
               <Truck size={12} /> Logistics_Mode
             </div>
             <p className="text-[9px] text-muted-foreground/80 leading-relaxed uppercase tracking-tighter">
               Specialized climate-controlled transit engaged for specimen integrity.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ icon, title, time, active }: { icon: any, title: string, time: string, active: boolean }) {
  return (
    <div className="flex items-start gap-6 relative z-10 py-3">
      <div className={`mt-0.5 p-1.5 rounded-full border ${active ? 'bg-primary text-primary-foreground border-primary' : 'bg-background text-muted-foreground border-border'}`}>
        {icon}
      </div>
      <div className="flex flex-col gap-0.5">
        <p className={`text-[10px] font-mono uppercase tracking-widest ${active ? 'text-foreground font-bold' : 'text-muted-foreground'}`}>{title}</p>
        <p className="text-[10px] font-mono text-muted-foreground/60">{time}</p>
      </div>
    </div>
  )
}