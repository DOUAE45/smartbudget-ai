"use client";

type HistoryItem = {
  month: string;
  salary: number;
  charges: number;
  balance: number;
};

export default function HistoryList({
  history,
}: {
  history: HistoryItem[];
}) {
  if (history.length === 0) {
    return (
      <p className="mt-8 text-gray-500">
        Aucun historique pour le moment.
      </p>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow mt-8">
      <h2 className="text-lg font-semibold mb-4">
        📆 Historique mensuel
      </h2>

      <ul className="space-y-3">
        {history.map((item, index) => (
          <li
            key={index}
            className="flex justify-between border-b pb-2"
          >
            <span>{item.month}</span>
            <span className="font-medium">
              {item.balance} DH
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
