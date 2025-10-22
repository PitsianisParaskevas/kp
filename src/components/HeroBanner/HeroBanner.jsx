import heroIllustration from "../../assets/illustrations/hero-banner.jpg";
import "./HeroBanner.css";

export default function HeroBanner({ showAttribution = false }) {
  return (
    <section
      className="hero"
      id="hero"
      style={{ "--hero-image": `url(${heroIllustration})` }}
    >
      <div className="container hero__container">
        <div className="hero__content">
          <h1>Digital Marketing + Software Development</h1>

          <p className="hero__subtitle">
            Από το κλικ στο conversion — σωστό tracking, γρήγορη υλοποίηση,
            μετρήσιμα αποτελέσματα.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="hero__cta">
              Επικοινωνήστε μαζί μας
            </a>
          </div>
        </div>
      </div>

      {showAttribution && (
        <span className="hero__credit">Designed by Freepik</span>
      )}
    </section>
  );
}
