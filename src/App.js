import './App.css';
import Body from './components/Body';
import Collections from './components/Collections';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
    <div className="container">
    <Sidebar />
    <Collections />
   <Body />
    </div>
    </>
  );
}

export default App;
