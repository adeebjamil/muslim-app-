import React from "react";

const Learning5 = () => {
  const content = [
    {
      title: "1. Treat the Qu'ran as a holy book and approach readings with respect",
      text: `In Muslim culture, there are specific rules of etiquette when it comes to reading the Qu'ran, often referred to as tajweed rules. These rules mostly revolve around cleanliness, respect, and preferences about recitation. You don't have to follow these rules to read the Qu'ran, but you may want to consider them as part of your study to better understand the Islamic faith.
If you attend religious services at a mosque or intend to explore the Muslim faith on a deeper level, it is helpful to be aware of and practice tajweed rules.`,
      image: "./src/assets/learnquran/img1.jpeg",
    },
    {
      title: "2. Wash your hands, brush your teeth, and dress in nice clothing",
      text: `Always attend to your hygiene before reading your Qur’an. Imagine you are getting ready for a job interview or to meet a very important person. Get yourself ready to start your day.
If you cough up phlegm at any point during your reading, make sure to pause and rinse your mouth out with water.`,
      image: "./src/assets/learnquran/img2.jpeg",
    },
    {
      title: "3. Sit up straight when you read the Qur’an.",
      text: `Don’t slouch or lean back. Try sitting in a hard-backed chair or at a desk so you will be less inclined to lean back. Don’t sit in a chair that reclines or read your Qur’an in bed.
You may hold your Qur’an on your lap or on a surface in front of you, but never place it on the floor.
Also, make sure that you are facing in the direction of prayer before you read.`,
      image: "./src/assets/learnquran/img3.jpeg",
    },
    {
      title: "4. Pause occasionally to consider what you have just read",
      text: `Whenever you encounter a passage that tells a story about people or that promises Allah’s blessing, pause and consider it. Reflect on the meaning of the story or passage before you move on.
Never rush your readings of the Qur’an. If you do not have time to read at a leisurely pace, choose another time to read.`,
      image: "./src/assets/learnquran/img4.jpeg",
    },
    {
      title: " 5. Close the Qur’an when you are finished reading it",
      text: ` Never leave your Qur’an open after you have finished reading it. Place a book mark or make a note about where you left off, and then close your Qur’an and put it in its place, such as on a bookshelf or table.
Never stack other books on top of the Qur’an. This symbolizes that they are above the Qur’an.
`,
      image: "./src/assets/learnquran/img5.jpeg",
    },
  ];

  return (
    <div className="p-4 bg-gray-50 min-h-screen mt-14">
      <h1 className="text-4xl font-bold mb-6 text-center text-green-600">How to Read the Quran</h1>
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

export default Learning5;
