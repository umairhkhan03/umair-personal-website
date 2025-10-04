import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import WatchList from "./pages/WatchList";
import Life from "./pages/Life";
import Poetry from "./pages/Poetry";
import PoemDetail from "./pages/PoemDetail";
import ReadingList from "./pages/ReadingList";
import Blog from "./pages/Blog";
import Building from "./pages/Building";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/watch-list" element={<WatchList />} />
          <Route path="/life" element={<Life />} />
          <Route path="/poetry" element={<Poetry />} />
          <Route path="/poetry/:slug" element={<PoemDetail />} />
          <Route path="/reading-list" element={<ReadingList />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/building" element={<Building />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
