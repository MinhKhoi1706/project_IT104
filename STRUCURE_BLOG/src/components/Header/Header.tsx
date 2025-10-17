import { useEffect, useRef, useState } from "react";
import "./Header.css";
import icon from "../../assets/images/iconHeader.png";
import avatar from "../../assets/images/avatarHeader.png";
import avatarStatus from "../../assets/images/avatarHeaderStatus.png";
import iconSearch from "../../assets/images/iconSearchBox.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <header className="app-header">
      <div className="header-left">
        <img src={icon} alt="logo" className="header-logo" />
        <span className="header-title">RIKKEI_EDU_BLOG</span>
      </div>

      <div className="header-center">
          <div className="search-box">
            <input placeholder="Search for articles" />
            <button className="search-btn">
              <img src={iconSearch} alt="search" className="search-icon" />
            </button>
          </div>
      </div>

      <div className="header-right">
        <div className="avatar-wrapper" ref={wrapperRef}>
          <div className="avatar" onClick={() => setOpen((s) => !s)}>
            <img src={avatar} alt="user" />
          </div>

          {open && (
            <div className="avatar-dropdown">
              <div className="dropdown-header">
                <img
                  src={avatarStatus}
                  alt="user"
                  className="dropdown-avatar"
                />
                <div className="dropdown-user">
                  <div className="user-name">Rikkei</div>
                  <div className="user-email">rikkei@gmail.com</div>
                </div>
              </div>
              <ul>
                <li>View profile</li>
                <li>Update profile picture</li>
                <li>Change password</li>
                <li className="logout">Log out</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
