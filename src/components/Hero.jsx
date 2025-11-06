import { Leaf, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-emerald-50" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-3 py-1 text-xs font-medium text-green-700">
              <Sparkles className="h-3.5 w-3.5" />
              Edukasi • Daur Ulang • Komunitas
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Mulai memilah sampah dengan cara yang benar
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Pelajari kategori sampah, cara pemilahan yang tepat, dan tips daur ulang untuk rumah dan komunitasmu.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#helper" className="inline-flex items-center px-5 py-2.5 rounded-md bg-green-600 text-white font-semibold shadow hover:bg-green-700">
                Mulai Pilah
              </a>
              <a href="#guide" className="inline-flex items-center px-5 py-2.5 rounded-md bg-white text-green-700 border border-green-200 font-semibold hover:bg-green-50">
                Panduan Cepat
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-emerald-200/60 to-green-100/60 border border-green-200 p-6">
              <div className="h-full w-full rounded-xl bg-white/70 grid grid-cols-2 gap-4 p-4">
                {[
                  { label: "Organik", color: "bg-green-500", emoji: "\uD83C\uDF31" },
                  { label: "Anorganik", color: "bg-blue-500", emoji: "\u267B\uFE0F" },
                  { label: "B3", color: "bg-red-500", emoji: "\u26A0\uFE0F" },
                  { label: "Lainnya", color: "bg-amber-500", emoji: "\u267B\uFE0F" },
                ].map((item) => (
                  <div key={item.label} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                    <div className={`flex items-center justify-between`}>
                      <span className={`inline-flex items-center justify-center h-9 w-9 rounded-lg text-white ${item.color}`}>
                        <Leaf className="h-5 w-5" />
                      </span>
                      <span className="text-2xl">{item.emoji}</span>
                    </div>
                    <div className="mt-3 text-sm font-semibold text-gray-800">{item.label}</div>
                    <p className="text-xs text-gray-500 mt-1">Contoh dan cara mengelola</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
