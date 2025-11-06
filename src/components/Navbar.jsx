import { Recycle } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-gray-900">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-green-600 text-white">
            <Recycle className="h-5 w-5" />
          </span>
          <span className="text-lg">Pemilah Sampah</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <a href="#guide" className="hover:text-green-700 transition-colors">Panduan</a>
          <a href="#helper" className="hover:text-green-700 transition-colors">Bantuan Pilah</a>
          <a href="#tips" className="hover:text-green-700 transition-colors">Tips</a>
        </nav>
        <a
          href="#helper"
          className="md:hidden inline-flex items-center px-3 py-1.5 rounded-md bg-green-600 text-white text-sm font-medium"
        >
          Mulai Pilah
        </a>
      </div>
    </header>
  );
}
