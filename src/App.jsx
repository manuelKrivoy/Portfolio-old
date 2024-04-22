import { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import { RxPinTop } from "react-icons/rx";

export default function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar el botón de "Subir" cuando el usuario haya desplazado más de 500px desde la parte superior
      setShowScrollButton(window.pageYOffset > 500);
    };

    // Agregar el event listener para el desplazamiento
    window.addEventListener("scroll", handleScroll);

    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Work />
      <Contact />
      <Footer />
      {/* Mostrar el botón de "Subir" solo si showScrollButton es true */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full"
        >
          <RxPinTop />
        </button>
      )}
    </>
  );
}
