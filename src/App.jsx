import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AppHeader } from './cmps/AppHeader.jsx'
import { Connect } from './cmps/Connect.jsx'

import { HomePage } from './pages/HomePage.jsx'
import { ScrollToTop } from './cmps/ScrollToTop.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <AppHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/abnb" element={<AbnbDetails />} />
          <Route path="/appsus" element={<AppsusDetails />} /> */}
        </Routes>
        <Connect />
      </div>
    </Router>
  );
}

export default App;
