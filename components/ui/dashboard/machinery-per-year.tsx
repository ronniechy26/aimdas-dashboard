"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

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

const chartData = [
  { year: "2020", value: 18688 },
  { year: "2021", value: 30534 },
  { year: "2022", value: 23347 },
  { year: "2023", value: 7344 },
  { year: "2024", value: 20923 },
  { year: "2025", value: 21433 },
];

const chartConfig = {
  value: {
    label: "Count",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export default function MachineryPerYear() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Equipment Distribution by Year
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
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 20,
              right: 20,
            }}
          >
            <CartesianGrid vertical={true} />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 4)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="value"
              // type="linear"
              stroke="var(--chart-2)"
              strokeWidth={2}
              strokeDasharray="4 4"
              type="bump"
              dot={<CustomizedDot />}
              filter="url(#rainbow-line-glow)"
            />
          </LineChart>
        </ChartContainer>
        <div className="mt-4 text-sm text-gray-600">
          Peak distribution occurred in 2021 with significant program implementation
        </div>
      </CardContent>
    </Card>
  );
}

const CustomizedDot = (props: React.SVGProps<SVGCircleElement>) => {
  const { cx, cy, stroke } = props;

  return (
    <g>
      {/* Main dot */}
      <circle cx={cx} cy={cy} r={5} fill={stroke} />
      {/* Ping animation circles */}
      <circle
        cx={cx}
        cy={cy}
        r={3}
        stroke={stroke}
        fill="none"
        strokeWidth="1"
        opacity="0.8"
      >
        <animate
          attributeName="r"
          values="3;10"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.8;0"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  );
};