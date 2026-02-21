"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function EditOrderForm({ orderId, currentStatus }: { orderId: string, currentStatus: string }) {
  return (
    <form className="space-y-8 p-3">
      <div className="space-y-4">
        <div className="grid gap-2">
          <Label className="text-[10px] uppercase font-mono text-white/40">Acquisition_Status</Label>
          <Select defaultValue={currentStatus.toLowerCase()}>
            <SelectTrigger className="bg-white/5 border-white/10 h-11 uppercase font-mono text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#0a0a0a] border-white/10 text-white">
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="shipped">Shipped</SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label className="text-[10px] uppercase font-mono text-white/40">Tracking_Number</Label>
          <Input placeholder="e.g. UPS-8821-AF" className="bg-white/5 border-white/10 h-11 font-mono uppercase" />
        </div>
      </div>

      <div className="p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-lg">
        <p className="text-[10px] text-emerald-500/80 leading-relaxed uppercase font-mono">
          Note: Changing status to "Shipped" or "Delivered" will trigger an automated dispatch notification to the collector.
        </p>
      </div>

      <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white uppercase font-mono text-xs tracking-widest py-6">
        Update_Ledger
      </Button>
    </form>
  )
}