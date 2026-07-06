function Navbar() {
  return (
    <header
      style={{
        background: "#E63946",
        color: "white",
        padding: "18px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <h2 style={{ margin: 0 }}>🚗 Garipop</h2>

      <nav style={{ display: "flex", gap: "20px" }}>
        <a href="#" style={{ color: "white" }}>Home</a>
        <a href="#" style={{ color: "white" }}>Cars</a>
        <a href="#" style={{ color: "white" }}>Dealers</a>
        <a href="#" style={{ color: "white" }}>Sell</a>
        <a href="#" style={{ color: "white" }}>Login</a>
      </nav>
    </header>
  );
}

export default Navbar;
