import { FaSearch, FaComments, FaHeart } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="max-w-[1380px] mx-auto px-4 md:px-0 py-10">
      {/* Title */}
      <div className="text-center mb-5">
        <h2 className="text-3xl md:text-4xl font-bold">
          How It Works
        </h2>
        <p className="mt-3">
          Adopt or buy your favorite pet in just three simple steps
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {/* Step 1 */}
        <div className="bg-base-100 rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-indigo-100">
            <FaSearch className="text-indigo-600 text-2xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Browse Pets</h3>
          <p className="text-sm">
            Explore a wide range of pets and supplies available on PawMart.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-base-100 rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-indigo-100">
            <FaComments className="text-indigo-600 text-2xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Contact / Order</h3>
          <p className="text-sm">
            Connect with the seller or place your order securely.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-base-100 rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-indigo-100">
            <FaHeart className="text-indigo-600 text-2xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Adopt / Buy</h3>
          <p className="text-sm">
            Complete the adoption or purchase and welcome your new friend.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
