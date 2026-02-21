import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const orders = [
  {
    id: "AF-1001",
    collector: "Sarah Jenkins",
    specimen: "Obsidian Tulip",
    status: "Processing",
    amount: "$120.00",
  },
  {
    id: "AF-1002",
    collector: "Marcus Chen",
    specimen: "Moonlight Fern",
    status: "Dispatched",
    amount: "$85.00",
  },
  {
    id: "AF-1003",
    collector: "Elena Rodriguez",
    specimen: "Velvet Moss",
    status: "Delivered",
    amount: "$45.00",
  },
];

const RecentOrders = () => {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle className="font-mono uppercase tracking-tighter text-sm">Recent_Acquisitions</CardTitle>
        <CardDescription>Latest specimen transactions from the registry.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent uppercase text-[10px] text-muted-foreground font-mono">
              <TableHead>ID</TableHead>
              <TableHead>Collector</TableHead>
              <TableHead>Specimen</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id} className="group cursor-pointer">
                <TableCell className="font-mono text-xs text-muted-foreground">
                  {order.id}
                </TableCell>
                <TableCell className="font-medium">{order.collector}</TableCell>
                <TableCell>{order.specimen}</TableCell>
                <TableCell>
                  <Badge 
                    variant="outline" 
                    className={`text-[10px] uppercase px-2 py-0 font-normal ${
                      order.status === 'Processing' ? 'border-amber-500/50 text-amber-500' : 
                      order.status === 'Dispatched' ? 'border-blue-500/50 text-blue-500' : 
                      'border-emerald-500/50 text-emerald-500'
                    }`}
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-mono font-semibold">
                  {order.amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default RecentOrders