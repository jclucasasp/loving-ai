import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "@/components/ui/toaster.tsx";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "@/App.tsx";
import "@/index.css";
import {setQueryClientForAuth} from "@/auth/authQuery.ts";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 2,
            retryDelay: 2000,
            refetchOnWindowFocus: false,
        }
    }
});

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
  </QueryClientProvider>
);

setQueryClientForAuth(queryClient);
