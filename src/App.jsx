import './styles/output.css';
import { ViandasContainer } from './components/ViandasContainer';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Congelados } from './components/Congelados';
import { Nosotros } from './components/Nosotros';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 mt-[80px]">
        <section id="viandas">
          <ViandasContainer />
        </section>
        <section id="congelados">
          <Congelados />
        </section>
        <section id="nosotros">
          <Nosotros />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

