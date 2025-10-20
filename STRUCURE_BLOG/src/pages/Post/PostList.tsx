import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./PostList.css";
import { useState } from "react";
import img1 from "../../assets/images/postList1.png";
import img2 from "../../assets/images/postList2.png";
import img3 from "../../assets/images/postList3.png";
import img4 from "../../assets/images/postList4.png";
import img5 from "../../assets/images/postList5.png";
import img6 from "../../assets/images/postList6.png";

export default function PostList() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const posts = [
    {
      img: img1,
      date: "2025-02-25",
      title: "A Productive Day at Work",
      tag: "Daily Journal",
      excerpt:
        "Today was a really productive day at work. I managed to finish a report ahead of schedule and received positive feedback from my manager.",
    },
    {
      img: img2,
      date: "2025-02-24",
      title: "My First Job Interview Experience",
      tag: "Work & Career",
      excerpt:
        "I had my first job interview today! I was nervous at first, but as the conversation went on, I felt more confident.",
    },
    {
      img: img3,
      date: "2025-02-23",
      title: "Overthinking Everything",
      tag: "Personal Thoughts",
      excerpt:
        "Lately, I have been overthinking everything, from small decisions to bigger life choices. I know I should trust myself more.",
    },
    {
      img: img4,
      date: "2025-02-16",
      title: "How collaboration makes us better designers",
      tag: "Work & Career",
      excerpt:
        "Collaboration can make our teams stronger, and our individual designs better.",
    },
    {
      img: img5,
      date: "2025-02-16",
      title: "Our top 10 Javascript frameworks to use",
      tag: "Work & Career",
      excerpt:
        "JavaScript frameworks make development easy with extensive features and functionalities.",
    },
    {
      img: img6,
      date: "2025-02-05",
      title: "Podcast: Creating a better CX Community",
      tag: "Emotions & Feelings",
      excerpt:
        "Starting a community doesn't need to be complicated, but how do you get started?",
    },
  ];

  return (
    <div className="page-post-list">
      <Header />

      <main className="content">
        <div className="container">
          <h3 className="section-title">Recent blog posts</h3>

          <div className="featured">
            <div className="left">
              <img src={img1} alt="featured" />
              <p className="meta">Date: 2025-02-25</p>
              <h4>A Productive Day at Work</h4>
              <p className="excerpt">
                Today was a really productive day at work. I managed to finish a
                report ahead of schedule and received positive feedback from my
                manager.
              </p>
              <div className="tag-pill">Daily Journal</div>
            </div>

            <div className="mid">
              <div className="small-post">
                <img src={img2} alt="s1" />
                <div className="small-body">
                  <p className="meta">Date: 2025-02-24</p>
                  <h5>My First Job Interview Experience</h5>
                  <p className="small-excerpt">
                    I had my first job interview today! I was nervous at first,
                    but as the conversation went on, I felt more confident.
                  </p>
                  <div className="tag-pill small">Work & Career</div>
                </div>
              </div>

              <div className="small-post">
                <img src={img3} alt="s2" />
                <div className="small-body">
                  <p className="meta">Date: 2025-02-23</p>
                  <h5>Overthinking Everything</h5>
                  <p className="small-excerpt">
                    Lately, I have been overthinking everything, from small
                    decisions to bigger life choices.
                  </p>
                  <div className="tag-pill small green">Personal Thoughts</div>
                </div>
              </div>
            </div>

            {/* */}
          </div>

          <div className="links-row">
            <a>All blog posts</a>
            <a>All my posts</a>
          </div>

          {/* Category filters - click a span to filter posts by tag */}
          <div className="categories-row">
            {Array.from(new Set(posts.map((p) => p.tag))).map((tag) => (
              <span
                key={tag}
                className={tag === selectedTag ? "active" : ""}
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                style={{ cursor: "pointer" }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="grid-posts">
            {/** filter posts by selectedTag (null = all) */}
            {posts
              .filter((p) => (selectedTag ? p.tag === selectedTag : true))
              .map((p, i) => (
              <article className="post-card" key={i}>
                <img src={p.img} alt={p.title} />
                <div className="post-body">
                  <p className="meta">Date: {p.date}</p>
                  <h4>{p.title}</h4>
                  <p className="excerpt">{p.excerpt}</p>
                  <p className="tag">{p.tag}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="pagination">
            <button className="prev">← Previous</button>
            <div className="pages">
              <button className="page active">1</button>
              <button className="page">2</button>
              <button className="page">3</button>
            </div>
            <button className="next">Next →</button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
