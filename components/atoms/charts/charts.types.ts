export interface LineChartData {
  name: string;
  value: number;
}

export interface CustomLineChartProps {
  data: LineChartData[];
  dataKey?: string;
  strokeColor?: string;
  className?: string;
}

export interface PieChartData {
  name: string;
  value: number;
  color: string;
}

export interface CustomPieChartProps {
  data: PieChartData[];
  className?: string;
}

export interface BarChartData {
  name: string;
  value: number;
  color?: string;
}

export interface CustomBarChartProps {
  data: BarChartData[];
  dataKey?: string;
  fillColor?: string;
  className?: string;
}