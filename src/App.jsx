import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GlobalCodeBackground from "./components/GlobalCodeBackground";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

import "./App.css";

// =====================================
// PAGE TRANSITION
// =====================================

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
        filter: "blur(5px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      exit={{
        opacity: 0,
        y: -20,
        filter: "blur(5px)",
      }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

// =====================================
// ALL WEBSITE ROUTES
// =====================================

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes
          location={location}
          key={location.pathname}
        >

          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />

          {/* ABOUT PAGE */}
          <Route
            path="/about"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />

          {/* SERVICES PAGE */}
          <Route
            path="/services"
            element={
              <PageTransition>
                <Services />
              </PageTransition>
            }
          />

          {/* PROJECTS PAGE */}
          <Route
            path="/projects"
            element={
              <PageTransition>
                <Projects />
              </PageTransition>
            }
          />

          {/* SKILLS PAGE */}
          <Route
            path="/skills"
            element={
              <PageTransition>
                <Skills />
              </PageTransition>
            }
          />

          {/* CONTACT PAGE */}
          <Route
            path="/contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />

          {/* 404 PAGE */}
          <Route
            path="*"
            element={
              <PageTransition>
                <main className="inner-page">

                  <div className="page-heading">

                    <span>
                      404 / PAGE NOT FOUND
                    </span>

                    <h1>
                      LOST IN
                      <br />
                      <em>SPACE.</em>
                    </h1>

                    <p>
                      The page you're looking for doesn't exist.
                    </p>

                  </div>

                </main>
              </PageTransition>
            }
          />

        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
}

// =====================================
// MAIN APP
// =====================================

export default function App() {
  return (
    <BrowserRouter>

      <GlobalCodeBackground />

      <AnimatedRoutes />

    </BrowserRouter>
  );
}