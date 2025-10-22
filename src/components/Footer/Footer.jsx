import "./Footer.css";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>K&amp;P</h3>
          <p>
            Digital Marketing + Software Development <br />
            Από το website έως τα Google Ads — end to end λύσεις.
          </p>

          <div className="footer-contact">
            <p>
              <Mail size={18} /> info@kp-agency.gr
            </p>            
          </div>
        </div>

        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#services">Services</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <a href="#" aria-label="Facebook">
            <Facebook />
          </a>
          <a href="#" aria-label="Instagram">
            <Instagram />
          </a>
          <a href="#" aria-label="LinkedIn">
            <Linkedin />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} K&amp;P. All rights reserved.</p>
      </div>
    </footer>
  );
}
