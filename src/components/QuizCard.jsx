import React from 'react';

const QuizCard = ({ quizIndex, title, onStartQuiz }) => {
  return (
    <div className="quiz-card p-6 bg-white rounded-lg shadow-lg m-4">
      <h3 className="text-2xl font-bold mb-4 text-green-600">{title}</h3>
      <button
        onClick={() => onStartQuiz(quizIndex)}
        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default QuizCard;