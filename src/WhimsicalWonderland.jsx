import "./App.css";

const images = [
  "Work25.jpg",
  "Work26.jpg",
  "Work27.jpg",
  "Work28.jpg",
  "Work29.jpg",
  "Work30.jpg",
];

export default function WhimsicalWonderland({ setPage }) {
  return (
    <main className="wonderland-page">
      <aside className="wonderland-sidebar">
        <img
          className="wonderland-logo"
          src="/images/Rectangle.svg"
          alt="W Studio"
        />

        <nav className="wonderland-menu-card">
          <button onClick={() => setPage("about")}>ABOUT</button>
          <button onClick={() => setPage("work")}>WORK</button>
          <button onClick={() => setPage("australiana")}>AUSTRALIANA</button>
          <button onClick={() => setPage("tractor")}>TRACTOR RIDE</button>
          <button onClick={() => setPage("bear")}>CUDDLY BEAR</button>
          <button className="nav-active" onClick={() => setPage("wonderland")}>WHIMSICAL WONDERLAND</button>
          <button onClick={() => setPage("market")}>MINI MARKET</button>
          <button onClick={() => setPage("others")}>OTHERS</button>
        </nav>

        <h1 className="wonderland-title">
          Whimsical
          <br />
          Wonderland
          <br />
          <span>2025</span>
        </h1>

        <footer className="wonderland-footer">
          <p>Privacy Policy</p>
          <p>© W STUDIO by Claire Wei</p>
        </footer>
      </aside>

      <section className="wonderland-gallery">
        {images.map((name) => (
          <img key={name} src={`/images/${name}`} alt={name} />
        ))}
      </section>
    </main>
  );
}
