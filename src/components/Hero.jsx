function Hero() {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "100px 20px",
        background:
          "linear-gradient(135deg,#E63946 0%,#111827 100%)",
        color: "white",
      }}
    >
      <h1
        style={{
          fontSize: "52px",
          marginBottom: "20px",
        }}
      >
        Find Your Dream Car
      </h1>

      <p
        style={{
          fontSize: "22px",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        Kenya's Smart Car Marketplace.
        Buy, Sell and Discover Verified Cars
        from Trusted Dealers.
      </p>

      <button
        style={{
          marginTop: "40px",
          padding: "16px 35px",
          border: "none",
          borderRadius: "8px",
          background: "white",
          color: "#E63946",
          fontWeight: "bold",
          cursor: "pointer",
          fontSize: "18px",
        }}
      >
        Browse Cars
      </button>
    </section>
  );
}

export default Hero;
