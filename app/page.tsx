"use client";

import { useRouter } from "next/navigation";
import InfoCard from "./components/InfoCard";

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold mb-2 text-center">
          SmartBudget AI
        </h1>

        <p className="text-gray-600 text-center mb-6">
          Gérez votre salaire intelligemment.
        </p>

        <div className="space-y-4">
          <InfoCard title="Salaire mensuel" amount="8 000 DH" />
          <InfoCard
            title="Charges fixes"
            amount="4 500 DH"
            color="text-red-600"
          />
          <InfoCard
            title="Solde disponible"
            amount="3 500 DH"
            color="text-green-600"
          />
        </div>

        <button
          onClick={() => router.push("/dashboard")}
          className="mt-6 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
        >
          Accéder au dashboard
        </button>
      </div>
    </main>
  );
}
