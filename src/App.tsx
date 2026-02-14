import "./App.css";
import FloatingHearts from "./components/FloatingHearts";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import LoveCountdown from "./components/LoveCountdown";
import LoveLetter from "./components/LoveLetter";
import MeaningSection from "./components/MeaningSection";
import PhotoGallery from "./components/PhotoGallery";

function App() {
  return (
    <div className="relative min-h-screen bg-background">
      <FloatingHearts />
      <main className="relative z-10">
        <HeroSection />
        <MeaningSection />
        <PhotoGallery />
        <LoveLetter />
        <LoveCountdown />
        <Footer />
      </main>
    </div>
  );
}

export default App;
