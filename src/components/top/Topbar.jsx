import "./Topbar.scss";
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export default function Topbar({menuOpen, setMenuOpen}) {
  // export default function Topbar() {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
    {/* <div className='topbar'> */}
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">HOME</a>
          <div className="itemContainer">
            <AccessibilityIcon className="icon"/>
            <span>+1 (770)-715-7202</span>
          </div>
          <div className="itemContainer">
            <AlternateEmailIcon className="icon"/>
            <span>bajwajasons@gmail.com</span>
          </div>
        </div>

        <h1>welcome</h1>

        <div className="right">
          {/* <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}> */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>

            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>

          </div>
        </div>
      </div>
    </div>
  )
}
