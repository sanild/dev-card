import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skillArray = [
  {
    skill:"HTML+CSS" ,level:"advanced" ,color:"#89CFF0"
  },
  {
    skill:"Javascript" ,level:"advanced" ,color:"#ffdd00"
  },
  {
    skill:"Web Design" ,level:"beginner" ,color:"#81dfa5"
  },
  {
    skill:"Git and Github" ,level:"advanced" ,color:"#ef903c"
  },
  {
    skill:"React" ,level:"intermediate" ,color:"#1eced7"
  },
  {
    skill:"Svelte" ,level:"beginner" ,color:"#d5c4c4"
  }
]

function App() {
  return (
    <div>
      <Card />
    </div>
  );
}

function Card() {
  const array = skillArray;
  return (
    <div className="card">
      <Image photoName="/IMG_4057.jpg" />
      <div className="descContainer">
        <Name name="Sanil Dhamija" />
        <Desc />
        <div className="skillContainer">

        {array.map((skill) => (
              <SkillComponent skillObj={skill} key={skill.skill} />
            ))}

          {/* <Skills skill="HTML+CSS" symbol="0x0001F4AA" color="Blue" />
          <Skills skill="Javascript" symbol="0x0001F4AA" color="Yellow" />
          <Skills skill="Web Design" symbol="0x0001F4AA" color="#c0cfb2" />
          <Skills skill="Git and Github" symbol="0x0001F4AA" color="Red" />
          <Skills skill="React" symbol="0x0001F4AA" color="AliceBlue" />
          <Skills skill="Svelte" symbol="0x0001F4AA" color="Orange" /> */}
        </div>
      </div>
    </div>
  );
}

function Name(props) {
  return <h1 className="name">{props.name}</h1>;
}

function Image(props) {
  return <img className="devimage" src={props.photoName} alt="photu hai" />;
}

function Desc() {
  return (
    <p>
      Full Stack Web developer and teacher at Udemy. When not coding or
      preparing a course, I like to play board games, to cook (and eat), or to
      just enjoy the Portugese sun at the beach.
    </p>
  );
}

function SkillComponent({skillObj}) {
  return (
    <div className="skillBox" style={{ backgroundColor: skillObj.color }}>
      <h3>{skillObj.skill}</h3>
      {/* <span className="emoji" role="img">
        {String.fromCodePoint(skillObj.symbol)}
      </span> */}
      {<span className="emoji" role="img">
        {String.fromCodePoint(
          emoji(skillObj.level))}
      </span>}
    </div>
  );
}

function emoji(level) {
  switch(level) {
    case 'beginner':
      return '0x0001F476';
    case 'intermediate':
      return "0x0001F44D";
    default:  
      return '0x0001F4AA';
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
