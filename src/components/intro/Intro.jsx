import './Intro.scss'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { init } from 'ityped'
import { useEffect, useRef } from 'react';


export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    // console.log(textRef)
    init(textRef.current, {
      backDelay: 3000,
      backSpeed: 1000,
      showCursor: true,
      strings: [" Jason ", " Bajwa"]
    }



    )
  }, [])

  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assests/3IsN.gif"/>
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h2>HEllO MY NAME IS </h2>
          <h2>
            My Name is
            <span ref={textRef}></span>
          </h2>
        </div>

        <a href='#portfolio'>
          <ArrowDownwardIcon />
        </a>
      </div>

    </div>
  )
}
