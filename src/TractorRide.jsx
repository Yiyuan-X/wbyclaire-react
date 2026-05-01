import "./App.css";

const images = [
  "Work13.jpg",
  "Work14.jpg",
  "Work15.jpg",
  "Work16.jpg",
  "Work17.jpg",
  "Work18.jpg",
];

export default function TractorRide({ setPage }) {
  return (
    <main className="tractor-page">
      <aside className="tractor-sidebar">
        <img className="tractor-logo" src="/images/Rectangle.svg" alt="W Studio" onClick={() => setPage("home")} />
        <nav className="tractor-menu-card">
          <button onClick={() => setPage("about")}>ABOUT</button>
          <button onClick={() => setPage("work")}>WORK</button>
          <button onClick={() => setPage("australiana")}>AUSTRALIANA</button>
          <button className="nav-active" onClick={() => setPage("tractor")}>TRACTOR RIDE</button>
          <button onClick={() => setPage("bear")}>CUDDLY BEAR</button>
          <button onClick={() => setPage("wonderland")}>WHIMSICAL WONDERLAND</button>
          <button onClick={() => setPage("market")}>MINI MARKET</button>
          <button onClick={() => setPage("others")}>OTHERS</button>
        </nav>

        <h1 className="tractor-title">
          Tractor Ride
          <br />
          <span>2024</span>
        </h1>

        <footer className="tractor-footer">
          <p>Privacy Policy</p>
          <p>© W STUDIO by Claire Wei</p>
        </footer>
      </aside>

      <section className="tractor-gallery">
        {images.map((name) => (
          <img key={name} src={`/images/${name}`} alt={name} />
        ))}
      </section>
    </main>
  );
}
