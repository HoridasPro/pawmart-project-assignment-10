import { FaPaw, FaShoppingBag, FaHeart, FaTruck } from "react-icons/fa";

const Services = () => {
  return (
    <section className="max-w-[1380px] mx-auto px-4 md:px-0 mt-10">
      {/* Section Title */}
      <div className="mb-5">
        <h2 className="text-3xl md:text-3xl font-bold text-center">Our Services</h2>
        <p className="mt-3 text-center">
          Everything you need for your lovely pets in one place
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Service 1 */}
        <div className="bg-base-100 shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
          <FaPaw className="text-indigo-600 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Pet Adoption</h3>
          <p className="text-sm">
            Find and adopt your perfect furry companion with love and care.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-base-100 shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
          <FaShoppingBag className="text-indigo-600 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Pet Supplies</h3>
          <p className="text-sm">
            Buy quality food, toys, and accessories for your pets.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-base-100 shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
          <FaHeart className="text-indigo-600 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Pet Care</h3>
          <p className="text-sm">
            Trusted care services to keep your pets healthy and happy.
          </p>
        </div>

        {/* Service 4 */}
        <div className="bg-base-100 shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
          <FaTruck className="text-indigo-600 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
          <p className="text-gray-600 text-sm">
            Quick and safe delivery of pet products to your doorstep.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
