import React from "react";

const Learning3 = () => {
  const content = [
    {
      title: "1. Strengthening Your Faith",
      text: `Strengthening your faith is a continuous journey that involves both spiritual and practical steps. Here are some ways to nurture and enhance your faith:`,
      image: "./src/assets/learn3/hii3.jpeg",
    },
    {
      title: "2. Regular Prayer",
      text: `Consistently performing the five daily prayers (salah) is fundamental to maintaining and strengthening your faith. Prayer is a direct connection to Allah and a source of spiritual discipline.`,
      image: "./src/assets/learn3/hii2.jpeg",
    },
    {
      title: "3. Reading the Qur'an",
      text: `Make it a habit to read and reflect on the Qur'an daily. Understanding its teachings can offer guidance and increase your spiritual awareness.`,
      image: "./src/assets/learn3/hii1.jpeg",
    },
    {
      title: "4. Seeking Knowledge",
      text: `Pursue Islamic knowledge through books, lectures, and courses. Understanding your faith more deeply can empower you to practice it more effectively.`,
      image: "./src/assets/learn3/hii4.jpeg",
    },
    {
      title: "5. Community Engagement",
      text: `Engage with your local Muslim community by attending mosque events, volunteering, and participating in study groups. This can provide you with support and motivation.`,
      image: "./src/assets/learn3/hii5.jpeg",
    },
    {
      title: "6. Personal Reflection",
      text: `Take time to reflect on your spiritual journey, set goals, and evaluate your progress. Personal reflection can help you identify areas for growth and improvement in your faith.`,
      image: "./src/assets/learn3/hii6.jpeg",
    },
  ];

  return (
    <div className="p-4 bg-gray-50 min-h-screen mt-12">
      <h1 className="text-4xl font-bold mb-6 text-center text-green-600">Strengthening Your Faith</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {content.map((item, index) => (
          <div key={index} className="p-4 rounded-lg shadow-lg border border-gray-200 bg-white">
            <h2 className="text-2xl font-bold mb-2 text-blue-600">{item.title}</h2>
            <p className="text-gray-700 mb-4">{item.text}</p>
            <img src={item.image} alt={item.title} className="w-full h-auto mb-4 rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learning3;

