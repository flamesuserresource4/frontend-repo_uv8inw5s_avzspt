export default function Tips() {
  const tips = [
    "Sediakan 3-4 wadah berbeda di rumah: organik, anorganik, B3, residu.",
    "Bilas bersih kemasan makanan/minuman agar tidak berbau dan mudah didaur ulang.",
    "Kompakkan kardus dan botol untuk menghemat ruang.",
    "Gunakan kantong kertas atau reusable bag saat belanja.",
    "Kumpulkan baterai bekas di toples khusus, setorkan ke bank sampah." ,
  ];

  return (
    <section id="tips" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-gray-900">Tips Praktis</h2>
        <p className="mt-2 text-gray-600">Kebiasaan kecil berdampak besar untuk lingkungan.</p>

        <ul className="mt-6 grid md:grid-cols-2 gap-4">
          {tips.map((t) => (
            <li key={t} className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-gray-800">
              • {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
