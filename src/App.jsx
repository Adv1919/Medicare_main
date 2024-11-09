// import React from "react";
// import "./App.css";
// import Header from "./components/Header";
// import Footer from "./Components/Footer";
// import Hero from "./components/Hero";
// import Features from "./components/Features";
// import "./App.css";

// const App = () => {
//   return (
//     <div className="App">
//       <Header />
//       <main>
//         <Hero />
//         <Features />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default App;
import Layout from "./Layout/Layout";
import "./Components/style/Header.css";
import "./App.css";

export default function App() {
  return (
    <>
      <Layout />
    </>
  );
}
