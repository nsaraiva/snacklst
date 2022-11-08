import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Snacklst from './app/pages/snacklst/snacklst';  
import Shared from './app/pages/shared';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Shared />}>
        <Route index element={<Snacklst />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
