import { createRoot } from "react-dom/client";
import { Home } from "./pages/home";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

const container = document.getElementById("app");
if (container) {
  const root = createRoot(container);
  root.render(
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}
