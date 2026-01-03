import {
  FaShieldAlt,
  FaUserCheck,
  FaShippingFast,
  FaStar,
} from "react-icons/fa";

const WhyChoosePawMart = () => {
  return (
    <section className="max-w-[1380px] mx-auto px-4 md:px-0 mt-10">
      {/* Section Title */}
      <div className="text-center mb-5">
        <h2 className="text-3xl md:text-4xl font-bold">Why Choose PawMart</h2>
        <p className="mt-3">The reasons our users trust and love PawMart</p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {/* Trusted Sellers */}
        <div className="bg-base-100 rounded-xl p-8 text-center shadow hover:shadow-lg transition">
          <FaUserCheck className="text-indigo-600 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Trusted Sellers</h3>
          <p className="text-sm">
            We verify all sellers to ensure you get only the best pets and
            products.
          </p>
        </div>

        {/* Secure Platform */}
        <div className="bg-base-100 rounded-xl p-8 text-center shadow hover:shadow-lg transition">
          <FaShieldAlt className="text-indigo-600 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
          <p className="text-sm">
            Safe and secure platform for browsing, ordering, and adopting pets.
          </p>
        </div>

        {/* Verified Listings */}
        <div className="bg-base-100 rounded-xl p-8 text-center shadow hover:shadow-lg transition">
          <FaStar className="text-indigo-600 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Verified Listings</h3>
          <p className="text-sm">
            All listings are verified to maintain quality and trustworthiness.
          </p>
        </div>

        {/* Fast Support */}
        <div className="bg-base-100 rounded-xl p-8 text-center shadow hover:shadow-lg transition">
          <FaShippingFast className="text-indigo-600 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Fast Support</h3>
          <p className="text-sm">
            Our customer support is quick, friendly, and always ready to help.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoosePawMart;
