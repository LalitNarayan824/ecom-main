"use client";

import { MoreHorizontal, User, Mail, Phone, ShieldCheck, ShieldAlert, Edit3, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator 
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from "@/components/ui/sheet";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import EditUserForm from "./EditUserForm";
import { useRouter } from "next/navigation";

interface CollectorProps {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  is_verified: boolean;
}

export const UserRow = ({ id, full_name, email, phone, is_verified }: CollectorProps) => {
  const router = useRouter();

  return (
    <TableRow className="group border-border hover:bg-muted/30 transition-colors">
      {/* Node ID - ONLY THIS CELL TRIGGERS ROUTING */}
      <TableCell 
        onClick={() => router.push(`/users/${id}`)}
        className="font-mono text-[10px] text-muted-foreground uppercase tracking-tight cursor-pointer hover:text-primary hover:underline decoration-primary/30 underline-offset-4 transition-all"
      >
        {id}
      </TableCell>

      {/* Collector Identity - Non-clickable */}
      <TableCell>
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground/60 border border-border">
            <User size={14} />
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-sm tracking-tight text-foreground/90">{full_name}</span>
            <span className="text-[10px] text-muted-foreground font-mono flex items-center gap-1 uppercase tracking-tighter">
              <Mail size={10} className="text-muted-foreground/40" /> {email}
            </span>
          </div>
        </div>
      </TableCell>

      {/* Logistics Phone */}
      <TableCell className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
        {phone || "---"}
      </TableCell>

      {/* Status Badge */}
      <TableCell>
        <Badge 
          variant="outline" 
          className={`text-[9px] uppercase font-mono font-normal px-2 py-0 gap-1 rounded-none border-t-0 border-r-0 border-b-0 border-l-2 ${
            is_verified 
              ? 'border-l-emerald-500 bg-emerald-500/5 text-emerald-500' 
              : 'border-l-amber-500 bg-amber-500/5 text-amber-500'
          }`}
        >
          {is_verified ? <ShieldCheck size={10} /> : <ShieldAlert size={10} />}
          {is_verified ? "Verified" : "Pending"}
        </Badge>
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
                    <Edit3 size={12} /> Edit_Identity
                  </DropdownMenuItem>
                </SheetTrigger>
                <DropdownMenuSeparator />
                <AlertDialogTrigger asChild>
                  <DropdownMenuItem className="text-[10px] font-mono uppercase gap-2 text-destructive focus:text-destructive cursor-pointer">
                    <Trash2 size={12} /> Purge_Node
                  </DropdownMenuItem>
                </AlertDialogTrigger>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* EDIT SHEET */}
            <SheetContent className="bg-popover border-l-border">
              <SheetHeader className="mb-8">
                <SheetTitle className="font-mono uppercase text-sm tracking-[0.2em]">Edit_Collector</SheetTitle>
                <SheetDescription className="text-xs font-mono uppercase text-muted-foreground tracking-tighter">
                  Update Registry_Node for {id}
                </SheetDescription>
              </SheetHeader>
              <EditUserForm initialData={{ id, full_name, email, phone, is_verified }} />
            </SheetContent>

            {/* DELETE ALERT */}
            <AlertDialogContent className="bg-popover border-border">
              <AlertDialogHeader>
                <AlertDialogTitle className="font-mono uppercase text-sm tracking-widest">Confirm_Purge_Protocol</AlertDialogTitle>
                <AlertDialogDescription className="text-muted-foreground text-xs leading-relaxed">
                  Permanently remove <span className="text-foreground font-semibold">{full_name}</span> from the active registry?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="mt-4">
                <AlertDialogCancel className="font-mono text-[10px] uppercase h-9">Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90 font-mono text-[10px] uppercase h-9">
                  Confirm_Purge
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </Sheet>
        </AlertDialog>
      </TableCell>
    </TableRow>
  );
};