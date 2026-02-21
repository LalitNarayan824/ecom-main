"use client";

import { MoreHorizontal, Edit3, Trash2, AlertCircle, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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
import EditProduct from "./EditProduct";
import Link from "next/link";

export const ProductRow = ({ id, name, latinName, category, stock, price }: any) => {
  return (
    <TableRow className="group border-border hover:bg-muted/50 transition-colors">
      {/* ID Reference */}
      <TableCell className="font-mono text-[10px] text-muted-foreground uppercase tracking-tight">
        <Link href={`/products/${id}`} className="hover:text-primary flex items-center gap-1 transition-colors">
          {id} <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>
      </TableCell>

      {/* Specimen Identity */}
      <TableCell>
        <div className="flex flex-col">
          <span className="font-medium text-sm tracking-tight">{name}</span>
          <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-tighter italic">
            {latinName}
          </span>
        </div>
      </TableCell>

      {/* Classification */}
      <TableCell className="text-[10px] font-mono uppercase text-muted-foreground">
        {category}
      </TableCell>

      {/* Inventory Status */}
      <TableCell className="text-xs">
        <span className={stock === 0 ? "text-destructive font-medium" : "text-foreground"}>
          {stock} <span className="text-[10px] text-muted-foreground uppercase font-mono">Units</span>
        </span>
      </TableCell>

      {/* Unit Value */}
      <TableCell className="text-right font-mono text-sm font-semibold tracking-tighter">
        ${price.toLocaleString()}
      </TableCell>

      {/* Actions */}
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
                  <DropdownMenuItem className="text-xs font-mono uppercase gap-2 cursor-pointer">
                    <Edit3 size={12} /> Edit_Specimen
                  </DropdownMenuItem>
                </SheetTrigger>

                <DropdownMenuSeparator />

                <AlertDialogTrigger asChild>
                  <DropdownMenuItem className="text-xs font-mono uppercase gap-2 text-destructive focus:text-destructive cursor-pointer">
                    <Trash2 size={12} /> Purge_Entry
                  </DropdownMenuItem>
                </AlertDialogTrigger>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* EDIT SHEET */}
            <SheetContent className="bg-popover border-l-border sm:max-w-md">
              <SheetHeader className="space-y-1">
                <SheetTitle className="font-mono uppercase tracking-widest text-sm">
                  Edit_Specimen
                </SheetTitle>
                <SheetDescription className="text-xs">
                  Update registry parameters for {id}. Changes are committed to the main archive.
                </SheetDescription>
              </SheetHeader>
              <div className="py-8">
                <EditProduct
                  name={name}
                  latinName={latinName}
                  category={category}
                  price={price}
                  stock={stock}
                />
              </div>
            </SheetContent>

            {/* DELETE ALERT */}
            <AlertDialogContent className="bg-popover border-border">
              <AlertDialogHeader>
                <div className="flex items-center gap-2 text-destructive mb-2">
                  <AlertCircle size={18} />
                  <AlertDialogTitle className="font-mono uppercase text-sm">
                    Confirm_Purge
                  </AlertDialogTitle>
                </div>
                <AlertDialogDescription className="text-xs leading-relaxed">
                  Are you sure you want to remove <span className="text-foreground font-medium">{name}</span> from
                  the registry? This process is irreversible.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="mt-4">
                <AlertDialogCancel className="font-mono text-[10px] uppercase h-9">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90 font-mono text-[10px] uppercase h-9">
                  Confirm_Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </Sheet>
        </AlertDialog>
      </TableCell>
    </TableRow>
  );
};