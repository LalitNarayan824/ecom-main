"use client";

import {
  ChevronLeft,
  Edit3,
  Trash2,
  Mail,
  Phone,
  ShieldCheck,
  MapPin,
  Clock,
  Home,
  Briefcase,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
import EditUserForm from "@/components/EditUserForm";
import AddAddressDialog from "@/components/AddAddressDialog";

export default function SingleUserPage() {
  const params = useParams();

  const collector = {
    id: params.id as string || "COLL-881",
    full_name: "Sarah Jenkins",
    email: "s.jenkins@node.com",
    phone: "+44 7700 900077",
    is_verified: true,
    joinedAt: "Jan 12, 2026",
    totalSpend: "$1,450.00",
    addresses: [
      {
        id: "ADDR-01",
        label: "Primary Residence",
        type: "Home",
        isDefault: true,
        details: "221B Baker Street, London, NW1 6XE, UK",
        instructions: "Gate code: 1234",
      },
      {
        id: "ADDR-02",
        label: "The Gallery",
        type: "Work",
        isDefault: false,
        details: "15 Bond Street, Mayfair, London, W1S 4PW, UK",
        instructions: "Ring bell for service entrance.",
      },
    ],
    recentOrders: [
      { id: "ORD-9921", date: "2026-01-30", amount: "$120.00", status: "Delivered" },
      { id: "ORD-8842", date: "2026-01-15", amount: "$85.00", status: "Processing" },
    ],
  };

  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      {/* 1. TOP NAVIGATION BAR */}
      <div className="border-b border-border px-8 py-4 flex items-center justify-between bg-background/50 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-6">
          <Link href="/curator/users" className="p-2 hover:bg-muted rounded-full transition-colors">
            <ChevronLeft size={20} className="text-muted-foreground" />
          </Link>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Collector_Node</span>
              <span className="text-[10px] font-mono text-primary font-bold uppercase">{collector.id}</span>
            </div>
            <h1 className="text-xl font-medium tracking-tight">{collector.full_name}</h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="font-mono text-[10px] uppercase h-8 gap-2 border-border">
                <Edit3 size={14} /> Edit_Identity
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-popover border-l-border sm:max-w-md">
              <SheetHeader className="mb-6">
                <SheetTitle className="font-mono uppercase text-sm tracking-widest">Edit_Identity</SheetTitle>
              </SheetHeader>
              <EditUserForm initialData={collector} />
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
                <div className="flex items-center gap-2 text-destructive mb-2 font-mono text-sm uppercase">
                  <AlertTriangle size={18} /> Purge_Protocol
                </div>
                <AlertDialogDescription className="text-muted-foreground text-xs leading-relaxed">
                  Permanently remove <span className="text-foreground font-semibold">{collector.full_name}</span> and all associated acquisition records from the registry?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="mt-4">
                <AlertDialogCancel className="font-mono text-[10px] uppercase">Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90 font-mono text-[10px] uppercase">Confirm_Purge</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-8 p-12 space-y-16 border-r border-border">
          {/* Section: Acquisition History */}
          <section className="space-y-6">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <h2 className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Acquisition_History</h2>
              <Badge variant="outline" className="font-mono border-border text-[9px] uppercase px-2 py-0 font-normal">
                {collector.recentOrders.length} Logs
              </Badge>
            </div>
            <div className="border border-border">
              <Table>
                <TableHeader className="bg-muted/30">
                  <TableRow className="border-border hover:bg-transparent uppercase text-[10px] font-mono">
                    <TableHead className="py-4">Order_ID</TableHead>
                    <TableHead className="py-4">Timestamp</TableHead>
                    <TableHead className="py-4">Status</TableHead>
                    <TableHead className="py-4 text-right">Value</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {collector.recentOrders.map((order) => (
                    <TableRow key={order.id} className="border-border hover:bg-muted/50">
                      <TableCell className="font-mono text-xs text-primary">{order.id}</TableCell>
                      <TableCell className="text-xs text-muted-foreground">{order.date}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-[9px] uppercase font-mono font-normal border-border px-2 py-0">
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right font-mono text-sm font-semibold tracking-tighter">{order.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </section>

          {/* Section: Logistics Nodes */}
          <section className="space-y-6">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <h2 className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Logistics_Nodes</h2>
              <AddAddressDialog />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {collector.addresses.map((addr) => (
                <div key={addr.id} className="p-6 border border-border bg-muted/10 rounded-none space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="text-muted-foreground">
                        {addr.type === "Home" ? <Home size={14} /> : <Briefcase size={14} />}
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-foreground">{addr.label}</span>
                    </div>
                    {addr.isDefault && (
                      <Badge className="bg-primary/10 text-primary border-none text-[8px] uppercase font-mono px-1 py-0">Default</Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed italic border-l-2 border-border pl-4">{addr.details}</p>
                  <div className="pt-2 flex items-start gap-2 text-[9px] font-mono uppercase text-muted-foreground opacity-50">
                    <span>Instructions:</span>
                    <span>{addr.instructions}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-4 p-12 bg-muted/5 space-y-12 h-full">
          <div className="space-y-8">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Identity_Specifications</h2>
            <div className="space-y-2 border-t border-border pt-4">
              <InfoItem icon={<Mail size={14} />} label="Registry_Email" value={collector.email} />
              <InfoItem icon={<Phone size={14} />} label="Logistics_Phone" value={collector.phone} />
              <InfoItem icon={<Clock size={14} />} label="System_Entry" value={collector.joinedAt} />
              <InfoItem icon={<ShieldCheck size={14} />} label="Verification" value={collector.is_verified ? "Confirmed" : "Pending"} />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Financial_Pulse</h2>
            <div className="p-6 border border-border rounded-none bg-background space-y-2">
              <p className="text-[9px] uppercase text-muted-foreground tracking-[0.2em]">Total_Value_Contribution</p>
              <p className="text-3xl font-mono font-bold tracking-tighter">{collector.totalSpend}</p>
            </div>
          </div>

          <div className="p-4 border border-border rounded-none bg-muted/30">
            <p className="text-[9px] text-muted-foreground font-mono uppercase leading-relaxed tracking-tighter">
              System Note: Verified collectors maintain priority access to high-rarity volcanic specimens.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoItem({ icon, label, value }: { icon: any; label: string; value: string }) {
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