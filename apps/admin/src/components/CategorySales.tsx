"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Layers } from "lucide-react";

const data = [
  { category: "Flowers", sales: 12400 },
  { category: "Pottery", sales: 6800 },
  { category: "Candles", sales: 5400 },
  { category: "Seeds", sales: 2700 },
];

export const CategorySales = () => {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="font-mono uppercase tracking-tighter text-sm flex items-center gap-2">
            <Layers size={14} className="text-muted-foreground" />
            Category_Distribution
          </CardTitle>
          <span className="font-mono text-[10px] text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            +12.4%
          </span>
        </div>
        <CardDescription>
          Revenue volume across primary registry classes.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] w-full pt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 0, right: 0, left: -25, bottom: 0 }}
            >
              <XAxis
                dataKey="category"
                axisLine={false}
                tickLine={false}
                fontSize={10}
                fontFamily="var(--font-mono)"
                /* This is the key change: */
                // tick={{ fill: "hsl(var(--muted-foreground))" }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                fontSize={10}
                fontFamily="var(--font-mono)"
                /* And here: */
                // tick={{ fill: "hsl(var(--muted-foreground))" }}
                tickFormatter={(val) => `$${val / 1000}k`}
              />
              <Tooltip
                cursor={{ fill: "hsl(var(--muted))", opacity: 0.4 }}
                content={({ active, payload }) => {
                  if (active && payload?.length) {
                    return (
                      <div className="bg-popover border border-border px-3 py-2 rounded shadow-sm">
                        <p className="text-[10px] font-mono uppercase text-muted-foreground mb-1">
                          {payload[0]?.payload?.category}
                        </p>
                        <p className="text-xs font-mono font-bold">
                          ${payload[0]?.value?.toLocaleString()}
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar
                dataKey="sales"
                fill="currentColor"
                radius={[2, 2, 0, 0]}
                barSize={30}
                className="fill-primary/80 hover:fill-primary transition-colors cursor-crosshair"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Legend / Metrics Table */}
        <div className="mt-8 space-y-2">
          {data.map((item) => (
            <div
              key={item.category}
              className="flex items-center justify-between py-1 border-t border-border/50 first:border-none"
            >
              <span className="text-[10px] font-mono uppercase text-muted-foreground">
                {item.category}
              </span>
              <span className="text-xs font-mono">
                ${item.sales.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
