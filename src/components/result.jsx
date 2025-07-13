/* eslint-disable react/prop-types */

const Result = ({ userAnswers, questions, resetQuiz = () => {} }) => {
  const correctAnswers = userAnswers.filter((answer) => answer).length;

  return (
    <div className="results max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg mt-12">
      <h2 className="text-3xl font-bold text-teal-600 mb-6 text-center">Results</h2>
      <p className="text-lg text-gray-700 mb-8 text-center">
        You answered{" "}
        <span className="font-bold text-teal-700">{correctAnswers}</span> out of{" "}
        <span className="font-bold">{questions.length}</span> questions.
        <br />
        <span
          onClick={resetQuiz}
          className="inline-block mt-4 px-4 py-2 bg-teal-500 text-white rounded-lg cursor-pointer hover:bg-teal-600 transition"
        >
          Click here to Retry
        </span>
      </p>
      <ul className="space-y-4">
        {questions.map((question, index) => {
          const isCorrect = userAnswers[index];
          const correctText = question.answerOptions.find((ans) => ans.isCorrect).text;
          return (
            <li
              key={index}
              data-correct={isCorrect}
              className={`p-4 rounded-lg shadow flex flex-col ${
                isCorrect ? "bg-green-100 border-l-4 border-green-500" : "bg-red-100 border-l-4 border-red-500"
              }`}
            >
              <span className="font-semibold text-gray-800">
                Q{index + 1}. {question.question}
              </span>
              {!isCorrect && (
                <span className="text-red-700 mt-2">
                  Correct Answer: <b>{correctText}</b>
                </span>
              )}
              {isCorrect && (
                <span className="text-green-700 mt-2 font-medium">Your answer was correct!</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Result;