"use client";

import { Search, Plus, Download, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UserRow } from "@/components/UserRow";

const collectorsData = [
  { id: "COLL-881", full_name: "Sarah Jenkins", email: "s.jenkins@node.com", phone: "+44 7700 900077", is_verified: true },
  { id: "COLL-204", full_name: "Marcus Chen", email: "m.chen@archive.io", phone: "+65 6712 3456", is_verified: true },
  { id: "COLL-045", full_name: "Elena Rodriguez", email: "elena.rod@web.net", phone: "+34 912 34 56 78", is_verified: false },
];

export default function UsersPage() {
  return (
    <div className="p-8 space-y-12 min-h-screen bg-background text-foreground">
      
      {/* Header Section */}
      <div className="flex justify-between items-end border-b border-border pb-8">
        <div className="space-y-1">
          <h1 className="text-3xl font-medium tracking-tighter">
            Collector_Registry
          </h1>
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
            Identity_Nodes / Authorized_Specimen_Holders
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="h-9 px-4 border-border font-mono text-[10px] uppercase text-muted-foreground hover:text-foreground"
          >
            <Download className="mr-2 h-3 w-3" /> Export_Data
          </Button>
          <Button size="sm" className="h-9 px-4 font-mono text-[10px] uppercase gap-2 rounded-none">
            <Plus size={14} /> Add_Collector
          </Button>
        </div>
      </div>

      {/* Utilities Section */}
      <div className="flex items-center justify-between gap-4">
        <div className="relative w-full max-w-md group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input
            placeholder="Search by Identity, Node_ID or Email..."
            className="pl-10 bg-muted/20 border-border font-mono text-xs h-10 rounded-none focus-visible:ring-1 focus-visible:ring-primary/20"
          />
        </div>
        <Button variant="outline" size="sm" className="h-10 px-4 font-mono text-[10px] uppercase gap-2 border-border text-muted-foreground hover:text-foreground">
          <Filter size={14} /> Filter_Nodes
        </Button>
      </div>

      {/* Registry Table */}
      <div className="border border-border bg-background">
        <Table>
          <TableHeader className="bg-muted/30">
            <TableRow className="border-border hover:bg-transparent">
              <TableHead className="font-mono text-[10px] uppercase py-4">Node_ID</TableHead>
              <TableHead className="font-mono text-[10px] uppercase py-4">Collector_Identity</TableHead>
              <TableHead className="font-mono text-[10px] uppercase py-4">Logistics_Phone</TableHead>
              <TableHead className="font-mono text-[10px] uppercase py-4">Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {collectorsData.map((collector) => (
              <UserRow key={collector.id} {...collector} />
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Footer Meta */}
      <div className="flex justify-between items-center text-[10px] font-mono text-muted-foreground uppercase tracking-tighter pt-4">
        <span>Active_Identity_Nodes: {collectorsData.length}</span>
        <span>Registry_Status: Optimal</span>
      </div>
    </div>
  );
}