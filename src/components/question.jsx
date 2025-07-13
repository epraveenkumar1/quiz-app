/* eslint-disable react/prop-types */

const Question = ({ question, onAnswerClick = () => {} }) => {
  return (
    <div className="question max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg mt-12">
      <h2 className="mb-8 text-2xl font-bold text-gray-800 text-center">{question.question}</h2>
      <ul className="options grid grid-cols-1 sm:grid-cols-2 gap-6">
        {question.answerOptions.map((option) => (
          <li key={option.text}>
            <button
              onClick={() => onAnswerClick(option.isCorrect)}
              className="w-full py-4 px-6 bg-teal-500 text-white rounded-lg font-semibold text-lg shadow hover:bg-teal-600 transition duration-200"
            >
              {option.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;