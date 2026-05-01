import "./App.css";

const images = [
  "Work19.jpg",
  "Work20.jpg",
  "Work21.jpg",
  "Work22.jpg",
  "Work23.jpg",
  "Work24.jpg",
];

export default function CuddlyBear({ setPage }) {
  return (
    <main className="bear-page">
      <aside className="bear-sidebar">
        <img className="bear-logo" src="/images/Rectangle.svg" alt="W Studio" onClick={() => setPage("home")} />
        <nav className="bear-menu-card">
          <button onClick={() => setPage("about")}>ABOUT</button>
          <button onClick={() => setPage("work")}>WORK</button>
          <button onClick={() => setPage("australiana")}>AUSTRALIANA</button>
          <button onClick={() => setPage("tractor")}>TRACTOR RIDE</button>
          <button className="nav-active" onClick={() => setPage("bear")}>CUDDLY BEAR</button>
          <button onClick={() => setPage("wonderland")}>WHIMSICAL WONDERLAND</button>
          <button onClick={() => setPage("market")}>MINI MARKET</button>
          <button onClick={() => setPage("others")}>OTHERS</button>
        </nav>

        <h1 className="bear-title">
          Cuddly Bear
          <br />
          <span>2024</span>
        </h1>

        <footer className="bear-footer">
          <p>Privacy Policy</p>
          <p>© W STUDIO by Claire Wei</p>
        </footer>
      </aside>

      <section className="bear-gallery">
        {images.map((name) => (
          <img key={name} src={`/images/${name}`} alt={name} />
        ))}
      </section>
    </main>
  );
}
