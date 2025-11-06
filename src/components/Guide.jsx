export default function Guide() {
  const categories = [
    {
      name: "Organik",
      color: "bg-green-100 text-green-800 border-green-200",
      items: ["Sisa makanan", "Daun kering", "Kulit buah"],
      how: "Kumpulkan di wadah tertutup, jadikan kompos bila memungkinkan.",
    },
    {
      name: "Anorganik - Daur Ulang",
      color: "bg-blue-100 text-blue-800 border-blue-200",
      items: ["Botol plastik", "Kaleng", "Kertas/karton"],
      how: "Bilas bersih, keringkan, pipihkan untuk hemat ruang.",
    },
    {
      name: "B3 (Bahan Berbahaya & Beracun)",
      color: "bg-red-100 text-red-800 border-red-200",
      items: ["Baterai", "Lampu neon", "Kaleng cat"],
      how: "Simpan terpisah. Bawa ke bank sampah/TPA khusus B3.",
    },
    {
      name: "Residu/Lainnya",
      color: "bg-amber-100 text-amber-800 border-amber-200",
      items: ["Popok", "Tisu bekas", "Masker"],
      how: "Pastikan terbungkus rapih sebelum dibuang.",
    },
  ];

  return (
    <section id="guide" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-gray-900">Panduan Pemilahan</h2>
        <p className="mt-2 text-gray-600">Kenali kategori dan cara penanganannya.</p>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className={`rounded-xl border p-5 shadow-sm ${cat.color}`}
            >
              <h3 className="font-semibold text-lg">{cat.name}</h3>
              <ul className="mt-3 list-disc list-inside text-sm space-y-1">
                {cat.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <p className="mt-3 text-sm">{cat.how}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
