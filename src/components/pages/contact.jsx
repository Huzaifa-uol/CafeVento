export default function Contact() {
  return (
    <div
      className="container-fluid d-flex flex-column flex-fill text-center py-5"
      style={{ backgroundColor: "#1c1c1e", color: "#f5f5f5", fontFamily: "system-ui, sans-serif" }}
    >
      {/* Header */}
      <div className="mb-5">
        <h1 className="display-3 fw-bold mb-3" style={{ color: "#ff6f61", textShadow: "2px 2px 5px rgba(0,0,0,0.5)" }}>
          Contact Us
        </h1>
        <p className="lead mb-3" style={{ fontSize: "1.25rem", color: "#d1d1d1" }}>
          Have questions or want to book a table? Reach out to us!
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-stretch gap-4 mb-5">
        <div
          className="p-4 rounded-4 shadow-lg"
          style={{ backgroundColor: "#2a2a2e", flex: 1, transition: "transform 0.3s", cursor: "pointer" }}
          onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
        >
          <h3 className="mb-2" style={{ color: "#64c8ff" }}>Email</h3>
          <p><a href="mailto:info@cafevento.com" style={{ color: "#fff", textDecoration: "none" }}>info@cafevento.com</a></p>
        </div>
        <div
          className="p-4 rounded-4 shadow-lg"
          style={{ backgroundColor: "#2a2a2e", flex: 1, transition: "transform 0.3s", cursor: "pointer" }}
          onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
        >
          <h3 className="mb-2" style={{ color: "#64c8ff" }}>Phone</h3>
          <p><a href="tel:+923001234567" style={{ color: "#fff", textDecoration: "none" }}>+92 300 1234567</a></p>
        </div>
      </div>

      {/* Google Map */}
      <div className="map-container mb-5" style={{ width: "100%", maxWidth: "900px", height: "450px", borderRadius: "16px", overflow: "hidden", boxShadow: "0 0 30px rgba(0,0,0,0.6)" }}>
        <iframe
          title="Cafe Vento Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.123456789!2d67.123456!3d24.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f123456789%3A0x123456789abcdef!2sCafe%20Vento!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* CTA Button */}
      <div>
        <button
          className="btn btn-lg rounded-4"
          style={{
            backgroundColor: "#ff6f61",
            color: "#fff",
            padding: "0.75rem 2rem",
            fontSize: "1.2rem",
            fontWeight: "600",
            transition: "all 0.3s",
            boxShadow: "0 5px 15px rgba(0,0,0,0.4)",
            border: "none",
            cursor: "pointer"
          }}
          onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
          onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
        >
          Plan Your Visit
        </button>
      </div>
    </div>
  );
}
