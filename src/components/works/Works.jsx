import './Works.scss'
import DevicesIcon from '@mui/icons-material/Devices';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import { useState } from 'react';

export default function Works() {

  const [currentSlider, setCurrentSlider] = useState(0);

    //**** AT SOME POINT COME BACK< PUT THIS DATA IN ITS OWN FILE. LOOK AT PORTFOLIO FOR REFERENCE*/
    //ALSO THERE IS A BLANK SLIDE BC I DID NOT HAVE A THIRD DATA VALUE. I COULD ADD LATER
  const data = [
    {
      id: "1",
      icon: <DevicesIcon/>,
      title: "WORKING TITLE",
      desc: 
        "Lorem",
      img: "../assests/7_of_clubs.png",  
    },
    {
      id: "2",
      icon: <DevicesIcon/>,
      title: "WORKING TITLE2",
      desc: 
        "Lorem porstat",
      img: "../assests/7_of_clubs.png",  
    }
  ];

  const handleClick = (direction) => {
    /*
    EXPLAINATION:
      IF BUTTON PRESSED IS "LEFT" THAN if the current slider is greater than zero index, subtract 1 otherwise go to last slide (2)
      ELSE GO TO THE RIGHT AND IF THE CURRETNSLIDE INDEX IS AT DATA.LENGTH-1 GO BACK TO THE FIRST SLIDE (0)
    */
    direction === "left" ? setCurrentSlider(currentSlider > 0 ? currentSlider-1 : 2) :
    setCurrentSlider(currentSlider < data.length-1 ? currentSlider+1 : 0);
  }

  return (
    <div className='works' id="works">
      <div className="slider" style={{transform:`translateX(-${currentSlider * 100}vw)`}}>
        {data.map((d) => (
          <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="leftImgContainer">
                  {d.icon}
                </div>
                <h2>{d.title}</h2>
                <p>
                  {d.desc}
                </p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src="../assests/7_of_clubs.png" />
            </div>
          </div>
        </div>
        ))}
      </div>
      <ArrowCircleLeftRoundedIcon className='arrow left' onClick={() => {handleClick("left")}} />
      <ArrowCircleRightRoundedIcon className='arrow right' onClick={() => {handleClick()}}/>
    </div>
  )
}
