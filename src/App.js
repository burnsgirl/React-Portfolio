import logo from './logo.svg';
import './App.css';
import Doctype from './components/doctype';
import Header from './components/header/header';
import Project from './components/projects/projects';
import projects from './project.json';

function App() {
  return (

    <>
      <Doctype />
      <Header />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </>


  );
}

export default App;
