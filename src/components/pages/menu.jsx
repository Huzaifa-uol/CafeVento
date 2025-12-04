export default function Menu() {
  return (
    <div
      className="container-fluid d-flex flex-column flex-fill text-center py-5"
      style={{ backgroundColor: "#121212", color: "#f5f5f5" }}
    >
      {/* Hero Section */}
      <div className="d-flex flex-column justify-content-center align-items-center mb-5">
        <h1 className="display-3 fw-bold mb-3">Our Menu</h1>
        <p className="lead mb-3">Delicious coffees, teas, and pastries carefully crafted to delight your taste buds.</p>
        <p style={{ maxWidth: "600px" }}>
          Explore our wide range of beverages and baked goods, perfect for cozy mornings or relaxing afternoons.
        </p>
      </div>

      {/* Menu Sections */}
      <div className="row justify-content-center text-start">
        {/* Coffees */}
        <div className="col-sm-6 col-md-4 mb-4">
          <div className="card bg-dark text-light h-100 p-4 shadow-sm">
            <h4 className="card-title border-bottom pb-2 mb-3">☕ Coffees</h4>
            <ul className="list-unstyled">
              <li><strong>Espresso:</strong> Strong, rich, and bold.</li>
              <li><strong>Cappuccino:</strong> Smooth, creamy, with frothy milk.</li>
              <li><strong>Latte:</strong> Milky, gentle, perfect for mornings.</li>
              <li><strong>Americano:</strong> Classic, black coffee for purists.</li>
            </ul>
          </div>
        </div>

        {/* Teas */}
        <div className="col-sm-6 col-md-4 mb-4">
          <div className="card bg-dark text-light h-100 p-4 shadow-sm">
            <h4 className="card-title border-bottom pb-2 mb-3">🍵 Teas</h4>
            <ul className="list-unstyled">
              <li><strong>Green Tea:</strong> Refreshing and healthy.</li>
              <li><strong>Chai:</strong> Spicy and aromatic.</li>
              <li><strong>Herbal Tea:</strong> Relaxing blends for calm evenings.</li>
              <li><strong>Earl Grey:</strong> Classic black tea with bergamot.</li>
            </ul>
          </div>
        </div>

        {/* Pastries */}
        <div className="col-sm-6 col-md-4 mb-4">
          <div className="card bg-dark text-light h-100 p-4 shadow-sm">
            <h4 className="card-title border-bottom pb-2 mb-3">🥐 Pastries & Cakes</h4>
            <ul className="list-unstyled">
              <li><strong>Chocolate Cake:</strong> Rich, moist, and indulgent.</li>
              <li><strong>Croissant:</strong> Flaky, buttery, fresh daily.</li>
              <li><strong>Blueberry Muffin:</strong> Sweet and fruity.</li>
              <li><strong>Cheesecake:</strong> Creamy, smooth, and classic.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-5">
        <button className="btn btn-outline-light btn-lg">Order Now</button>
      </div>
    </div>
  );
}
