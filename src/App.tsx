import { Navigation } from "./components/Navigation";
import { CricketBackground } from "./components/CricketBackground";
import { HeroSection } from "./components/HeroSection";
import { TournamentOverview } from "./components/TournamentOverview";
import { TeamRegistration } from "./components/TeamRegistration";
import { SponsorsSection } from "./components/SponsorsSection";
import { MediaPartners } from "./components/MediaPartners";
import { PhotoGallery } from "./components/PhotoGallery";
import { VideoTeaser } from "./components/VideoTeaser";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  // Hero background
  const heroBackground = "https://images.unsplash.com/photo-1623051783741-b9bab2ef3933?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwc3RhZGl1bSUyMGZsb29kbGlnaHRzfGVufDF8fHx8MTc2MDEwOTAwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  // Gallery images
  const galleryImages = [
    "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwcGxheWVycyUyMGFjdGlvbnxlbnwxfHx8fDE3NjAxMDkwMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1624825602528-2ac658281cd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwYmF0JTIwYmFsbHxlbnwxfHx8fDE3NjAwODY5ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1759733841123-b8e1d75ee45c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwbWF0Y2glMjBmaWVsZHxlbnwxfHx8fDE3NjAxMDkwMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1624897174291-1bd715e371d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwdGVhbSUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc2MDAxMDg3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1759210720510-59dfa8ff9f85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwZ3JvdW5kJTIwYWVyaWFsfGVufDF8fHx8MTc2MDEwOTAwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1624193634221-33b652971323?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwd2lja2V0JTIwa2VlcGVyfGVufDF8fHx8MTc2MDEwOTAwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1709134800935-d00e89d5b8e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwYm93bGVyJTIwYWN0aW9ufGVufDF8fHx8MTc2MDEwOTAwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1709134800864-15d9d04bc1f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwYmF0dGluZyUyMHNob3R8ZW58MXx8fHwxNzYwMTA5MDA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1623051783741-b9bab2ef3933?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwc3RhZGl1bSUyMGZsb29kbGlnaHRzfGVufDF8fHx8MTc2MDEwOTAwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  ];

  // Video thumbnail
  const videoThumbnail = "https://images.unsplash.com/photo-1759733841123-b8e1d75ee45c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwbWF0Y2glMjBmaWVsZHxlbnwxfHx8fDE3NjAxMDkwMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  return (
    <div className="size-full overflow-x-hidden relative">
      <CricketBackground />
      
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');
        body {
          font-family: 'Inter', sans-serif;
          background: linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%);
        }
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Poppins', sans-serif;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        ::-webkit-scrollbar-thumb {
          background: #00833E;
          border-radius: 5px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #006b33;
        }
      `}</style>

      <div className="relative z-10">
        <Navigation />
        <HeroSection backgroundImage={heroBackground} />
        <TournamentOverview />
        <TeamRegistration />
        <SponsorsSection />
        <MediaPartners />
        <PhotoGallery images={galleryImages} />
        <VideoTeaser thumbnailImage={videoThumbnail} />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
