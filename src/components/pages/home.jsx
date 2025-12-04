export default function Home() {
  return (
    <div
      className="container-fluid d-flex flex-column flex-fill text-center py-5"
      style={{ backgroundColor: "#1a1a1a", color: "#f5f5f5" }}
    >
      {/* Hero Section */}
      <div className="d-flex flex-column justify-content-center align-items-center mb-5">
        <h1 className="display-3 fw-bold mb-3">Welcome to Cafe Vento</h1>
        <p className="lead mb-3">Your cozy place for the best coffee & pastries.</p>
        <button className="btn btn-outline-light btn-lg">Explore Menu</button>
      </div>

      {/* Highlights Section */}
      <div className="row text-center mb-5">
        <div className="col-md-4 mb-4">
          <h3>Freshly Brewed Coffee</h3>
          <p>Enjoy aromatic coffee made from the finest beans, brewed to perfection.</p>
        </div>
        <div className="col-md-4 mb-4">
          <h3>Delicious Pastries</h3>
          <p>Indulge in our freshly baked pastries and desserts made daily.</p>
        </div>
        <div className="col-md-4 mb-4">
          <h3>Cozy Ambience</h3>
          <p>Relax in our warm and inviting environment, perfect for work or leisure.</p>
        </div>
      </div>

      {/* Popular Items Section */}
      <div className="mb-5">
        <h2 className="mb-4">Popular Items</h2>
        <div className="row justify-content-center">
          <div className="col-sm-6 col-md-3 mb-3">
            <div className="card bg-dark text-light h-100 p-3">
              <h5 className="card-title">Cappuccino</h5>
              <p className="card-text">Rich, creamy, and smooth.</p>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 mb-3">
            <div className="card bg-dark text-light h-100 p-3">
              <h5 className="card-title">Butter Croissant</h5>
              <p className="card-text">Flaky, buttery perfection.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="mb-5">
        <h2>Visit Us Today!</h2>
        <p className="mb-3">Book a table or order online and enjoy our cozy vibes.</p>
        <button className="btn btn-outline-light btn-lg">Contact Us</button>
      </div>
    </div>
  );
}
