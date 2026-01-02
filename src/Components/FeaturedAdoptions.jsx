import React from "react";

const FeaturedAdoptions = () => {
  const featuredPets = [
    {
      id: 1,
      name: "Bella",
      breed: "Golden Retriever",
      image:
        "https://i.postimg.cc/HnW3gbwq/angela-handfest-z-SYItn-Jdix4-unsplash.jpg",
    },
    {
      id: 2,
      name: "Milo",
      breed: "Siamese Cat",
      image:
        "https://i.postimg.cc/HW7Vp910/nandhu-kumar-j-AMc-Ubs-Tv-WE-unsplash.jpg",
    },
    {
      id: 3,
      name: "Rocky",
      breed: "German Shepherd",
      image:
        "https://i.postimg.cc/ZRtCGWsP/george-loginov-r-z-Jh-E0-L2-Vw-unsplash.jpg",
    },
  ];

  return (
    <section className="py-10 max-w-[1380px] mx-auto">
      <h2 className="text-3xl font-bold mb-5">
        🐾 Featured Adoptions
      </h2>
      <div className="grid md:grid-cols-3 gap-5 mx-auto">
        {featuredPets.map((pet) => (
          <div
            key={pet.id}
            className=" bg-base-100 shadow-sm hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden"
          >
            <img
              src={pet.image}
              alt={pet.name}
              className="h-56 w-full object-cover"
            />
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold">{pet.name}</h3>
              <p>{pet.breed}</p>
              <button className="cursor-pointer mt-4 bg-[#2563EB] text-white hover:bg-[#1D4ED8] py-2 px-5 rounded-sm transition-all w-full">
                See Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedAdoptions;
