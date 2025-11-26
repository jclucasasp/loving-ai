import {QueryClient, QueryClientProvider} from "react-query";
import {Toaster} from "@/components/ui/toaster.tsx";
import {BrowserRouter} from "react-router-dom";
import {createRoot} from "react-dom/client";
import App from "@/App.tsx";
import "@/index.css";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 2,
            retryDelay: 1000,
            refetchOnWindowFocus: false,
            // staleTime: 5 * 60 * 1000, // optional: 5 minutes
        },
    },
});

createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <App/>
            <Toaster/>
        </BrowserRouter>
    </QueryClientProvider>
);
