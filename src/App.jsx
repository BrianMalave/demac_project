import './styles/App.scss'
import { Header, Hero, Field, Project, Service, Contact, Footer, Partner, Slider } from "./components"
const App = () => (
  <div>
    <div className='mainContainer mainContainerColor fixed p-0'>
        <Header />
    </div>
    <div id='nosotros' className='mainContainer mainContainerColor pt-140'>
        <Hero />
    </div>
    <div id='field' className='mainContainer'>
        <Field />
    </div>
    <div id='servicios' className='mainContainer mainContainerSubcolor pb-140'>
        <Service />
    </div>
    <div id='project' className='mainContainer'>
        <Project />
    </div>
        <Slider />
    <div id='partners' className='mainContainer pt-100'>
        <Partner />
    </div>
    <div id='contacto' className='mainContainer mainContainerSubColorTwo pb-140'>
        <Contact />
    </div>
    <div id='footer' className='mainContainer mainContainerColor pt-140'>
        <Footer />
    </div>
  </div>
);
export default App
