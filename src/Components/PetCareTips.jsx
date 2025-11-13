import React from "react";

const PetCareTips = () => {
  const tips = [
    {
      id: 1,
      title: "🐕 Proper Nutrition",
      desc: "Feed your pets a balanced diet and always provide fresh water to keep them healthy and happy.",
    },
    {
      id: 2,
      title: "🩺 Regular Check-ups",
      desc: "Visit the vet regularly for check-ups and vaccinations to ensure long-term wellness.",
    },
    {
      id: 3,
      title: "🎾 Daily Exercise",
      desc: "Keep your pets active with daily walks and playtime to maintain their physical and mental health.",
    },
  ];

  return (
    <section className="py-14 bg-[#f8fafc] mt-10 mb-10 max-w-[1380px] mx-auto">
      <h2 className="text-3xl font-bold text-center text-[#094359] mb-10">
        🐾 Pet Care Tips
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-lg font-semibold mb-3 text-[#094359]">
              {tip.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{tip.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PetCareTips;
