import './App.css';
import Collections from './components/Collections';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
    <div className="container">
    <Sidebar />
    <Collections />
    </div>
    </>
  );
}

export default App;
