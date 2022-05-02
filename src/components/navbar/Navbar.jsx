import './navbar.scss';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <a href="#landingpage" className="logo">
            <h2>EM</h2>
          </a>
        </div>
        <div className="right">
          <div className="pages">
            <a href="" className="pagelink">
              <h4>Resume</h4>
            </a>
            <a href="" className="pagelink">
              Projects
            </a>
            <a href="" className="pagelink">
              About
            </a>
            <a href="" className="pagelink">
              Art
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
