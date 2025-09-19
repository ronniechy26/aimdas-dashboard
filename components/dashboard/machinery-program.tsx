"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis, Cell } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Badge } from "../ui/badge"

export const description = "A mixed bar chart"

type Program =
  | "National Organic Agriculture Program"
  | "National Livestock Program"
  | "Corn Program"
  | "Rice Program"
  | "Non-DA Project"

interface ProgramData {
  program: Program
  count: number
}

const programDistribution: ProgramData[] = [
  { program: "National Organic Agriculture Program", count: 33456 },
  { program: "National Livestock Program", count: 4447 },
  { program: "Corn Program", count: 1233 },
  { program: "Rice Program", count: 27823 },
  { program: "Non-DA Project", count: 3923 },
]

const chartConfig: ChartConfig & Record<Program, { label: string; color: string }> = {
  count: {
    label: "Count",
  },
  "National Organic Agriculture Program": {
    label: "National Organic Agriculture Program",
    color: "var(--chart-1)",
  },
  "National Livestock Program": {
    label: "National Livestock Program",
    color: "var(--chart-2)",
  },
  "Corn Program": {
    label: "Corn Program",
    color: "var(--chart-3)",
  },
  "Rice Program": {
    label: "Rice Program",
    color: "var(--chart-4)",
  },
  "Non-DA Project": {
    label: "Non-DA Project",
    color: "var(--chart-5)",
  },
}

function MachineryProgram() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Equipment Distribution by Program
          <Badge
            variant="outline"
            className="text-green-500 bg-green-500/10 border-none ml-2"
          >
            <TrendingUp className="h-4 w-4" />
            <span>5.2%</span>
          </Badge>
        </CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={programDistribution}
            layout="vertical"
            margin={{ left: 20 }}
          >
            <YAxis
              dataKey="program"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as Program]?.label
              }
            />
            <XAxis dataKey="count" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="count" layout="vertical" radius={5}>
              {programDistribution.map((entry) => (
                <Cell
                  key={`cell-${entry.program}`}
                  fill={chartConfig[entry.program].color}
                />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing program counts for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}

export default MachineryProgram
