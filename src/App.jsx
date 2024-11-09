import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./Components/Footer";
import Hero from "./components/Hero";
import Features from "./components/Features";
import { I18nextProvider } from 'react-i18next';
import i18n from "./i18next";
import "./App.css";

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="App">
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
    </I18nextProvider>
    
  );
};

export default App;
