"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export type HistoryItem = {
  month: string;
  salary: number;
  charges: number;
  balance: number;
};

export default function HistoryChart({
  history,
}: {
  history: HistoryItem[];
}) {
  if (!history || history.length === 0) return null;

  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow mt-8">
      <h2 className="text-lg font-semibold mb-4">
        📈 Évolution du solde
      </h2>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={history}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="balance"
            stroke="#22c55e"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
