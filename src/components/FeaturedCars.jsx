const cars = [
  {
    name: "Toyota Prado",
    price: "KSh 4,200,000",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
  },
  {
    name: "Mazda CX-5",
    price: "KSh 2,350,000",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800",
  },
  {
    name: "Subaru Forester",
    price: "KSh 2,100,000",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800",
  },
];

function FeaturedCars() {
  return (
    <section style={{ padding: "70px 20px" }}>
      <h2
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Featured Cars
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "25px",
        }}
      >
        {cars.map((car) => (
          <div
            key={car.name}
            style={{
              background: "#fff",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 8px 20px rgba(0,0,0,.1)",
            }}
          >
            <img
              src={car.image}
              alt={car.name}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "20px" }}>
              <h3>{car.name}</h3>
              <p
                style={{
                  color: "#E63946",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                {car.price}
              </p>

              <button
                style={{
                  marginTop: "15px",
                  width: "100%",
                  background: "#E63946",
                  color: "white",
                  border: "none",
                  padding: "12px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedCars;
