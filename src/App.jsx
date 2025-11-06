import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Guide from "./components/Guide";
import Helper from "./components/Helper";
import Tips from "./components/Tips";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Guide />
        <Helper />
        <Tips />
      </main>
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} Pemilah Sampah • Edukasi pemilahan dan daur ulang
          </p>
          <a
            href="#home"
            className="inline-flex px-3 py-1.5 rounded-md bg-green-600 text-white font-medium hover:bg-green-700"
          >
            Ke Atas
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
