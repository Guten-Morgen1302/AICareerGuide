import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Layout from "@/components/Layout";
import Home from "@/pages/home";
import Recommend from "@/pages/recommend";
import About from "@/pages/about";
import HowItWorks from "@/pages/howitworks";
import Contact from "@/pages/contact";
import FAQ from "@/pages/faq";
import Profile from "@/pages/profile";
import Footer from "@/components/Footer"; 
import "./styles/cyberpunk.css";

import React from 'react';


const Router = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/recommend" component={Recommend} />
        <Route path="/about" component={About} />
        <Route path="/howitworks" component={HowItWorks} />
        <Route path="/contact" component={Contact} />
        <Route path="/faq" component={FAQ} />
        <Route path="/profile" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow">
          <Router />
          <Toaster />
        </div>
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

export default App;