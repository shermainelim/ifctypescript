
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { BuildingViewer } from './components/building-viewer';
import { LoginForm } from './user/login-form';
import { MapViewer } from './components/map-viewer';
import { ContextProvider } from './middleware/context-provider';

function App() {
  return (
    <ContextProvider>
    <Router>
<Routes>
  <Route path="/building" element={<BuildingViewer/>}/>
  <Route path="/map" element={<MapViewer/>}/>
  <Route path="/login" element={<LoginForm/>}/>
  <Route path="/" element={<LoginForm/>}/>
</Routes>
    </Router>
    </ContextProvider>
  );
}

export default App;
