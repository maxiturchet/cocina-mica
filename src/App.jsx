import './styles/output.css';
import { ViandasContainer } from './components/ViandasContainer';
import { Footer } from './components/Footer';
import { Congelados } from './components/Congelados';
import { Nosotros } from './components/Nosotros';
import { ViandaDiaria } from './components/ViandaDiaria';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <ViandaDiaria />
      <main className="flex-1">
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

