import { useState } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/Header";
import {
  Contact,
  Footer,
  Hero,
  Introduction,
  Process,
  Quote,
  Services,
  Work,
} from "./components/Sections";
import "./styles.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notice, setNotice] = useState("");

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleInquirySuccess = () => {
    setNotice("Opening WhatsApp — we’ll reply within one business day.");
    window.setTimeout(() => setNotice(""), 5000);
  };

  return (
    <main>
      <Header
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((value) => !value)}
        onProjectStart={scrollToContact}
      />
      <Hero onProjectStart={scrollToContact} />
      <Introduction />
      <Work />
      <Services />
      <Process />
      <Quote />
      <Contact onSuccess={handleInquirySuccess} />
      {notice && (
        <div className="toast" role="status">
          {notice}
        </div>
      )}
      <Footer />
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
