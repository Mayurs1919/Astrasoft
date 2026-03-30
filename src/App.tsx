import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import SynapseAIDemo from "./pages/SynapseAIDemo";
import HavamaanAIDemo from "./pages/HavamaanAIDemo";
import SamvaadAIDemo from "./pages/SamvaadAIDemo";
import DataInsightDashboardDemo from "./pages/DataInsightDashboardDemo";
import IntelliCoderDemo from "./pages/IntelliCoderDemo";
import VoxaDemo from "./pages/VoxaDemo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/SynapseAIDemo" element={<SynapseAIDemo />} />
          <Route path="/HavamaanAIDemo" element={<HavamaanAIDemo />} />
          <Route path="/SamvaadAIDemo" element={<SamvaadAIDemo />} />
          <Route path="/DataInsightDashboardDemo" element={<DataInsightDashboardDemo />} />
          <Route path="/IntelliCoderDemo" element={<IntelliCoderDemo />} />
          <Route path="/VoxaDemo" element={<VoxaDemo />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
