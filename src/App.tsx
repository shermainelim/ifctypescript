
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { BuildingViewer } from './components/building-viewer';
import { Dashboard } from "./components/home";
import { MapViewer } from './components/map-viewer';
import { ContextProvider } from './middleware/context-provider';

function App() {
  return (
    <ContextProvider>
    <Router>
<Routes>
  <Route path="/building" element={<BuildingViewer/>}/>
  <Route path="/map" element={<MapViewer/>}/>
  <Route path="/login" element={<Dashboard />} />
            <Route path="/" element={<Dashboard />} />
</Routes>
    </Router>
    </ContextProvider>
  );
}

export default App;
