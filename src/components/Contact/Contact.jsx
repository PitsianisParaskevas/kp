import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Επικοινωνήστε μαζί μας</h2>
        <p className="contact-subtitle">
          Είμαστε εδώ για να βοηθήσουμε την επιχείρησή σας να αναπτυχθεί.
          Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας σύντομα.
        </p>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you! Your message has been sent.");
          }}
        >
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Ονοματεπώνυμο"
              required
            />
            <input type="email" name="email" placeholder="Email" required />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Θέμα"
            className="full-width"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Το μήνυμά σας..."
            required
          />

          <button type="submit" className="contact-btn">
            Αποστολή Μηνύματος
          </button>
        </form>
      </div>
    </section>
  );
}
