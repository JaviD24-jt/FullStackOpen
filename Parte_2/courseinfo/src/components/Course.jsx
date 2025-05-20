const Headers =(header) =>  <h2> {header.name} </h2> ;

const Body = ({part, exercise}) => <p>{part}, {exercise}</p> 

const Total = ({parts}) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return <p><strong>Total of exercises: </strong> {total}</p>;
};

const Course = ({ course }) => {
  return (
    <div>
      <div>
        <Headers name={course.name}/>
        {course.parts.map((part) => (
          <Body 
              key={part.id}
              part={part.name} 
              exercise={part.exercises} 
          />
        ))}
        <Total parts={course.parts}/>
      </div>
    </div>
    
  )
} 
export default Course
