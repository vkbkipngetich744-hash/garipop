function SearchBar() {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "40px 20px",
        marginTop: "-40px",
        maxWidth: "1100px",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: "12px",
        boxShadow: "0 10px 30px rgba(0,0,0,.1)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "25px" }}>
        Search Your Next Car
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
          gap: "15px",
        }}
      >
        <select>
          <option>Brand</option>
          <option>Toyota</option>
          <option>Mazda</option>
          <option>Subaru</option>
          <option>Nissan</option>
        </select>

        <select>
          <option>Model</option>
        </select>

        <select>
          <option>County</option>
          <option>Nairobi</option>
          <option>Mombasa</option>
          <option>Nakuru</option>
          <option>Eldoret</option>
        </select>

        <button
          style={{
            background: "#E63946",
            color: "#fff",
            border: "none",
            padding: "12px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          🔍 Search
        </button>
      </div>
    </section>
  );
}

export default SearchBar;
