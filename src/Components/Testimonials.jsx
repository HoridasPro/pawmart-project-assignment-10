import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    feedback: "I adopted my cat from PawMart and the experience was amazing!",
    rating: 5,
    photo: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Michael Lee",
    feedback: "Fast delivery and high-quality pet supplies. Highly recommend!",
    rating: 4,
    photo: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Emily Davis",
    feedback: "The support team was very helpful and responsive. Love PawMart!",
    rating: 5,
    photo: "https://i.pravatar.cc/100?img=3",
  },
];

const Testimonials = () => {
  return (
    <section className="max-w-[1380px] mx-auto px-4 md:px-0 py-10">
      {/* Section Title */}
      <div className="text-center mb-5">
        <h2 className="text-3xl md:text-4xl font-bold">Reviews</h2>
        <p className="mt-3">Hear what our happy users have to say</p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testi, index) => (
          <div
            key={index}
            className="bg-base-100 shadow-md rounded-xl p-6 text-center hover:shadow-xl transition"
          >
            <img
              src={testi.photo}
              alt={testi.name}
              className="w-20 h-20 mx-auto rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{testi.name}</h3>
            <div className="flex justify-center mb-2">
              {[...Array(testi.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>
            <p className="text-sm">{testi.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
