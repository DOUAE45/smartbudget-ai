"use client";

import { useState } from "react";

type ChargesFormProps = {
  charges: number;
  onSave: (value: number) => void;
};

export default function ChargesForm({
  charges,
  onSave,
}: ChargesFormProps) {
  const [value, setValue] = useState(charges.toString());

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6">
      <h2 className="text-lg font-semibold mb-4">
        Charges fixes
      </h2>

      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full border rounded-lg p-2 mb-4"
        placeholder="Total charges (DH)"
      />

      <button
        onClick={() => onSave(Number(value))}
        className="w-full bg-red-600 text-white py-2 rounded-lg"
      >
        Enregistrer les charges
      </button>
    </div>
  );
}
 