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
          {/* <div className="flex flex-col min-h-screen"> */}
            <header></header>

            {/* Add a wrapper for the main content */}
            <main className="flex-grow w-full flex flex-col justify-center items-center p-4">
              <Link to="/#">
                <img
                  src={MyImage}
                  className="w-16 h-auto"
                  alt="Adopt Me Logo"
                />
              </Link>

              {/* The title */}
              <h1 className="text-4xl font-bold my-6">
                Helping you find your forever friend.
              </h1>

              {/* The Routes */}
              <Routes>
                <Route path="/details/:id" element={<Details />} />
                <Route path="/" element={<SearchParams />} />
              </Routes>
            </main>

            <Footer />
          {/* </div> */}
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
