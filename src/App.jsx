// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useEffect } from 'react';

// import { Accessibility } from 'accessibility';

// import { AppHeader } from './cmps/AppHeader.jsx';
// import { Connect } from './cmps/Connect.jsx';

// import { HomePage } from './pages/HomePage.jsx';
// import { ScrollToTop } from './cmps/ScrollToTop.jsx';
// import { About } from './pages/About.jsx';
// import { Categories } from './pages/Categories.jsx';
// import { Crystal } from './pages/Crystal.jsx';
// import { Gallery } from './pages/Gallery.jsx';

// import { Succulents } from './pages/categories/Succulents.jsx';
// import { Herbs } from './pages/categories/Herbs.jsx';
// import { Indoor } from './pages/categories/Indoor.jsx';
// import { Pots } from './pages/categories/Pots.jsx';
// import { Vining } from './pages/categories/Vining.jsx';
// import { Trees } from './pages/categories/Trees.jsx';
// import { Flowers } from './pages/categories/Flowers.jsx';

// function App() {

//   useEffect(() => {
//     const labels = {
//       resetTitle: 'איפוס',
//       closeTitle: 'סגור',
//       menuTitle: ' תפריט נגישות',
//       increaseText: 'הגדל גודל גופן',
//       decreaseText: 'הקטן גודל גופן',
//       increaseTextSpacing: 'הגדל ריווח טקסט',
//       decreaseTextSpacing: 'הקטן ריווח טקסט',
//       increaseLineHeight: 'הגדל גובה שורה',
//       decreaseLineHeight: 'הקטן גובה שורה',
//       invertColors: 'הפוך צבעים',
//       grayHues: 'גוונים אפורים',
//       underlineLinks: 'קו תחתון לקישורים',
//       bigCursor: 'סמן גדול',
//       readingGuide: 'מדריך קריאה',
//       textToSpeech: 'טקסט לדיבור',
//       disableAnimations: 'השבתת אנימציות',
//       hotkeyPrefix: 'קיצור דרך:'
//     };

//     const options = {
//       labels: labels,
//     };

//     const accessibility = new Accessibility(options);

//     const closeToolbar = (event) => {
//       console.log("Close button clicked");
//       const toolbar = document.querySelector('._access-menu');
//       if (!toolbar.classList.contains('close')) {
//           toolbar.classList.add('close');
//       }
//   };

//   // Attempt to attach the close button event listener immediately
//   const closeButton = document.querySelector('._menu-close-btn');
//   if (closeButton) {
//       console.log('Close button found');
//       closeButton.addEventListener('click', closeToolbar);
//   } else {
//       console.log('Close button not found');
//   }


//     document.addEventListener('click', closeToolbar);

//     document.body.setAttribute('dir', 'rtl');
//     document.body.style.direction = 'rtl';
//     return () => {
//       // document.removeEventListener('click', closeToolbar);
//       if (closeButton) {
//         closeButton.removeEventListener('click', closeToolbar); // Clean up the event listener
//     }
//     };
//   }, []);

//   return (
//     <Router>
//       <ScrollToTop />
//       <div className="App">
//         <AppHeader />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/categories" element={<Categories />} />
//           <Route path="/categories/succulents" element={<Succulents />} />
//           <Route path="/categories/flowers" element={<Flowers />} />
//           <Route path="/categories/herbs" element={<Herbs />} />
//           <Route path="/categories/indoor" element={<Indoor />} />
//           <Route path="/categories/pots" element={<Pots />} />
//           <Route path="/categories/vining" element={<Vining />} />
//           <Route path="/categories/trees" element={<Trees />} />
//           <Route path="/crystal" element={<Crystal />} />
//           <Route path="/gallery" element={<Gallery />} />
//         </Routes>
//         <Connect />
//       </div>
//     </Router>
//   );
// }

// export default App;



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import { Accessibility } from 'accessibility';

import { toggleMenu } from './main.js';

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

  useEffect(() => {
    const labels = {
      menuTitle: ' תפריט נגישות',
      increaseText: 'הגדל גודל גופן',
      decreaseText: 'הקטן גודל גופן',
      increaseTextSpacing: 'הגדל ריווח טקסט',
      decreaseTextSpacing: 'הקטן ריווח טקסט',
      increaseLineHeight: 'הגדל גובה שורה',
      decreaseLineHeight: 'הקטן גובה שורה',
      invertColors: 'הפוך צבעים',
      grayHues: 'גוונים אפורים',
      underlineLinks: 'קו תחתון לקישורים',
      bigCursor: 'סמן גדול',
      readingGuide: 'מדריך קריאה',
      textToSpeech: 'טקסט לדיבור',
      disableAnimations: 'השבתת אנימציות',
      hotkeyPrefix: 'קיצור דרך:'
    };

    const options = {
      labels: labels,
    };

    const accessibility = new Accessibility(options);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <AppHeader />
        {/* <div onClick={() => toggleMenu()}>CLOSE MENU HOPEFULLY</div> */}
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
