"use client";

import { useState } from "react";

type AdvisorChatProps = {
  salary: number;
  charges: number;
  balance: number;
};

type Message = {
  role: "user" | "ai";
  content: string;
};

export default function AdvisorChat({
  salary,
  charges,
  balance,
}: AdvisorChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const getAdvice = (question: string) => {
    const q = question.toLowerCase();

    if (q.includes("voyage") || q.includes("vacances")) {
      if (balance > salary * 0.2) {
        return "✈️ Oui, vous pouvez envisager un voyage raisonnable.";
      }
      return "❌ Mieux vaut éviter un voyage pour le moment.";
    }

    if (q.includes("invest")) {
      if (balance > 0) {
        return "📈 Vous pouvez investir une petite partie de votre solde.";
      }
      return "❌ Investissement déconseillé avec un solde négatif.";
    }

    if (q.includes("charge")) {
      return charges / salary > 0.7
        ? "⚠️ Vos charges sont élevées. Essayez de les réduire."
        : "✅ Vos charges sont sous contrôle.";
    }

    return "ℹ️ Je vous conseille de garder un solde positif et d’épargner régulièrement.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg: Message = { role: "user", content: input };
    const aiMsg: Message = {
      role: "ai",
      content: getAdvice(input),
    };

    setMessages((prev) => [...prev, userMsg, aiMsg]);
    setInput("");
  };

  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow mt-8">
      <h2 className="text-lg font-semibold mb-4">🤖 Conseiller IA</h2>

      <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded ${
              msg.role === "user"
                ? "bg-blue-100 text-blue-800 text-right"
                : "bg-gray-100 dark:bg-slate-700"
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Posez une question..."
          className="flex-1 border rounded-lg p-2"
        />
        <button
          onClick={sendMessage}
          className="bg-black text-white px-4 rounded-lg"
        >
          Envoyer
        </button>
      </div>
    </div>
  );
}
