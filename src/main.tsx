// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter } from "react-router-dom";
// const queryClient = new QueryClient();
// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <BrowserRouter>
//      <QueryClientProvider client={queryClient}>
//         <App />
//     </QueryClientProvider>
//     </BrowserRouter>
//   </StrictMode>,
// )

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store"; 

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <App />
        </Provider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
);

