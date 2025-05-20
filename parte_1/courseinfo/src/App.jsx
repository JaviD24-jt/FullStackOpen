const Headers =(header) =>  <h1> {header.name} </h1> ;

const Body = ({part, exercise}) => <p>{part}, {exercise}</p>;

const Total = ({parts}) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return <p>Total of exercises: {total}</p>;
};

const App = () => {
  const course = {
    name: 'Half Stack application development', 
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Headers name={course.name}/>
      {course.parts.map((part) => (
        <Body 
            part={part.name} 
            exercise={part.exercises} 
        />
      ))}
      <Total parts={course.parts} />
    </div>
  )
}
export default App
