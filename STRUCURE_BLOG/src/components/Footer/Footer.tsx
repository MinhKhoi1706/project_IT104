import './Footer.css';
import birdIcon from '../../assets/images/iconFooterBird.png';
import fbIcon from '../../assets/images/iconFooterFB.png';
import igIcon from '../../assets/images/iconFooterIG.png';
import gitIcon from '../../assets/images/iconFooterGit.png';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="col brand">
            <h2>MY BLOG</h2>
          </div>

          <div className="col about">
            <h4>About<br/>Rareblocks</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet
              accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper
              amet adipiscing fermentum.
            </p>
          </div>

          <div className="col links">
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>

          <div className="col links">
            <h4>Help</h4>
            <ul>
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="col links">
            <h4>Resources</h4>
            <ul>
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </div>
        </div>

        <div className="social-row">
          <div className="social-icons">
            <img src={birdIcon} alt="twitter" className="social-icon" />
            <img src={fbIcon} alt="facebook" className="social-icon" />
            <img src={igIcon} alt="instagram" className="social-icon" />
            <img src={gitIcon} alt="github" className="social-icon" />
          </div>
        </div>
      </div>
    </footer>
  );
}
