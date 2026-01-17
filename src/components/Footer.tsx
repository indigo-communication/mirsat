import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mirsat-container py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold tracking-tight">mirsat</span>
              <span className="text-sm opacity-80">مرساة</span>
            </div>
            <p className="text-sm opacity-80 leading-relaxed max-w-xs">
              Building bridges between the European cultural scene and artistic practices from the SWANA region.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Home
              </Link>
              <Link to="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                About Us
              </Link>
              <Link to="/events" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Events
              </Link>
              <Link to="/contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/mirsat.asbl/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                <Instagram className="w-4 h-4" />
                <span>@mirsat.asbl</span>
              </a>
              <a
                href="mailto:contact@mirsat.org"
                className="flex items-center gap-3 text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                <span>contact@mirsat.org</span>
              </a>
              <div className="flex items-center gap-3 text-sm opacity-80">
                <MapPin className="w-4 h-4" />
                <span>Brussels, Belgium</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-60">
            <p>© {new Date().getFullYear()} Mirsat ASBL. All rights reserved.</p>
            <p className="arabic">جميع الحقوق محفوظة لمرساة</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
