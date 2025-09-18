"use client";

import { Cell, LabelList, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

export const description = "A pie chart with a label list";

const chartConfig = {
  tractors: { label: "Tractors", color: "var(--chart-1)", },
  harvesters: { label: "Harvesters", color: "var(--chart-2)", },
  plows: { label: "Plows", color: "var(--chart-3)", },
  seeders: { label: "Seeders", color: "var(--chart-4)", },
  sprayers: { label: "Sprayers", color: "var(--chart-5)", },
  others: { label: "Others", color: "var(--chart-5)", },
} satisfies ChartConfig;

const machineryTypes = [
  { name: "Tractors", value: 17950, color: "#2563eb" },
  { name: "Harvesters", value: 6210, color: "#dc2626", },
  { name: "Plows", value: 11030, color: "#16a34a", },
  { name: "Seeders", value: 4580, color: "#ca8a04", },
  { name: "Sprayers", value: 3200, color: "#7c3aed", },
  { name: "Others", value: 2800, color: "#ea580c", },
];

function MachineryTypes() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle className="flex items-center gap-2">
          Machinery Types Distribution
          <Badge
            variant="outline"
            className="text-green-500 bg-green-500/10 border-none flex items-center gap-1"
          >
            <TrendingUp className="h-4 w-4" />
            <span>5.2%</span>
          </Badge>
        </CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-4">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-text]:fill-background mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="name" />}
            />
            <Pie
              data={machineryTypes}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              outerRadius={120}
              cornerRadius={6}
              paddingAngle={4}
            >
              {machineryTypes.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
              <LabelList
                dataKey="value"
                position="inside"
                stroke="none"
                fontSize={12}
                fontWeight={500}
                fill="#fff"
                formatter={(value: number) => value.toLocaleString()}
              />
            </Pie>
          </PieChart>
        </ChartContainer>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
          {machineryTypes.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-xs sm:text-sm text-gray-600 truncate">
                {item.name}
              </span>
              <span className="text-xs sm:text-sm font-medium text-gray-900 flex-shrink-0">
                {item.value.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default MachineryTypes;
