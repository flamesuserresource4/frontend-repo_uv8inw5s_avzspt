import { useMemo, useState } from "react";
import { Search } from "lucide-react";

const DATA = [
  { name: "Botol plastik", category: "Anorganik - Daur Ulang", steps: "Bilas bersih, keringkan, lalu masukkan ke wadah plastik daur ulang." },
  { name: "Kaleng minuman", category: "Anorganik - Daur Ulang", steps: "Bilas, pipihkan, simpan kering." },
  { name: "Kardus", category: "Anorganik - Daur Ulang", steps: "Lepaskan plastik/isolasi, pipihkan, simpan kering." },
  { name: "Sisa sayur", category: "Organik", steps: "Kumpulkan dan komposkan atau buang di wadah organik tertutup." },
  { name: "Kulit buah", category: "Organik", steps: "Cocok untuk kompos; jika tidak, simpan di wadah organik." },
  { name: "Baterai", category: "B3", steps: "Jangan dibuang sembarangan. Simpan di wadah khusus dan serahkan ke bank sampah/gerai B3." },
  { name: "Lampu neon", category: "B3", steps: "Simpan utuh di kardus, bawa ke fasilitas pengelolaan B3." },
  { name: "Popok sekali pakai", category: "Residu", steps: "Bungkus rapih, masukkan kantong tertutup sebelum dibuang." },
];

export default function Helper() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return DATA.slice(0, 6);
    return DATA.filter((d) => d.name.toLowerCase().includes(q));
  }, [query]);

  return (
    <section id="helper" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-gray-900">Bantuan Pemilahan</h2>
        <p className="mt-2 text-gray-600">Cari item untuk melihat cara penanganannya.</p>

        <div className="mt-6 relative max-w-xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Contoh: botol, baterai, kardus..."
            className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
          />
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {results.map((r) => (
            <div key={r.name} className="rounded-xl bg-white border border-gray-200 p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">{r.name}</h3>
                  <p className="text-sm text-gray-600">Kategori: {r.category}</p>
                </div>
                <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-700 border border-green-200">
                  Panduan
                </span>
              </div>
              <p className="mt-3 text-sm text-gray-700">{r.steps}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
