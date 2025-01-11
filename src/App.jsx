import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AppHeader } from './cmps/AppHeader.jsx';
import { Connect } from './cmps/Connect.jsx';

import { HomePage } from './pages/HomePage.jsx';
import { ScrollToTop } from './cmps/ScrollToTop.jsx';
import { About } from './pages/About.jsx';
import { Categories } from './pages/Categories.jsx';
import { Crystal } from './pages/Crystal.jsx';
import { Gallery } from './pages/Gallery.jsx';

import { Succulents } from './pages/categories/Succulents.jsx';
import { Herbs } from './pages/categories/Herbs.jsx';
import { Indoor } from './pages/categories/Indoor.jsx';
import { Pots } from './pages/categories/Pots.jsx';
import { Vining } from './pages/categories/Vining.jsx';
import { Trees } from './pages/categories/Trees.jsx';
import { Flowers } from './pages/categories/Flowers.jsx';
import { Watermark } from './cmps/Watermark.jsx';


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
          <Route path="/categories/succulents" element={<Succulents />} />
          <Route path="/categories/flowers" element={<Flowers />} />
          <Route path="/categories/herbs" element={<Herbs />} />
          <Route path="/categories/indoor" element={<Indoor />} />
          <Route path="/categories/pots" element={<Pots />} />
          <Route path="/categories/vining" element={<Vining />} />
          <Route path="/categories/trees" element={<Trees />} />
          <Route path="/crystal" element={<Crystal />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Connect />
        <Watermark />
      </div>
    </Router>
  );
}

export default App;
