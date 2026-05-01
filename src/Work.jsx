import "./App.css";

const workImages = [
  "Work1.jpg",
  "Work13.jpg",
  "Work19.jpg",
  "Work25.jpg",
  "Work31.jpg",
];

export default function Work({ setPage }) {
  return (
    <main className="work-page">
      <aside className="work-sidebar">
      <img className="work-logo" src="/images/Rectangle.svg" alt="W Studio" onClick={() => setPage("home")} />
<nav className="work-menu-card">
  <button onClick={() => setPage("about")}>ABOUT</button>
  <button className="nav-active" onClick={() => setPage("work")}>WORK</button>
  <button onClick={() => setPage("australiana")}>AUSTRALIANA</button>
  <button onClick={() => setPage("tractor")}>TRACTOR RIDE</button>
  <button onClick={() => setPage("bear")}>CUDDLY BEAR</button>
  <button onClick={() => setPage("wonderland")}>WHIMSICAL WONDERLAND</button>
  <button onClick={() => setPage("market")}>MINI MARKET</button>
  <button onClick={() => setPage("others")}>OTHERS</button>
</nav>
        <h1 className="work-heading">My Work</h1>

        <footer className="work-footer">
          <p>Privacy Policy</p>
          <p>© W STUDIO by Claire Wei</p>
        </footer>
      </aside>

      <section className="work-gallery">
        {workImages.map((name) => (
          <img key={name} src={`/images/${name}`} alt={name} />
        ))}
      </section>
    </main>
  );
}
