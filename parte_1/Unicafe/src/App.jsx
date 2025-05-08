import { useState } from 'react'
const Titlle = ({text}) => <h1>{text} </h1>;

const Button = ({ onClick, text }) => <button onClick={onClick} >{text}</button>;

const Count =({counter, text}) => <p> {text} { counter }</p>;


const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total || 0;
  const positive = (good / total) * 100 || 0;

  if (total==0){
    return <h2>No feedback given</h2>
  };

  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <tr>
            <td>Good:</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>Neutral:</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>Bad:</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>Total:</td>
            <td>{total}</td>
          </tr>
          <tr>
            <td>Average:</td>
            <td>{average.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Positive:</td>
            <td>{positive.toFixed(2)}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <div>
        < Titlle text="Give Feedback" />
      </div>
      <div>
        < Button onClick={()=> setGood (good + 1)} text="Good"/>
        < Button onClick={()=> setNeutral (neutral + 1)} text="Neutral"/>
        < Button onClick={()=> setBad (bad + 1)} text="Bad"/>
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>

    </div>
  )
}

export default App