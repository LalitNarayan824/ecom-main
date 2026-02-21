"use client"

import { MoreHorizontal, ArrowUpRight, Edit3, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { 
  AlertDialog, 
  AlertDialogAction, 
  AlertDialogCancel, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogFooter, 
  AlertDialogHeader, 
  AlertDialogTitle, 
  AlertDialogTrigger 
} from "@/components/ui/alert-dialog";
import EditOrderForm from "./EditOrderForm";

interface OrderProps {
  id: string;
  collector: string;
  date: string;
  amount: string;
  status: "Processing" | "Shipped" | "Delivered" | "Cancelled";
  items: number;
}

export const OrderRow = ({ id, collector, date, amount, status, items }: OrderProps) => {
  // Industrial Color Mapping
  const statusConfig = {
    Processing: "border-l-amber-500 bg-amber-500/5 text-amber-500",
    Shipped: "border-l-blue-500 bg-blue-500/5 text-blue-500",
    Delivered: "border-l-emerald-500 bg-emerald-500/5 text-emerald-500",
    Cancelled: "border-l-destructive bg-destructive/5 text-destructive",
  };

  return (
    <TableRow className="group border-border hover:bg-muted/30 transition-colors">
      {/* Ref ID */}
      <TableCell className="font-mono text-[10px] text-muted-foreground uppercase tracking-tight">
        <Link href={`/orders/${id}`} className="hover:text-primary flex items-center gap-1 transition-colors">
          {id} <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>
      </TableCell>

      {/* Collector Identity */}
      <TableCell className="text-sm font-medium tracking-tight text-foreground/90">
        {collector}
      </TableCell>

      {/* Timestamp */}
      <TableCell className="text-[10px] text-muted-foreground uppercase font-mono tracking-tighter">
        {date}
      </TableCell>

      {/* Composition */}
      <TableCell className="text-[10px] font-mono text-muted-foreground uppercase tracking-tighter">
        {items} <span className="opacity-50">Units</span>
      </TableCell>

      {/* Progress Status */}
      <TableCell>
        <Badge 
          variant="outline" 
          className={`text-[9px] uppercase font-mono font-normal px-2 py-0 rounded-none border-t-0 border-r-0 border-b-0 border-l-2 ${statusConfig[status]}`}
        >
          {status}
        </Badge>
      </TableCell>

      {/* Financial Value */}
      <TableCell className="text-right font-mono text-sm font-semibold tracking-tighter">
        {amount}
      </TableCell>

      {/* System Actions */}
      <TableCell className="text-right">
        <AlertDialog>
          <Sheet>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-popover border-border">
                <SheetTrigger asChild>
                  <DropdownMenuItem className="text-[10px] font-mono uppercase gap-2 cursor-pointer">
                    <Edit3 size={12} /> Update_Logistics
                  </DropdownMenuItem>
                </SheetTrigger>
                <DropdownMenuSeparator />
                <AlertDialogTrigger asChild>
                  <DropdownMenuItem className="text-[10px] font-mono uppercase gap-2 text-destructive focus:text-destructive cursor-pointer">
                    <Trash2 size={12} /> Void_Protocol
                  </DropdownMenuItem>
                </AlertDialogTrigger>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* EDIT STATUS SHEET */}
            <SheetContent className="bg-popover border-l-border sm:max-w-md">
              <SheetHeader className="mb-8">
                <SheetTitle className="font-mono uppercase text-sm tracking-[0.2em]">Update_Acquisition</SheetTitle>
              </SheetHeader>
              <EditOrderForm orderId={id} currentStatus={status} />
            </SheetContent>

            {/* VOID ALERT */}
            <AlertDialogContent className="bg-popover border-border">
              <AlertDialogHeader>
                <AlertDialogTitle className="font-mono uppercase text-sm tracking-widest text-destructive">Void_Protocol</AlertDialogTitle>
                <AlertDialogDescription className="text-muted-foreground text-xs leading-relaxed">
                  Initiate void sequence for <span className="text-foreground font-mono font-bold">{id}</span>? 
                  This will reverse financial logs and notify the collector node.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="mt-4">
                <AlertDialogCancel className="font-mono text-[10px] uppercase h-9">Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90 font-mono text-[10px] uppercase h-9">Confirm_Void</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </Sheet>
        </AlertDialog>
      </TableCell>
    </TableRow>
  );
};