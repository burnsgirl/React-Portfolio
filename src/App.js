import logo from './logo.svg';
import './App.css';
import Doctype from './components/doctype';
import Header from './components/header/header';
import Projects from './components/projects/projects';
import project from './project.json';

function App() {
  return (

    <>
      <Doctype />
      <Header />
      <Projects 
      mockup={project[0].mockup}
      image={project[0].image}
      overview={project[0].overview}
      deployed={project[0].deployed}
      github={project[0].github}
      />
      {/* <Projects 
      mockup={project[1].mockup}
      image={project[1].image}
      overview={project[1].overview}
      deployed={project[1].deployed}
      github={project[1].github}
      />
      <Projects mockup={project[2].mockup}
      image={project[2].image}
      overview={project[2].overview}
      deployed={project[2].deployed}
      github={project[2].github}
      />
      <Projects mockup={project[3].mockup}
      image={project[3].image}
      overview={project[3].overview}
      deployed={project[3].deployed}
      github={project[3].github}
      /> */}
      {/* <Projects mockup={project[4].mockup}
      image={project[4].image}
      overview={project[4].overview}
      deployed={project[4].deployed}
      github={project[4].github}
      />
      <Projects 
      mockup={project[5].mockup}
      image={project[5].image}
      overview={project[5].overview}
      deployed={project[5].deployed}
      github={project[5].github}/>
     */}
</>

  );
}

export default App;
