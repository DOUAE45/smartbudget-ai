"use client";

import { useState, useEffect } from "react";

import { useTheme } from "../context/ThemeContext";

import InfoCard from "../components/InfoCard";
import SalaryForm from "../components/SalaryForm";
import ChargesForm from "../components/ChargesForm";
import FinanceChart from "../components/FinanceChart";
import InvestmentForm from "../components/InvestmentForm";
import AdvisorAI from "../components/AdvisorAI";
import AdvisorChat from "../components/AdvisorChat";
import HistoryList from "../components/HistoryList";

// ✅ FIX VERCEL — dynamic import correct


type HistoryItem = {
  month: string;
  salary: number;
  charges: number;
  balance: number;
};

export default function DashboardPage() {
  // 🌙 Thème
  const { theme, toggleTheme } = useTheme();

  // 💰 États
  const [salary, setSalary] = useState<number>(8000);
  const [charges, setCharges] = useState<number>(4500);
  const [history, setHistory] = useState<HistoryItem[]>([]);

  // 📦 Charger depuis localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedSalary = localStorage.getItem("salary");
    const savedCharges = localStorage.getItem("charges");
    const savedHistory = localStorage.getItem("history");

    if (savedSalary) setSalary(Number(savedSalary));
    if (savedCharges) setCharges(Number(savedCharges));
    if (savedHistory) setHistory(JSON.parse(savedHistory));
  }, []);

  // 💾 Sauvegarde auto
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("salary", salary.toString());
    }
  }, [salary]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("charges", charges.toString());
    }
  }, [charges]);

  // 🧮 Calcul
  const balance = salary - charges;

  // 🚨 Alertes
  let alertMessage = "";
  let alertColor = "";

  if (charges > salary) {
    alertMessage =
      "⚠️ Vos charges dépassent votre salaire. Situation critique.";
    alertColor = "bg-red-100 text-red-700 border-red-400";
  } else if (charges / salary >= 0.7) {
    alertMessage =
      "⚠️ Vos charges sont élevées (plus de 70 % du salaire).";
    alertColor = "bg-yellow-100 text-yellow-700 border-yellow-400";
  } else {
    alertMessage =
      "✅ Votre situation financière est saine.";
    alertColor = "bg-green-100 text-green-700 border-green-400";
  }

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-slate-900 p-4 md:p-8 text-black dark:text-white">

      {/* 🔝 Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">
          Dashboard
        </h1>

        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded bg-gray-800 text-white dark:bg-gray-200 dark:text-black"
        >
          {theme === "light" ? "🌙 Dark mode" : "☀️ Light mode"}
        </button>
      </div>

      {/* 🚨 Alerte */}
      <div className={`border-l-4 p-4 mb-6 rounded ${alertColor}`}>
        {alertMessage}
      </div>

      {/* 📊 Cartes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <InfoCard title="Salaire mensuel" amount={`${salary} DH`} />
        <InfoCard title="Charges fixes" amount={`${charges} DH`} color="text-red-600" />
        <InfoCard
          title="Solde disponible"
          amount={`${balance} DH`}
          color={balance >= 0 ? "text-green-600" : "text-red-600"}
        />
      </div>

      {/* ✏️ Formulaires */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <SalaryForm onSave={setSalary} />
        <ChargesForm charges={charges} onSave={setCharges} />
      </div>

      {/* 🔒 Investissement */}
      <InvestmentForm balance={balance} />

      {/* 📈 Graphique actuel */}
      <FinanceChart salary={salary} charges={charges} balance={balance} />

      {/* 🤖 IA */}
      <AdvisorAI salary={salary} charges={charges} balance={balance} />
      <AdvisorChat salary={salary} charges={charges} balance={balance} />

      {/* 💾 Sauvegarde */}
      <div className="sticky bottom-4 z-10 mt-6">
        <button
          onClick={() => {
            const month = new Date().toLocaleString("fr-FR", {
              month: "long",
              year: "numeric",
            });

            const newEntry = { month, salary, charges, balance };
            const newHistory = [...history, newEntry];

            setHistory(newHistory);
            localStorage.setItem("history", JSON.stringify(newHistory));
          }}
          className="w-full bg-green-600 text-white px-4 py-3 rounded-xl shadow-lg"
        >
          💾 Sauvegarder ce mois
        </button>
      </div>

      {/* 📆 Historique */}
      <HistoryList history={history} />

      {/* 📈 Évolution */}
     

    </main>
  );
}
