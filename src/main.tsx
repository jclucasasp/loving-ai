import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "@/components/ui/toaster.tsx";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "@/App.tsx";
import "@/index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
  </QueryClientProvider>
);
