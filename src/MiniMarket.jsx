import "./App.css";

const images = [
  "Work31.jpg",
  "Work32.jpg",
  "Work33.jpg",
  "Work34.jpg",
  "Work35.jpg",
  "Work36.jpg",
];

export default function MiniMarket({ setPage }) {
  return (
    <main className="market-page">
      <aside className="market-sidebar">
        <img className="market-logo" src="/images/Rectangle.svg" alt="W Studio" />

        <nav className="market-menu-card">
          <button onClick={() => setPage("about")}>ABOUT</button>
          <button onClick={() => setPage("work")}>WORK</button>
          <button onClick={() => setPage("australiana")}>AUSTRALIANA</button>
          <button onClick={() => setPage("tractor")}>TRACTOR RIDE</button>
          <button onClick={() => setPage("bear")}>CUDDLY BEAR</button>
          <button onClick={() => setPage("wonderland")}>WHIMSICAL WONDERLAND</button>
          <button className="nav-active" onClick={() => setPage("market")}>MINI MARKET</button>
          <button onClick={() => setPage("others")}>OTHERS</button>
        </nav>

        <h1 className="market-title">
          Mini Market
          <br />
          <span>2025</span>
        </h1>

        <footer className="market-footer">
          <p>Privacy Policy</p>
          <p>© W STUDIO by Claire Wei</p>
        </footer>
      </aside>

      <section className="market-gallery">
        {images.map((name) => (
          <img key={name} src={`/images/${name}`} alt={name} />
        ))}
      </section>
    </main>
  );
}
