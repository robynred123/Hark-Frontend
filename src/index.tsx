import { createRoot } from "react-dom/client";
import { Home } from "./pages/home";
import { QueryClientProvider, QueryClient } from "react-query";
import { Layout } from "./pages/layout";

const queryClient = new QueryClient();

const container = document.getElementById("app");
if (container) {
  const root = createRoot(container);
  root.render(
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Home />
      </Layout>
    </QueryClientProvider>
  );
}
