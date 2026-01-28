import './styles/output.css';
import { ViandasContainer } from './components/ViandasContainer';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50" style={{ minHeight: '100vh' }}>
      <Navbar />
      <main className="flex-1" style={{ minHeight: 'calc(100vh - 200px)' }}>
        <ViandasContainer />
      </main>
      <Footer />
    </div>
  );
}

export default App;

