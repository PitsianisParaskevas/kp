import "./Services.css";
import {
  PieChart,
  FileText,
  Users,
  Banknote,
  CalendarDays,
  CheckCircle,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <PieChart />,
      title: "Φορολογικές Υπηρεσίες",
      description:
        "Πλήρης διαχείριση φορολογικών υποχρεώσεων, φορολογικές δηλώσεις και βελτιστοποίηση φορολογικής θέσης για επιχειρήσεις και ιδιώτες.",
    },
    {
      icon: <FileText />,
      title: "Λογιστική Διαχείριση",
      description:
        "Τήρηση βιβλίων, κατάρτιση οικονομικών καταστάσεων και πλήρης λογιστική υποστήριξη με σύγχρονα εργαλεία και τεχνολογία.",
    },
    {
      icon: <Users />,
      title: "Μισθοδοσία",
      description:
        "Ολοκληρωμένη διαχείριση μισθοδοσίας, ασφαλιστικών εισφορών και εργατικής νομοθεσίας με ακρίβεια και έγκαιρη καταβολή.",
    },
    {
      icon: <Banknote />,
      title: "Οικονομικός Σχεδιασμός",
      description:
        "Στρατηγικός σχεδιασμός και συμβουλευτική για την ανάπτυξη της επιχείρησής σας με βάση την οικονομική ανάλυση και προοπτικές.",
    },
    {
      icon: <CalendarDays />,
      title: "Έλεγχοι & Αναφορές",
      description:
        "Διενέργεια εσωτερικών ελέγχων, κατάρτιση αναφορών και διασφάλιση συμμόρφωσης με τις ισχύουσες νομικές διατάξεις.",
    },
    {
      icon: <CheckCircle />,
      title: "Σύσταση Εταιρειών",
      description:
        "Πλήρης υποστήριξη στη σύσταση νέων επιχειρήσεων, νομική συμβουλευτική και καθοδήγηση σε όλα τα στάδια εκκίνησης.",
    },
  ];

  return (
    <section
      id="services"
      className="services"
      aria-labelledby="services-title"
    >
      <div className="services__container">
        <h2 className="section-title" id="services-title">
          What we do
        </h2>
        <p className="section-subtitle">
          Η K&amp;P προσφέρει ένα πλήρες φάσμα υπηρεσιών για να καλύψει κάθε σας
          ανάγκη.
        </p>

        <div className="services-grid" role="list">
          {services.map((s, i) => (
            <article key={i} className="service-card" role="listitem">
              <div className="service-icon-wrapper" aria-hidden="true">
                {s.icon}
              </div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
