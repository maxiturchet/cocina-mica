import './styles/output.css';
import { ViandasContainer } from './components/ViandasContainer';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="grow">
        <ViandasContainer />
      </main>
      <Footer />
    </div>
  );
}

export default App;

