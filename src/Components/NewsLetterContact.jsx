import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const NewsletterContact = () => {
  return (
    <section className="max-w-[1380px] mx-auto px-4 md:px-0 py-10 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Newsletter */}
        <div className="bg-indigo-500 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Subscribe to our Newsletter
          </h2>
          <p className="mb-6 text-gray-200">
            Get updates on the latest pets, products, and special offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full sm:flex-1 px-4 py-2 rounded-lg border-0 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-yellow-400 text-gray-800 font-semibold px-6 py-2 rounded-lg hover:bg-yellow-300 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Quick Contact Info */}
        <div className="bg-indigo-500 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Quick Contact</h2>
          <ul className="space-y-4 text-gray-200">
            <li className="flex items-center gap-3">
              <FaEnvelope />
              <span>hello@pawmart.com</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt />
              <span>+880 183 457 789</span>
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt />
              <span>Dhaka, Bangladesh</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NewsletterContact;
