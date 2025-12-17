import Mission from "../views/aboutViews/Mission";

export default function About() {
  return (
    <div
      className="container-fluid d-flex flex-column flex-fill text-center py-5"
      style={{ backgroundColor: "#121212", color: "#f5f5f5" }}
    >
      {/* Hero Section */}
      <div className="d-flex flex-column justify-content-center align-items-center mb-5">
        <h1 className="display-3 fw-bold mb-3">About Cafe Vento</h1>
        <p className="lead mb-3" style={{ maxWidth: "700px" }}>
          Cafe Vento is a cozy cafe dedicated to providing the best coffee experience in town. 
          We focus on fresh ingredients, expertly crafted beverages, and a warm, inviting atmosphere.
        </p>
      </div>

      {/* Our Story Section */}
      <div className="row justify-content-center text-start mb-5">
        <div className="col-md-8">
          <div className="card bg-dark text-light p-4 shadow-sm mb-4">
            <h4 className="card-title border-bottom pb-2 mb-3">☕ Our Story</h4>
            <p>
              Founded with the love of coffee and community, Cafe Vento has become a place where 
              people come to relax, catch up with friends, or simply enjoy a perfectly brewed cup.
            </p>
          </div>

         {/* mission view */}
         <Mission/>

          <div className="card bg-dark text-light p-4 shadow-sm mb-4">
            <h4 className="card-title border-bottom pb-2 mb-3">🌿 Sustainability</h4>
            <p>
              We care about the planet! Cafe Vento uses eco-friendly packaging and sources ingredients responsibly 
              to minimize our footprint while maximizing flavor.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-4">
        <button className="btn btn-outline-light btn-lg">Visit Us Today</button>
      </div>
    </div>
  );
}
