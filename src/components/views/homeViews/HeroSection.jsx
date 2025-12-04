const HeroSection = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center text-white"
      style={{
        height: "70vh",
        backgroundImage: "url('/coffee.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="fw-bold bg-dark bg-opacity-50 p-3 rounded">
        Welcome to Cafe Vento
      </h1>
    </div>
  );
};

export default HeroSection;
