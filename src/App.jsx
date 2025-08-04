import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Tech from './components/Tech'
import Project from './components/Project'
import Contact from './components/Contact'
import './App.css'
import './index.css'



function App() {
  return (
    <>
      <div className='overflow-x-hidden text-neutral-300'>
        <div className='fixed top-0 w-full h-full -z-10'>
        <div className="fixed inset-0 z-[-2] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </div>

         <div className='px-8 mx-auto'>
            <Navbar />
            <Hero />
            <About />
            <Tech/>
            <Project/>
            <Contact/>
         </div>
        
      </div>
      
    </>
  )
}

export default App
