const brands = [
  "Toyota",
  "Mazda",
  "Subaru",
  "Nissan",
  "Mercedes-Benz",
  "BMW",
  "Honda",
  "Isuzu"
];

function Brands() {
  return (
    <section
      style={{
        padding: "70px 20px",
        background: "#f8f9fa",
        textAlign: "center"
      }}
    >
      <h2>Popular Brands</h2>

      <div
        style={{
          marginTop: "30px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px"
        }}
      >
        {brands.map((brand) => (
          <div
            key={brand}
            style={{
              background: "#fff",
              padding: "18px 30px",
              borderRadius: "10px",
              boxShadow: "0 5px 12px rgba(0,0,0,.08)",
              fontWeight: "bold"
            }}
          >
            {brand}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Brands;
