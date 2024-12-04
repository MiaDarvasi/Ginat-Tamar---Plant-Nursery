import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AppHeader } from './cmps/AppHeader.jsx'
import { Connect } from './cmps/Connect.jsx'

import { HomePage } from './pages/HomePage.jsx'
import { ScrollToTop } from './cmps/ScrollToTop.jsx';
import { About } from './pages/About.jsx';
import { Categories} from './pages/Categories.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <AppHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
        <Connect />
      </div>
    </Router>
  );
}

export default App;
