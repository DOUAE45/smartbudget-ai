"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type FinanceChartProps = {
  salary: number;
  charges: number;
  balance: number;
};

export default function FinanceChart({
  salary,
  charges,
  balance,
}: FinanceChartProps) {
  const data = [
    { name: "Salaire", value: salary },
    { name: "Charges", value: charges },
    { name: "Solde", value: balance },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-8">
      <h2 className="text-lg font-semibold mb-4">
        Répartition financière
      </h2>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
