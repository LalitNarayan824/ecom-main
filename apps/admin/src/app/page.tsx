
import { CategorySales } from "@/components/CategorySales";
import MetricCards from "@/components/MetricCards";
import RecentOrders from "@/components/RecentOrders";
import RecentSalesChart from "@/components/RecentSalesChart";
import TopProducts from "@/components/TopProducts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 p-6 min-h-screen bg-background">
      {/* Top Section */}
      <MetricCards />

      {/* Middle Section */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <RecentOrders />
        <TopProducts />
      </div>

      {/* Bottom Section */}
      <RecentSalesChart/>
      <CategorySales/>
    </div>
  );
}