const Learning = () => {
const content = [
    {
        title: "1. Make niyyah (intention) to perform wudu, and say 'Bismillah' (in the name of Allah) before starting wudu.",
        text: `Niyyah is the Islamic concept of performing an act for the sake of Allah. To truly perform wudu, you should center yourself and quiet your thoughts, focusing seriously on what you are doing (intending to perform wudu (ablution)). Niyyah is not said out loud and should be made in the heart; focusing on the phrase "Bismillah" (in the name of Allah) is a good way to accomplish the necessary centering. Say it out loud or silently to yourself, whichever makes you comfortable.`,
        image: "./src/assets/PerfromWudu/img1.jpeg",
    },
    {
        title: "2. Wash your hands.",
        text: `Use your left hand to wash your right hand. Do this three times. After that, use your right hand to wash your left hand three times. Make sure to wash in between your fingers and all the way up to your wrists.`,
        image: "./src/assets/PerfromWudu/img2.jpeg",
    },
    {
        title: "3. Take water into your mouth.",
        text: `Use your right hand to cup water into your mouth three times. Swish it around in your cheeks. Do this thoroughly.`,
        image: "./src/assets/PerfromWudu/img3.jpeg",
    },
    {
        title: "4. Inhale water into your nose.",
        text: `Use your right hand to cup water and inhale it into your nose and blow out three times. Snort sharply and abruptly without taking too much water into your nose and choking yourself. If you cannot inhale water into your nose, you can wet your fingers and put water on the lower part of your nostrils. Make sure to use safe water to perform this ritual; in some warmer areas of the world, water may contain naegleria fowleri, an amoeba that, if inhaled into the nostrils, can cause a rare but usually fatal type of brain infection. Even tap water (usually in third world and developing countries) may be contaminated; to avoid this illness, boil water for one minute (three minutes at higher elevations) and leave it to cool before rinsing your nose with the water.`,
        image: "./src/assets/PerfromWudu/img4.jpeg",
    },
    {
        title: "5.  Wash your face.",
        text: `Wash your face three times by spreading your hands from your right ear to the left, and from the hairline to the chin.`,
        image: "./src/assets/PerfromWudu/img5.jpeg",
    },
    {
        title: "6. Wash your lower arms from the fingertips to elbows, leaving no part dry.",
        text: `From your fingertips to your elbow, wash your right arm with your left hand three times and then wash your left arm with your right hand three times. If you have a cast, you are allowed to simply wipe over it instead.`,
        image: "./src/assets/PerfromWudu/img6.jpeg",
    },
    {
        title: "7. Clean your head.",
        text: `Using your wet hands, gently wipe the entire head once, from the forehead to the back of the head, and wipe it again forward from the back of the head to the forehead. You can also wipe in the direction of the hair only, so that the hair is not messed up or changed.`,
        image: "./src/assets/PerfromWudu/img7.jpeg",
    },
    {
        title: "8.  Wipe your ears inside and out.",
        text: `Use your thumb to clean behind your ears from the bottom upward. This is also done one time.`,
        image: "./src/assets/PerfromWudu/img8.jpeg",
    },
    {
        title: "9. Wash both of your feet.",
        text: `Clean up to the ankles and be sure water goes between the toes. Use your pinky finger and go through each toe to eliminate anything between. Start with your right foot and scrub each foot three times.`,
        image: "./src/assets/PerfromWudu/img9.jpeg",
    },
    {
        title: "10. Memorize the order.",
        text: `Wudu should be performed one after another (Tarthib), so it is important that you know the order of the steps so that you can follow them accurately. If you make a mistake in the order, you must begin your wudu from the beginning again.`,
        image: "./src/assets/PerfromWudu/img10.jpeg",
    },
    {
        title: "11.  Once you are done, recite the du'as after wudu.",
        text: `They are: Ash-hadu ‘an laa ‘ilaaha ‘I'll allaah  wahdahu laa shareeka lahu wa ‘ash-hadu ‘anna Muhammadan ‘abduhu wa Rasooluhu.Allaahummaj’alnee minat-tawwaabeena waj’alnee minal-mutatahhireen.Subhaanaka Allaahumma wa bihamdika, ‘ash-hadu ‘an laa ‘ilaaha ‘illaa ‘Anta, ‘Astagh firuka wa ‘atoobu ‘ilayk.. In English, I testify that there is no one worthy of worship besides Allah. He is all by Himself and has no partner and I testify that Muhammad ﷺ is Allah’s servant and Rasul (Messenger) O Allah, count me (include me) among those who seek forgiveness and amongst those who stay clean O Allah, You are pure, I praise You and testify that only You are worthy of worship and I seek forgiveness from You I turn to You for repentance".`,
        image: "./src/assets/PerfromWudu/img11.jpeg",
    },
];
return (
    <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen font-bold mt-16">
      <h1>
        <span className="text-4xl text-green-600 flex flex-col items-center mb-5">How to Perform Wudu</span>
      </h1>
      <div className="content max-w-4xl mx-auto">
        {content.map((section, index) => (
          <div key={index} className="mb-12 flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-semibold mb-4 text-blue-700">
              {section.title}
            </h2>
            <img
              src={section.image}
              alt={section.title}
              className="w-full h-64 object-contain mb-6 rounded-lg"
            />
            <p className="text-gray-800 text-lg leading-relaxed">{section.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learning;