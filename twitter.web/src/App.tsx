import './App.css';
import Sidebar from './components/layout/Sidebar';
import Feed from './Feed/views/Feed';
import Widgets from './components/layout/Widgets';

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