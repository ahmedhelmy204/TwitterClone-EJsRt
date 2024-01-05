import './App.css';
import Sidebar from './Layout/Sidebar';
import Feed from './Layout/Feed';
import Widgets from './Layout/Widgets';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;