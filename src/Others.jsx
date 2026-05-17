import "./App.css";

const images = [
  "Work38.jpg",

  "Work40.jpg",
  "Work2.jpg",
  "Work39.jpg",
  "Work41.jpg",
  "Work42.jpg",
  "Work43.jpg",
  "Work44.jpg",
  "Work45.jpg",
  "Work46.jpg",
  "Work47.jpg",
  "Work48.jpg",
];

export default function Others({ setPage }) {
  return (
    <main className="others-page">
      <aside className="others-sidebar">
        <img className="others-logo" src="/images/Rectangle.svg" alt="W Studio" onClick={() => setPage("home")} />
        <nav className="others-menu">
          <button onClick={() => setPage("about")}>ABOUT</button>
          <button onClick={() => setPage("work")}>WORK</button>
          <button onClick={() => setPage("australiana")}>AUSTRALIANA</button>
          <button onClick={() => setPage("tractor")}>TRACTOR RIDE</button>
          <button onClick={() => setPage("bear")}>CUDDLY BEAR</button>
          <button onClick={() => setPage("wonderland")}>WHIMSICAL WONDERLAND</button>
          <button onClick={() => setPage("market")}>MINI MARKET</button>
          <button className="nav-active" onClick={() => setPage("others")}>OTHERS</button>
        </nav>

        <h1 className="others-title">
          Others
          <br />
          <span>2024–25</span>
        </h1>

        <footer className="others-footer">
          <p>Privacy Policy</p>
          <p>© W STUDIO by Claire Wei</p>
        </footer>
      </aside>

      <section className="others-content">
        {images.map((name) => (
          <img key={name} src={`/images/${name}`} alt={name} />
        ))}
      </section>
    </main>
  );
}
