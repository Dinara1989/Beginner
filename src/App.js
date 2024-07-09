import './index.scss';
import {useState} from "react";

const questions = [
  {
    title: 'What is React?',
    options: ['library', 'framework', 'application'],
    correct: 0,
  },
  {
      title: 'What is a component?',
      options: ['application', 'A part of an application or page', 'A type of database'],
      correct: 1,
  },
  {
    title: 'What is JSX?',
      options: [
      'A JSON parser',
      'Function',
      'A syntax extension for JavaScript that looks similar to XML or HTML',
    ],
    correct: 2,
  },
];

function Result({ correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>You guessed {correct} answers out of {questions.length}</h2>
        <a href="/">
            <button>Try again</button>
        </a>
    </div>
  );
}

function Game( {step, question, onClickOption}) {
  const percentage = Math.round((step / question.length) * 100);
    return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
          {
              question.options.map((option, index) => (
                  <li onClick={()=> onClickOption(index)} key={option}>{option}</li>
              ))
          }
      </ul>
    </>
  );
}

function App() {
    const [step, setStep] = useState(0);
    const [correct, setCorrect] = useState(0);
    const question = questions[step];

    const onClickOption = (index) => {
        setStep(step + 1);

        if (index === question.correct) {
            setCorrect(correct + 1);
        }
    };
  return (
    <div className="App">
        {step != questions.length ? (
            <Game step={step} question={question} onClickOption={onClickOption}/>
        ):(
            <Result correct={correct}/>
        )}
    </div>
  );
}

export default App;
