import './AddPost.css';
import iconCloud from '../../assets/images/iconAddPostClound.png';

export default function AddPost() {
  return (
    <div className="add-post-page">
      <div className="container">
        <div className="form-card">
          <button className="close-btn">X</button>
          <h2 className="form-title">📝 Add New Article</h2>

          <label>Title:</label>
          <input type="text" className="input" />

          <label>Article Categories:</label>
          <div className="select-like"> </div>

          <label>Mood:</label>
          <div className="select-like">🙂 Happy</div>

          <label>Content:</label>
          <textarea className="textarea" />

          <div className="status-row">
            <label>Status</label>
            <div className="radios">
              <label><input type="radio" name="status" defaultChecked /> public</label>
              <label><input type="radio" name="status" /> private</label>
            </div>
          </div>

          <div className="upload-box">
            <div className="upload-icon"><img src={iconCloud} alt="upload"/></div>
            <div className="upload-text">Browse and chose the files you want to upload from your computer</div>
          </div>

          <button className="add-btn">Add</button>
        </div>
      </div>
    </div>
  );
}
