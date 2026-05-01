import "./App.css";

const images = [
  "Work2.jpg",
  "Work3.jpg",
  "Work4.jpg",
  "Work5.jpg",
  "Work6.jpg",
  "Work7.jpg",
  "Work8.jpg",
  "Work9.jpg",
  "Work10.jpg",
  "Work11.jpg",
  "Work12.jpg",
];

export default function Australiana({ setPage }) {
  return (
    <main className="australiana-page">
      {/* 左侧 */}
      <aside className="australiana-sidebar">
        <img
          className="australiana-logo"
          src="/images/Rectangle.svg"
          alt="W Studio"
          onClick={() => setPage("home")}
        />

        <nav className="australiana-menu-card">
          <button onClick={() => setPage("about")}>ABOUT</button>
          <button onClick={() => setPage("work")}>WORK</button>
          <button className="nav-active">AUSTRALIANA</button>
          <button onClick={() => setPage("tractor")}>TRACTOR RIDE</button>
          <button onClick={() => setPage("bear")}>CUDDLY BEAR</button>
          <button onClick={() => setPage("wonderland")}>
            WHIMSICAL WONDERLAND
          </button>
          <button onClick={() => setPage("market")}>MINI MARKET</button>
          <button onClick={() => setPage("others")}>OTHERS</button>
        </nav>

        <footer className="australiana-footer">
          <p>Privacy Policy</p>
          <p>© W STUDIO by Claire Wei</p>
        </footer>
      </aside>

      {/* 右侧内容 */}
      <section className="australiana-content">
        {/* Work1（顶部裁切图 + 左侧标题块） */}
        <div className="australiana-cover-block">
          <img
            className="australiana-cover"
            src="/images/Work1_1.jpg"
            alt="Australiana"
          />
          <div className="australiana-cover-caption">
            <p>Australiana</p>
            <p>2025</p>
          </div>
        </div>

        {/* 其余图片 */}
        <div className="australiana-gallery">
          {images.map((name) => (
            <img key={name} src={`/images/${name}`} alt={name} />
          ))}
        </div>
      </section>
    </main>
  );
}
