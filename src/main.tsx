import { QueryClient, QueryClientProvider } from "react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster.tsx";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "@/App.tsx";
import "@/index.css";

const queryClient = new QueryClient();
const helmetContext = {};

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <HelmetProvider context={helmetContext}>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </HelmetProvider>
  </QueryClientProvider>
);
