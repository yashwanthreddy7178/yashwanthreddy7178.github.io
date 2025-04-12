"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { useTheme } from "next-themes"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Sample data
const salesData = [
  { name: "Jan", sales: 4000, target: 2400 },
  { name: "Feb", sales: 3000, target: 2500 },
  { name: "Mar", sales: 5000, target: 2600 },
  { name: "Apr", sales: 2780, target: 2700 },
  { name: "May", sales: 1890, target: 2800 },
  { name: "Jun", sales: 2390, target: 2900 },
  { name: "Jul", sales: 3490, target: 3000 },
]

const trafficData = [
  { name: "Direct", value: 400 },
  { name: "Organic", value: 300 },
  { name: "Referral", value: 300 },
  { name: "Social", value: 200 },
]

const COLORS = ["#1A237E", "#4CAF50", "#FFC107", "#FF6B6B"]

export function DashboardDemo() {
  const { theme } = useTheme()
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-10 overflow-hidden rounded-xl border bg-card shadow-sm"
    >
      <div className="p-6">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-2xl font-bold">Interactive Dashboard Demo</h3>
            <p className="text-muted-foreground">A sample of my data visualization capabilities</p>
          </div>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full sm:w-auto">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="sales">Sales</TabsTrigger>
              <TabsTrigger value="traffic">Traffic</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              <div className="mt-4 h-[60px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={salesData.slice(0, 5)}>
                    <Line type="monotone" dataKey="sales" stroke="#4CAF50" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">New Customers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2,350</div>
              <p className="text-xs text-muted-foreground">+180.1% from last month</p>
              <div className="mt-4 h-[60px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={salesData}>
                    <Line type="monotone" dataKey="target" stroke="#1A237E" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground">+19% from last month</p>
              <div className="mt-4 h-[60px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={salesData.slice(0, 5)}>
                    <Bar dataKey="sales" fill="#FFC107" radius={4} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <TabsContent value="overview" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Sales Overview</CardTitle>
                  <CardDescription>Monthly sales performance vs target</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ChartContainer
                      config={{
                        sales: {
                          label: "Sales",
                          color: "hsl(var(--chart-1))",
                        },
                        target: {
                          label: "Target",
                          color: "hsl(var(--chart-2))",
                        },
                      }}
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={salesData}>
                          <CartesianGrid strokeDasharray="3 3" stroke={theme === "dark" ? "#333" : "#eee"} />
                          <XAxis dataKey="name" tick={{ fill: theme === "dark" ? "#ccc" : "#333" }} />
                          <YAxis tick={{ fill: theme === "dark" ? "#ccc" : "#333" }} />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Legend />
                          <Bar dataKey="sales" fill="var(--color-sales)" radius={[4, 4, 0, 0]} />
                          <Bar dataKey="target" fill="var(--color-target)" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="sales" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Sales Trend</CardTitle>
                <CardDescription>Monthly sales performance over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ChartContainer
                    config={{
                      sales: {
                        label: "Sales",
                        color: "hsl(var(--chart-1))",
                      },
                      target: {
                        label: "Target",
                        color: "hsl(var(--chart-2))",
                      },
                    }}
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={salesData}>
                        <CartesianGrid strokeDasharray="3 3" stroke={theme === "dark" ? "#333" : "#eee"} />
                        <XAxis dataKey="name" tick={{ fill: theme === "dark" ? "#ccc" : "#333" }} />
                        <YAxis tick={{ fill: theme === "dark" ? "#ccc" : "#333" }} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="sales"
                          stroke="var(--color-sales)"
                          strokeWidth={2}
                          activeDot={{ r: 8 }}
                        />
                        <Line type="monotone" dataKey="target" stroke="var(--color-target)" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="traffic" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Traffic Sources</CardTitle>
                <CardDescription>Distribution of traffic by source</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={trafficData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {trafficData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </div>
    </motion.div>
  )
}
