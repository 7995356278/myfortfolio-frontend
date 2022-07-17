import react from 'react';
import Home from './components/Home'
import Navabar from './Navbar';
import About from './pages/About';
import Project from './pages/Project';

function App() {
  let Component
  switch (window.location.pathname){
    case "/":
      Component = <Home />
      break
    case "/project":
      Component =< Project />
      break
    case "/about":
      Component  = <About /> 
      break  
  }
return (
<>
<Navabar />
{Component}
</>
 
 

);
}
export default App;