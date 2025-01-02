import React from 'react';
import { Link } from 'react-router-dom';

// Sample data for the topics
const topics = [
  {
    title: "Pray in Islam",
    description: "Learn the importance and method of praying in Islam.",
    link: "/learning1"
  },
  {
    title: "Perform Wudu",
    description: "Step-by-step guide to performing Wudu.",
    link: "/learning2"
  },
  {
    title: "Become a Strong Muslim",
    description: "Tips and guidance on becoming a strong Muslim.",
    link: "/learning3"
  },
  {
    title: "How to Get Forgiveness From Allah",
    description: "Learn how to seek forgiveness from Allah.",
    link: "/learning4"
  },
  {
    title: "Read the Qur'an",
    description: "Guide on how to read and understand the Qur'an.",
    link: "/learning5"
  }
];

const LearningPage = () => {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Learning Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {topics.map((topic, index) => (
          <div key={index} className="p-4 rounded-lg shadow-lg border border-gray-200 bg-white">
            <h2 className="text-2xl font-bold mb-2 text-blue-600">{topic.title}</h2>
            <p className="text-gray-700 mb-4">{topic.description}</p>
            <Link
              to={topic.link}
              className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
            >
              Start Learning
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPage;