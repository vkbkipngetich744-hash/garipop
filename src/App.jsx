function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <header className="bg-red-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">🚗 Garipop</h1>

          <nav className="space-x-6">
            <a href="#" className="hover:text-gray-200">
              Home
            </a>
            <a href="#" className="hover:text-gray-200">
              Browse Cars
            </a>
            <a href="#" className="hover:text-gray-200">
              Sell Car
            </a>
            <a href="#" className="hover:text-gray-200">
              Dealers
            </a>
            <a href="#" className="hover:text-gray-200">
              Login
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-20 px-6">
        <h2 className="text-5xl font-bold text-gray-900">
          Kenya's Smart Car Marketplace
        </h2>

        <p className="text-xl mt-6 text-gray-600">
          Buy, Sell and Discover Verified Cars Across Kenya.
        </p>

        <button className="mt-8 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg">
          Browse Cars
        </button>
      </section>
    </div>
  );
}

export default App;
