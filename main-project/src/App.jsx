import { useState,useEffect } from 'react'
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import Row from './Components/Row/Row'
import Footer from './Components/Footer/Footer'
import './App.css'
// import YouTube from 'react-youtube';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [banner,setBanner] = useState({})
  const [target,setTarget] = useState({})

//   const opts = {
//     height: 350 ,
//     width: 800,
//     playerVars: {
//         autoplay: 1,
//         controls: 0,
//         showinfo: 0,
//         mute: 1,
//         loop: 1,
//         playlist:"XD_MLvGrGCY",
//     },
// };


  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercentage >= 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
   
     <Banner target={target} setTarget={setTarget} title={"Popular on Netflix"} scrolled={scrolled}/>
     <div className='row-areas'>
     <Row target={target} setTarget={setTarget} title={"Romance"} genres={10749}/>
     <Row target={target} setTarget={setTarget} title={"Horror"} genres={27}/>
     <Row target={target} setTarget={setTarget} title={"Action Movies"} genres={28}/>
     </div>
     <Footer/>
    </>
  )
}

export default App
