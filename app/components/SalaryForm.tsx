"use client";

import { useState } from "react";

type SalaryFormProps = {
  onSave: (salary: number) => void;
};

export default function SalaryForm({ onSave }: SalaryFormProps) {
  const [salary, setSalary] = useState("");

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">
        Entrer votre salaire
      </h2>

      <input
        type="number"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        placeholder="Salaire mensuel (DH)"
        className="w-full border rounded-lg p-2 mb-4"
      />

      <button
        onClick={() => onSave(Number(salary))}
        className="w-full bg-black text-white py-2 rounded-lg"
      >
        Enregistrer
      </button>
    </div>
  );
}
