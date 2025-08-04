"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { CustomPieChartProps } from "./charts.types";

export const CustomPieChart = ({
  data,
  className = "",
}: CustomPieChartProps) => {
  return (
    <div className={`w-full h-64 ${className}`}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              color: "#1f1f1f",
            }}
          />
          <Legend
            wrapperStyle={{
              fontSize: "12px",
              color: "#6e6e6e",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
