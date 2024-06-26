const divStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: 'fit-content',
  margin: '0 auto',
  alignItems: 'flex-start',
  color: 'white',
}

const mySkills = [
  {
    name: "JavaScript",
    comfort: 9,
    frontEnd: true,
    backend: true,
  },
  {
    name: "CSS",
    comfort: 8,
    frontEnd: true,
    backend: false,
  },
  {
    name: "HTML",
    comfort: 10,
    frontEnd: true,
    backend: false,
  },
  {
    name: "Python",
    comfort: 3,
    frontEnd: false,
    backend: true,
  },
  {
    name: "EJS",
    comfort: 6,
    frontEnd: false,
    backend: true,
  },
  {
    name: "Express",
    comfort: 6,
    frontEnd: false,
    backend: true,
  },
  {
    name: "React",
    comfort: 1,
    frontEnd: true,
    backend: false,
  }
];

const skillList = mySkills.map((skill, index) => 
  skill.comfort > 5 ? <li key={index}> {skill.name} </li> : null
);

const App = () => {

  document.body.style.backgroundColor = '#242424';

  return (
    <div style={divStyle}>
      <h1>Welcome to my portfolio!</h1>
      <h4>These are my current skills</h4>
      <ul>{skillList}</ul>
    </div>
  );
};

export default App;
