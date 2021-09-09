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
      <Projects />
      <Projects />
      <Projects />
      <Projects />
      <Projects />
    </>


  );
}

export default App;
