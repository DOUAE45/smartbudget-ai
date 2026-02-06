"use client";

type AdvisorAIProps = {
  salary: number;
  charges: number;
  balance: number;
};

export default function AdvisorAI({
  salary,
  charges,
  balance,
}: AdvisorAIProps) {
  let advice = "";
  let color = "";

  if (charges > salary) {
    advice =
      "🚨 Vos charges dépassent votre salaire. Réduisez vos dépenses immédiatement.";
    color = "bg-red-100 text-red-700";
  } else if (charges / salary >= 0.7) {
    advice =
      "⚠️ Vos charges sont élevées. Essayez d’épargner au moins 20 % de votre salaire.";
    color = "bg-yellow-100 text-yellow-700";
  } else if (balance > salary * 0.3) {
    advice =
      "✅ Bonne gestion ! Vous pouvez envisager un investissement ou une épargne.";
    color = "bg-green-100 text-green-700";
  } else {
    advice =
      "ℹ️ Votre situation est stable. Continuez à suivre vos dépenses.";
    color = "bg-blue-100 text-blue-700";
  }

  return (
    <div className={`p-6 rounded-xl shadow mt-8 ${color}`}>
      <h2 className="text-lg font-semibold mb-2">
        🤖 Conseiller SmartBudget
      </h2>
      <p>{advice}</p>
    </div>
  );
}
