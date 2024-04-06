import React from 'react';
import './App.css'; // Importing the CSS file for styling
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Importing React Router
import NextPage from './Pages/NextPage'; // Importing the NextPage component
import YoghLogo from './Assets/images/YoghLogo.png'; // Importing the YoghLogo image
import Footer from './Components/Footer'; 
import NewPagetry from './Pages/newPagetry';

// Main page component
function MainPage() {
  return (
    <div>
      <header className="header">
        {/* Logo at the top left */}
        <img src={YoghLogo} alt="Yogh Logo" className="logo" />
        <h1>Welcome to Yogh Group</h1>
      </header>
      <main className="main">
        <section className="section">
          <h2>Algae Growth Automation (AGS)</h2>
          <p> Experience the future of algae cultivation with AGS. Our revolutionary approach transforms traditional practices, 
            ushering in sustainable production. Through precise data analysis and cutting-edge software, AGS redefines cultivation efficiency.
            Explore our project, uncovering essential software requirements driving innovation. With a focus on accurate data and seamless 
            UI integration, we optimize algae cultivation like never before.
          </p>
        </section>
      </main>
      <main className='main'>
        <section className="section-marquee">
          <marquee>Currently growing spirulina algae</marquee>
        </section>
      </main>
      <main className="main">
        <Link to="/next-page" className="section1 spirulina">
          <h2>Spirulina</h2>
        </Link>
        <Link to="/new-page" className="section1 chlorella">
          <h2>Chlorella</h2>
        </Link>

        <Link to="/next-page" className="section1 diatoms">
          <h2>Diatoms</h2>
        </Link>

        <Link to="/next-page" className="section1 kelp">
          <h2>Kelp</h2>
        </Link>
      </main>
      <Footer/>
    </div>
  );
}

// App component
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/next-page" element={<NextPage />} />
        <Route path="/new-page" element={<NewPagetry />} /> 
      </Routes>
    </Router>
  );
}

export default App;
