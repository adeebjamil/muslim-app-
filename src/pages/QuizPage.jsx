import React, { useState } from "react";
import QuizCard from "../components/QuizCard";

// Sample quiz questions for each quiz
const quizzes = [
  {
    title: "Islamic General Knowledge Quiz 1",
    questions: [
      {
        question: "What should you say before you start anything?",
        options: ["Alhamdulillah", "Subhanallah", "Bismillah", "Allahu Akbar"],
        answer: "Bismillah",
      },
      {
        question: "What was Adam (AS) created from?",
        options: ["Clay", "Light", "Water", "Air"],
        answer: "Clay",
      },
      {
        question: "In which Islamic month did the Miraj take place?",
        options: ["Ramadan", "Shawwal", "Rajab", "Dhul-Hijjah"],
        answer: "Rajab",
      },
      {
        question: "On which Islamic date is Eid al-Fitr celebrated?",
        options: [
          "1st Shawwal",
          "10th Dhul-Hijjah",
          "12th Rabi al-Awwal",
          "27th Rajab",
        ],
        answer: "1st Shawwal",
      },
      {
        question: "In which Islamic month is Hajj performed?",
        options: ["Ramadan", "Shawwal", "Rajab", "Dhul-Hijjah"],
        answer: "Dhul-Hijjah",
      },
    ],
  },
  {
    title: "Islamic General Knowledge Quiz 2",
    questions: [
      {
        question:
          "How old was the Prophet ﷺ when he got married to Khadijah (RA)?",
        options: ["25", "30", "35", "40"],
        answer: "25",
      },
      {
        question:
          "Which Islamic month did the Prophet ﷺ receive the first revelation of the Qur'an in?",
        options: ["Ramadan", "Shawwal", "Rajab", "Dhul-Hijjah"],
        answer: "Ramadan",
      },
      {
        question:
          "What was the name of Khadija (RA)'s cousin who was a priest?",
        options: [
          "Abu Talib",
          "Waraka ibn Nawfal",
          "Abu Bakr",
          "Ali ibn Abi Talib",
        ],
        answer: "Waraka ibn Nawfal",
      },
      {
        question: "Who purchased and freed Bilal (RA)?",
        options: [
          "Umar ibn Al-Khattab",
          "Abu Bakr",
          "Ali ibn Abi Talib",
          "Uthman ibn Affan",
        ],
        answer: "Abu Bakr",
      },
      {
        question: "What is the title given to Umar (RA)?",
        options: ["Al-Farooq", "As-Siddiq", "Al-Amin", "Al-Mujahid"],
        answer: "Al-Farooq",
      },
    ],
  },
  {
    title: "Islamic General Knowledge Quiz 3",
    questions: [
      {
        question: "Which Surah of the Qur'an has 2 bismillahs?",
        options: [
          "Surah Al-Fatiha",
          "Surah Al-Baqara",
          "Surah Al-Naml",
          "Surah Al-Ikhlas",
        ],
        answer: "Surah Al-Naml",
      },
      {
        question: "Which woman is mentioned by name in the Qur'an?",
        options: ["Khadijah", "Maryam", "Aisha", "Fatimah"],
        answer: "Maryam",
      },
      {
        question: "How old was the Prophet ﷺ when he passed away?",
        options: ["60", "63", "65", "70"],
        answer: "63",
      },
      {
        question: "What is the name of the prophet who could speak to animals?",
        options: ["Nuh", "Ibrahim", "Suleiman", "Musa"],
        answer: "Suleiman",
      },
      {
        question:
          "Which prophet was given the miracle to turning his stick into a snake?",
        options: ["Ibrahim", "Musa", "Isa", "Yusuf"],
        answer: "Musa",
      },
    ],
  },
  {
    title: "Islamic General Knowledge Quiz 4",
    questions: [
      {
        question: "What is the name of the prophet who was thrown in the well?",
        options: ["Yusuf", "Ibrahim", "Musa", "Isa"],
        answer: "Yusuf",
      },
      {
        question: "What does the name Muhammad mean?",
        options: [
          "The praised one",
          "The truthful one",
          "The trustworthy one",
          "The generous one",
        ],
        answer: "The praised one",
      },
      {
        question: "Which Masjid is the 2nd holiest in Islam?",
        options: [
          "Masjid Al-Haram",
          "Masjid Al-Aqsa",
          "Masjid An-Nabawi",
          "Masjid Quba",
        ],
        answer: "Masjid An-Nabawi",
      },
      {
        question: "Which prophet had been given a camel as a miracle?",
        options: ["Nuh", "Ibrahim", "Saleh", "Musa"],
        answer: "Saleh",
      },
      {
        question:
          "What does Allah build for the person who helps build a Masjid?",
        options: [
          "A palace in Jannah",
          "A castle in Jannah",
          "A house in Jannah",
          "A garden in Jannah",
        ],
        answer: "A house in Jannah",
      },
    ],
  },
  {
    title: "Islamic General Knowledge Quiz 5",
    questions: [
      {
        question: "How many years did the People of the Cave sleep for?",
        options: ["100 years", "200 years", "300 years", "400 years"],
        answer: "300 years",
      },
      {
        question: "Who ordered the first complete compilation of the Qur'an?",
        options: ["Abu Bakr", "Umar", "Uthman", "Ali"],
        answer: "Abu Bakr",
      },
      {
        question: "How old was the Prophet ﷺ at the time of prophethood?",
        options: ["30", "35", "40", "45"],
        answer: "40",
      },
      {
        question: "How many surahs are there in the Qur'an?",
        options: ["100", "110", "114", "120"],
        answer: "114",
      },
      {
        question: "What do we say when we make an intention to do something?",
        options: ["Inshallah", "Alhamdulillah", "Subhanallah", "Allahu Akbar"],
        answer: "Inshallah",
      },
    ],
  },
  {
    title: "Islamic General Knowledge Quiz 6",
    questions: [
      {
        question:
          "Who took care of our Beloved Prophet ﷺ after his grandfather passed away?",
        options: ["Abu Talib", "Abdullah", "Hamza", "Abbas"],
        answer: "Abu Talib",
      },
      {
        question:
          "What is the name of the year in which the Prophet ﷺ was born?",
        options: [
          "Year of the Elephant",
          "Year of the Camel",
          "Year of the Lion",
          "Year of the Bird",
        ],
        answer: "Year of the Elephant",
      },
      {
        question: "Which uncle of the Prophet ﷺ was martyred in Uhud?",
        options: ["Abu Talib", "Hamza", "Abbas", "Abu Lahab"],
        answer: "Hamza",
      },
      {
        question: "Who was the 3rd Khalifah after the prophet ﷺ's demise?",
        options: ["Abu Bakr", "Umar", "Uthman", "Ali"],
        answer: "Uthman",
      },
      {
        question:
          "Where did the 1st group of Muslims migrate to before Madinah?",
        options: ["Abyssinia", "Egypt", "Syria", "Yemen"],
        answer: "Abyssinia",
      },
    ],
  },
  {
    title: "Islamic General Knowledge Quiz 7",
    questions: [
      {
        question:
          "What is the name of the angel who will blow the trumpet on the Day of Judgment?",
        options: ["Jibril", "Mikail", "Israfil", "Azrael"],
        answer: "Israfil",
      },
      {
        question: "What is the standing position in salah called?",
        options: ["Ruku", "Sujood", "Qiyam", "Takbir"],
        answer: "Qiyam",
      },
      {
        question: "Which country was Bilal (RA) from?",
        options: ["Arabia", "Ethiopia", "Egypt", "Syria"],
        answer: "Ethiopia",
      },
      {
        question:
          "What is the name of the cloth worn by men for Hajj and Umrah?",
        options: ["Ihram", "Kufi", "Thobe", "Jubba"],
        answer: "Ihram",
      },
      {
        question: "Who travelled with the Prophet ﷺ on Hijrah?",
        options: ["Umar", "Ali", "Abu Bakr", "Uthman"],
        answer: "Abu Bakr",
      },
    ],
  },
  {
    title: "Islamic General Knowledge Quiz 8",
    questions: [
      {
        question:
          "In which month of the Islamic calendar is Eid-ul-Fitr celebrated?",
        options: ["Muharram", "Rajab", "Ramadan", "Shawwal"],
        answer: "Shawwal",
      },
      {
        question: "How many days are in an Islamic month?",
        options: ["28", "29 or 30", "30", "31"],
        answer: "29 or 30",
      },
      {
        question:
          "What is the name of the special charity that is given at the end of the month of Ramadan?",
        options: ["Zakat", "Sadaqah", "Fitrana", "Khums"],
        answer: "Fitrana",
      },
      {
        question: "Which prophet was sent to the people of Thamud?",
        options: ["Nuh", "Hud", "Saleh", "Shu'ayb"],
        answer: "Saleh",
      },
      {
        question: "Which Prophet looked after Maryam (RA)?",
        options: ["Ibrahim", "Zakariya", "Yusuf", "Isa"],
        answer: "Zakariya",
      },
    ],
  },
  {
    title: "Islamic General Knowledge Quiz 9",
    questions: [
      {
        question: "What is the name of the gatekeeper of Jahannam?",
        options: ["Munkar", "Nakir", "Malik", "Ridwan"],
        answer: "Malik",
      },
      {
        question:
          "How many Angels will carry the Throne of Allah on the Day of Judgment?",
        options: ["4", "6", "8", "10"],
        answer: "8",
      },
      {
        question: "How many months of worship does Laylatul Qadr equal to?",
        options: ["6 months", "83 months", "100 months", "1000 months"],
        answer: "1000 months",
      },
      {
        question: "Which cave did the prophet ﷺ rest in during the Hijrah?",
        options: ["Cave Hira", "Cave Thawr", "Cave Saur", "Cave Nur"],
        answer: "Cave Thawr",
      },
      {
        question: "Which is the longest surah in the Qur'an?",
        options: [
          "Surah Al-Baqara",
          "Surah Al-Imran",
          "Surah An-Nisa",
          "Surah Al-Ma'idah",
        ],
        answer: "Surah Al-Baqara",
      },
    ],
  },
  {
    title: "Islamic General Knowledge Quiz 10",
    questions: [
      {
        question: "Which prophet was named by Allah Subhanah Himself?",
        options: ["Adam", "Isa", "Yahya", "Musa"],
        answer: "Yahya",
      },
      {
        question: "How long is the Day of Judgement?",
        options: [
          "50,000 years",
          "10,000 years",
          "100,000 years",
          "1,000 years",
        ],
        answer: "50,000 years",
      },
      {
        question:
          "What is the name of the fountain which each person of Paradise will drink before entering?",
        options: ["Kawthar", "Salsabil", "Tasnim", "Zamzam"],
        answer: "Kawthar",
      },
      {
        question:
          "Which prophet's father, grandfather, and great-grandfather were also prophets?",
        options: ["Isa", "Yusuf", "Ibrahim", "Yunus"],
        answer: "Yusuf",
      },
      {
        question:
          "How many times is the Prophet ﷺ mentioned by name in the Qur'an?",
        options: ["3", "4", "5", "6"],
        answer: "4",
      },
    ],
  },
  {
    title: "Islamic General Knowledge Quiz 11",
    questions: [
      {
        question: "What is good company likened to in the Hadith?",
        options: [
          "A perfume seller",
          "A gold trader",
          "A book seller",
          "A light",
        ],
        answer: "A perfume seller",
      },
      {
        question:
          "What is the name of the pilgrimage that an able Muslim must do once in a lifetime?",
        options: ["Umrah", "Hajj", "Ziyarah", "Tawaf"],
        answer: "Hajj",
      },
      {
        question: "Which country has the largest Muslim population?",
        options: ["Saudi Arabia", "Pakistan", "Indonesia", "India"],
        answer: "Indonesia",
      },
      {
        question: "What is the name of the 3rd holiest place in Islam?",
        options: [
          "Masjid Al-Haram",
          "Masjid An-Nabawi",
          "Masjid Al-Aqsa",
          "Masjid Quba",
        ],
        answer: "Masjid Al-Aqsa",
      },
      {
        question: "Who was the first Mu'azzin of Islam?",
        options: ["Abu Bakr", "Umar", "Ali", "Bilal"],
        answer: "Bilal",
      },
    ],
  },
  {
    title: "Islamic General Knowledge Quiz 12",
    questions: [
      {
        question: "How many years did Muslims rule Spain?",
        options: ["300 years", "500 years", "700 years", "900 years"],
        answer: "700 years",
      },
      {
        question:
          "Which direction did the Muslims in Madinah face in Salah before the Ka'bah?",
        options: ["Jerusalem", "Makkah", "Madinah", "Yemen"],
        answer: "Jerusalem",
      },
      {
        question: "What does Tawheed mean?",
        options: [
          "Belief in angels",
          "Belief in books",
          "Belief in oneness of Allah",
          "Belief in prophets",
        ],
        answer: "Belief in oneness of Allah",
      },
      {
        question: "What is the name of the person who developed algebra?",
        options: ["Al-Ghazali", "Al-Khwarizmi", "Ibn Sina", "Ibn Rushd"],
        answer: "Al-Khwarizmi",
      },
      {
        question:
          "What is the name of the door in Jannah for the fasting person?",
        options: ["Ar-Rayyan", "Al-Kawthar", "As-Sirat", "Al-Ma'wa"],
        answer: "Ar-Rayyan",
      },
    ],
  },
  {
    title: "Islamic General Knowledge Quiz 13",
    questions: [
      {
        question:
          "Which companion did the Prophet Muhammad ﷺ stay with when he first came to Madinah?",
        options: ["Abu Bakr", "Umar", "Abu Ayyub", "Ali"],
        answer: "Abu Ayyub",
      },
      {
        question: "How many prophets are mentioned in the Qur'an?",
        options: ["25", "30", "35", "40"],
        answer: "25",
      },
      {
        question: "How many idols were in the Ka'abah before Islam?",
        options: ["100", "200", "300", "360"],
        answer: "360",
      },
      {
        question: "What is the greatest verse of the Holy Qur’an?",
        options: [
          "Ayat Al-Kursi",
          "Ayat Al-Noor",
          "Ayat Al-Mulk",
          "Ayat Al-Baqarah",
        ],
        answer: "Ayat Al-Kursi",
      },
      {
        question:
          "What is the name of angel who would bring wahi on our Prophet ﷺ?",
        options: ["Jibril", "Mikail", "Israfil", "Azrael"],
        answer: "Jibril",
      },
    ],
  },
  {
    title: "Islamic General Knowledge Quiz 14",
    questions: [
      {
        question:
          "What is the name of cave where revelation of the Holy Qur’an started?",
        options: ["Cave Thawr", "Cave Hira", "Cave Saur", "Cave Nur"],
        answer: "Cave Hira",
      },
      {
        question:
          "What were the two main tribes living in Madinah when our Beloved Prophet ﷺ migrated from Makkah to Madinah?",
        options: [
          "Aus and Khazraj",
          "Quraish and Banu Hashim",
          "Aws and Banu Nadir",
          "Khazraj and Banu Qaynuqa",
        ],
        answer: "Aus and Khazraj",
      },
      {
        question: "Which Islamic month was our Prophet ﷺ born in?",
        options: ["Muharram", "Rabi' al-Awwal", "Ramadan", "Shawwal"],
        answer: "Rabi' al-Awwal",
      },
      {
        question:
          "Name the prophet whose name is mentioned and discussed most in the Qur’an.",
        options: ["Musa", "Ibrahim", "Isa", "Nuh"],
        answer: "Musa",
      },
      {
        question:
          "Which is the first and the most ancient Mosque according to the Qur’an?",
        options: [
          "Masjid Al-Haram",
          "Masjid An-Nabawi",
          "Masjid Al-Aqsa",
          "Masjid Quba",
        ],
        answer: "Masjid Al-Haram",
      },
    ],
  },
  {
    title: "Quiz on Isra wal Miraj",
    questions: [
      {
        question: "What is the meaning of 'Isra'?",
        options: [
          "Ascension to the heavens",
          "Night journey",
          "Divine revelation",
          "Meeting with the Prophets",
        ],
        answer: "Night journey",
      },

      {
        question:
          "From which city did the Prophet Muhammad (PBUH) begin the journey of Isra wal Miraj?",
        options: ["Medina", "Mecca", "Ta’if", "Jerusalem"],
        answer: "Mecca",
      },
      {
        question:
          "What is the name of the animal the Prophet Muhammad (PBUH) rode during Isra wal Miraj?",
        options: ["Camel", "Buraq", "Mule", "Horse"],
        answer: "Buraq",
      },
      {
        question:
          "Where did the Prophet Muhammad (PBUH) lead all the previous Prophets in prayer during the journey?",
        options: [
          "Masjid al-Haram",
          "Masjid an-Nabawi",
          "Masjid al-Aqsa",
          "The Kaaba",
        ],
        answer: "Masjid al-Aqsa",
      },
      {
        question: "What is the meaning of 'Miraj'?",
        options: [
          "The Night Journey",
          "Ascension to the heavens",
          "Meeting with Jibreel",
          "Revelation of the Quran",
        ],
        answer: "Ascension to the heavens",
      },
      {
        question:
          "Which Prophet did the Prophet Muhammad (PBUH) meet in the first heaven?",
        options: [
          "Prophet Musa (AS)",
          "Prophet Ibrahim (AS)",
          "Prophet Adam (AS)",
          "Prophet Isa (AS)",
        ],
        answer: "Prophet Adam (AS)",
      },
      {
        question:
          "What was gifted to the Ummah of Prophet Muhammad (PBUH) during the Miraj?",
        options: [
          "The Quran",
          "Five daily prayers",
          "Fasting in Ramadan",
          "The Shahada",
        ],
        answer: "Five daily prayers",
      },
      {
        question:
          "Which tree marks the boundary beyond which none but Allah can pass?",
        options: [
          "Sidrat al-Muntaha",
          "Tree of Knowledge",
          "Tree of Tuba",
          "Tree of Life",
        ],
        answer: "Sidrat al-Muntaha",
      },
      {
        question:
          "Which Angel accompanied the Prophet (PBUH) during the Isra wal Miraj?",
        options: [
          "Angel Israfil",
          "Angel Jibreel (AS)",
          "Angel Mikail",
          "Angel Malik",
        ],
        answer: "Angel Jibreel (AS)",
      },
      {
        question: "What is the significance of the Isra wal Miraj in Islam?",
        options: [
          "It marked the revelation of the Quran.",
          "It affirmed the status of Prophet Muhammad (PBUH) as the final messenger.",
          "It established the five daily prayers as an obligation.",
          "Both B and C",
        ],
        answer: "Both B and C",
      },
    ],
  },
];

const QuizPage = () => {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    const currentQuestion =
      quizzes[currentQuizIndex].questions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.answer;

    setUserAnswers([...userAnswers, selectedOption]);
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handlePreviousClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentQuestionIndex < quizzes[currentQuizIndex].questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuizIndex(null);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setScore(0);
    setShowResults(false);
  };

  const handleStartQuiz = (quizIndex) => {
    setCurrentQuizIndex(quizIndex);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setScore(0);
    setShowResults(false);
  };

  if (currentQuizIndex !== null) {
    if (showResults) {
      return (
        <div className="quiz-results p-6 bg-white rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold mb-4 text-green-600">
            Quiz Results
          </h2>
          <p className="text-xl mb-4">
            Your score: {score} out of{" "}
            {quizzes[currentQuizIndex].questions.length}
          </p>
          {score === quizzes[currentQuizIndex].questions.length ? (
            <p className="text-green-500">
              Congratulations! You answered all questions correctly.
            </p>
          ) : (
            <p className="text-red-500">
              You got some answers wrong. Please try again.
            </p>
          )}
          <div className="text-left mb-4">
            <h3 className="text-2xl font-bold mb-2">Correct Answers:</h3>
            <ul className="list-disc pl-5">
              {quizzes[currentQuizIndex].questions.map((question, index) => (
                <li key={index}>
                  <strong>{question.question}</strong> - {question.answer}
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={handleRestartQuiz}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Restart Quiz
          </button>
        </div>
      );
    }

    const currentQuestion =
      quizzes[currentQuizIndex].questions[currentQuestionIndex];

    return (
      <div className="quiz-container p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-green-600">
          {quizzes[currentQuizIndex].title}
        </h2>
        <div className="question-section mb-6">
          <h3 className="text-xl font-semibold mb-4">
            {currentQuestion.question}
          </h3>
          <div className="options-section space-y-4">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                className={`w-full px-4 py-2 rounded-lg ${
                  userAnswers[currentQuestionIndex] === option
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                disabled={userAnswers[currentQuestionIndex] !== undefined}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        <div className="navigation-buttons flex justify-between mt-4">
          <button
            onClick={handlePreviousClick}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </button>
          <button
            onClick={handleNextClick}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            {currentQuestionIndex <
            quizzes[currentQuizIndex].questions.length - 1
              ? "Next"
              : "Finish"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-page p-4 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center text-green-600">
        Quiz Page
      </h1>
      <div className="quiz-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {quizzes.map((quiz, index) => (
          <QuizCard
            key={index}
            quizIndex={index}
            title={quiz.title}
            onStartQuiz={handleStartQuiz}
          />
        ))}
      </div>
    </div>
  );
};

export default QuizPage;
