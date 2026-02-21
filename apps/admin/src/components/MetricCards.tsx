import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { DollarSign, ShoppingBag, Users, AlertTriangle } from "lucide-react"

const MetricCards = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      
      {/* TOTAL REVENUE */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-emerald-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold font-mono">$0.00</div>
          <p className="text-xs text-muted-foreground">+0% from last month</p>
        </CardContent>
      </Card>

      {/* ACTIVE ORDERS */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
          <ShoppingBag className="h-4 w-4 text-blue-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold font-mono">0</div>
          <p className="text-xs text-muted-foreground">0 awaiting shipment</p>
        </CardContent>
      </Card>

      {/* TOTAL USERS */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Total Users</CardTitle>
          <Users className="h-4 w-4 text-purple-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold font-mono">0</div>
          <p className="text-xs text-muted-foreground">+0 new this week</p>
        </CardContent>
      </Card>

      {/* LOW STOCKS */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Low Stock</CardTitle>
          <AlertTriangle className="h-4 w-4 text-amber-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold font-mono">0</div>
          <p className="text-xs text-muted-foreground">Items requiring attention</p>
        </CardContent>
      </Card>

    </div>
  )
}

export default MetricCards