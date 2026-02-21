"use client"

import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Mock data for the last 7 days
const data = [
  { day: "Mon", revenue: 4000 },
  { day: "Tue", revenue: 3000 },
  { day: "Wed", revenue: 5000 },
  { day: "Thu", revenue: 4500 },
  { day: "Fri", revenue: 6000 },
  { day: "Sat", revenue: 8500 },
  { day: "Sun", revenue: 7200 },
]

const RecentSalesChart = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="font-mono uppercase tracking-tighter text-sm text-[#ecec25]">Revenue_Pulse</CardTitle>
        <CardDescription>Financial performance over the 7-day cycle.</CardDescription>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#004b23" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#004b23" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Tooltip 
                contentStyle={{ backgroundColor: "#0a0a0a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px" }}
                itemStyle={{ color: "#ecec25", fontFamily: "monospace" }}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#004b23"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorRev)"
              />
              <XAxis 
                dataKey="day" 
                stroke="#888888" 
                fontSize={10} 
                tickLine={false} 
                axisLine={false}
                fontFamily="monospace"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

export default RecentSalesChart