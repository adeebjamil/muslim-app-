const content = [
  {
    title: "1. Acknowledge your mistakes and express remorse.",
    text: `Recognize the mistakes you have made and express remorse for them. This shows that you are taking responsibility for your actions and are committed to changing your behavior.`,
    image: "./src/assets/yii/yiii1.jpeg",
  },
  {
    title: "2. Ask Allah for forgiveness from your heart.",
    text: `Make a sincere intention to ask Allah for forgiveness from your heart. This means that you should not just say the words, but truly feel remorse and regret for your mistakes.`,
    image: "./src/assets/yii/yiii2.jpeg",
  },
  {
    title: "3. Express your sincere intention to not make the mistake again.",
    text: `Make a commitment to yourself and to Allah that you will not make the same mistake again. This shows that you are truly sorry for your mistakes and are willing to make amends.`,
    image: "./src/assets/yii/yiii3.jpeg",
  },
  {
    title: "4. If you did harm to someone else, apologize to them.",
    text: `If your mistakes have caused harm to someone else, apologize to them sincerely. This shows that you are taking responsibility for your actions and are willing to make amends.`,
    image: "./src/assets/yii/yiii4.jpeg",
  },
  {
    title: "5. Believe in Allah's mercy and trust that He will forgive you.",
    text: `Have faith in Allah's mercy and trust that He will forgive you. Remember that Allah is merciful and just, and that He wants to forgive you and help you become a better person.`,
    image: "./src/assets/yii/yiii5.jpeg",
  }
];


const Learning4 = () => {
  return (
    <div className="p-4 bg-gray-50 min-h-screen mt-14">
      <h1 className="text-4xl font-bold mb-6 text-center text-green-600">Strengthening Your Faith</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {content.map((item, index) => (
          <div key={index} className="p-4 rounded-lg shadow-lg border border-gray-200 bg-white">
            <h2 className="text-2xl font-bold mb-2 text-blue-600">{item.title}</h2>
            <p className="text-gray-700 mb-4">{item.text}</p>
            <img src={item.image} alt={item.title} className="w-full h-auto mb-4 object-contain rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learning4;

