"use client";

import { useState } from "react";

type InvestmentFormProps = {
  balance: number;
};

export default function InvestmentForm({ balance }: InvestmentFormProps) {
  const [amount, setAmount] = useState("");

  const isBlocked = balance <= 0;

  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow mt-8">
      <h2 className="text-lg font-semibold mb-4">
        Investissement / Retrait
      </h2>

      {isBlocked && (
        <p className="mb-4 text-red-600">
          ❌ Solde insuffisant. Impossible d’investir.
        </p>
      )}

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Montant (DH)"
        disabled={isBlocked}
        className="w-full border rounded-lg p-2 mb-4 disabled:opacity-50"
      />

      <button
        disabled={isBlocked}
        className="w-full bg-blue-600 text-white py-2 rounded-lg disabled:opacity-50"
      >
        Valider
      </button>
    </div>
  );
}
