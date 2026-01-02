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
    <section className="mb-14 max-w-[1380px] mx-auto">
      <h2 className="text-3xl font-bold mb-5">
        🐾 Pet Care Tips
      </h2>
      <div className="grid md:grid-cols-3 gap-8 mx-auto">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="bg-base-100 p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-lg font-semibold mb-3">
              {tip.title}
            </h3>
            <p className="text-sm leading-relaxed">{tip.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PetCareTips;
