import ContactForm from "../components/ContactForm";

export default function HomePage() {
  return (
    <div>
      <section className="h-[80vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')" }}>
        <div className="bg-black bg-opacity-40 p-6 rounded-md">
          <h1 className="text-white text-4xl font-bold mb-4">Your Journey Starts Here</h1>
          <p className="text-white mb-6">Explore the world with IRA Tours & Travels</p>
          <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
            Plan Your Trip
          </a>
        </div>
      </section>

      <section id="tours" className="py-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">Popular Tours</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          <div className="bg-white shadow rounded-lg p-4">
            <img src="https://images.unsplash.com/photo-1549887534-3db1bd59dcca" alt="Bali" className="rounded-md mb-3" />
            <h3 className="font-bold text-lg">Bali Getaway</h3>
            <p className="text-gray-600">5 Nights | ₹45,000</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <img src="https://images.unsplash.com/photo-1534447677768-be436bb09401" alt="Paris" className="rounded-md mb-3" />
            <h3 className="font-bold text-lg">Paris Escape</h3>
            <p className="text-gray-600">6 Nights | ₹80,000</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" alt="Maldives" className="rounded-md mb-3" />
            <h3 className="font-bold text-lg">Maldives Honeymoon</h3>
            <p className="text-gray-600">4 Nights | ₹60,000</p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-6">Send Inquiry</h2>
        <ContactForm />
      </section>
    </div>
  );
}
