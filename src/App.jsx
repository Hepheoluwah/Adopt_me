import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./Footer";
import AdoptedPetContext from "./AdoptedPet";
import SearchParams from "./SearchParams";
import Details from "./Details";
import MyImage from "../images/ADOPT ME LOGO 2.png";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPet = useState(null);

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AdoptedPetContext.Provider value={adoptedPet}>
          <div className="app-container">
            <header className="app-header">
              <Link to="/" className="logo-link">
                <img
                  src={MyImage}
                  className="logo"
                  alt="Adopt Me Logo"
                />
              </Link>
              <h1 className="app-title">
                Helping you find your forever friend.
              </h1>
            </header>

            <main className="app-main">
              <Routes>
                <Route path="/details/:id" element={<Details />} />
                <Route path="/" element={<SearchParams />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
