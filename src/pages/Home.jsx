import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import FeaturedCars from "../components/FeaturedCars";
import Brands from "../components/Brands";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <FeaturedCars />
      <Brands />
      <Footer />
    </>
  );
}

export default Home;
