type InfoCardProps = {
  title: string;
  amount: string;
  color?: string;
};

export default function InfoCard({
  title,
  amount,
  color = "text-black",
}: InfoCardProps) {
  return (
    <div className="bg-gray-50 p-4 rounded-xl border">
      <p className="text-sm text-gray-500">{title}</p>
      <p className={`text-2xl font-semibold ${color}`}>
        {amount}
      </p>
    </div>
  );
}
