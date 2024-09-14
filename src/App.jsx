import './styles/App.scss'
import { Header, Hero, Field, Service, Contact, Footer } from "./components"
const App = () => (
  <div>
    <div className='mainContainer mainContainerColor fixed p-0'>
        <Header />
    </div>
    <div className='mainContainer mainContainerColor pt-140'>
        <Hero />
    </div>
    <div className='mainContainer'>
        <Field />
    </div>
    <div className='mainContainer mainContainerSubcolor pb-140'>
        <Service />
    </div>
    <div className='mainContainer mainContainerSubColorTwo pb-140'>
        <Contact />
    </div>
    <div className='mainContainer mainContainerColor pt-140'>
        <Footer />
    </div>
  </div>
);
export default App
