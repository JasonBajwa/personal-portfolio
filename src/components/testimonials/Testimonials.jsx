import "./Testimonials.scss"
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import VideoCameraBackRoundedIcon from '@mui/icons-material/VideoCameraBackRounded';


export default function Testimonials() {

  const data = [
    {
      id: 1,
      name: "RICCHY",
      title: "Student",
      img: "../assests/portrait-white-man-isolated.jpg",
      icon: <VideoCameraBackRoundedIcon />,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ex facere laboriosam, soluta atque quod eveniet quo libero inventore harum qui dolorem officia nobis. Harum ullam reprehenderit hic doloribus corrupti!",
    },
    {
      id: 2,
      name: "JPOEY",
      title: "Student",
      img: "../assests/portrait-white-man-isolated.jpg",
      icon: <VideoCameraBackRoundedIcon />,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ex facere laboriosam, soluta atque quod eveniet quo libero inventore harum qui dolorem officia nobis. Harum ullam reprehenderit hic doloribus corrupti!",
      featured: true,
    },
    {
      id: 3,
      name: "BOBBY",
      title: "Student",
      img: "../assests/portrait-white-man-isolated.jpg",
      icon: <VideoCameraBackRoundedIcon />,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ex facere laboriosam, soluta atque quod eveniet quo libero inventore harum qui dolorem officia nobis. Harum ullam reprehenderit hic doloribus corrupti!",
    },
  ]

  return (
    <div className="testimonials" id="testimonials">
      <h1>TESTIMONIALS</h1>
      <div className="container">

        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <ArrowForwardRoundedIcon className="topLeft" />
              <img src={d.img} className="topCenter" />
              <div className="topRight">{d.icon}</div>
              
            
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
