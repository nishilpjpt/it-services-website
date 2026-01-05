import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import FAQ from "./pages/FAQ";
import CaseStudies from "./pages/CaseStudies";
import CustomWebsites from "./pages/CustomWebsites";
import WebScraping from "./pages/WebScraping";
import CloudServices from "./pages/CloudServices";
import ApiDevelopment from "./pages/ApiDevelopment";
import SecuritySolutions from "./pages/SecuritySolutions";
import MobileDevelopment from "./pages/MobileDevelopment";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about-us"} component={AboutUs} />
      <Route path={"/contact-us"} component={ContactUs} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/careers"} component={Careers} />
      <Route path={"/faq"} component={FAQ} />
      <Route path={"/case-studies"} component={CaseStudies} />
      <Route path={"/custom-websites"} component={CustomWebsites} />
      <Route path={"/web-scraping"} component={WebScraping} />
      <Route path={"/cloud-services"} component={CloudServices} />
      <Route path={"/api-development"} component={ApiDevelopment} />
      <Route path={"/security-solutions"} component={SecuritySolutions} />
      <Route path={"/mobile-development"} component={MobileDevelopment} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
