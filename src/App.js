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
      btn-deployed={project[0].btn-deployed}
      btn-github={project[0].btn-github}
      />
      <Projects 
      mockup={project[1].mockup}
      image={project[1].image}
      overview={project[1].overview}
      btn-deployed={project[1].btn-deployed}
      btn-github={project[1].btn-github}
      />
      <Projects mockup={project[2].mockup}
      image={project[2].image}
      overview={project[2].overview}
      btn-deployed={project[2].btn-deployed}
      btn-github={project[2].btn-github}
      />
      <Projects mockup={project[3].mockup}
      image={project[3].image}
      overview={project[3].overview}
      btn-deployed={project[3].btn-deployed}
      btn-github={project[3].btn-github}
      />
      <Projects mockup={project[4].mockup}
      image={project[4].image}
      overview={project[4].overview}
      btn-deployed={project[4].btn-deployed}
      btn-github={project[4].btn-github}
      />
      <Projects 
      mockup={project[5].mockup}
      image={project[5].image}
      overview={project[5].overview}
      btn-deployed={project[5].btn-deployed}
      btn-github={project[5].btn-github}/>
    </>


  );
}

export default App;
