import "./App.css";

export default function Home({ setPage }) {
  return (
    <main className="site-shell">

      <aside className="sidebar">
        <img
          className="logo"
          src="/images/Rectangle.svg"
          alt="W Studio"
          onClick={() => setPage("home")}
        />
        <nav className="menu-card">
          <button onClick={() => setPage("about")}>ABOUT</button>
          <button onClick={() => setPage("work")}>WORK</button>
          <button onClick={() => setPage("australiana")}>AUSTRALIANA</button>
          <button onClick={() => setPage("tractor")}>TRACTOR RIDE</button>
          <button onClick={() => setPage("bear")}>CUDDLY BEAR</button>
          <button onClick={() => setPage("wonderland")}>WHIMSICAL WONDERLAND</button>
          <button onClick={() => setPage("market")}>MINI MARKET</button>
          <button onClick={() => setPage("others")}>OTHERS</button>
        </nav>
        <h1 className="headline">
          Art direction
          <br />& product
          <br />design
          <br />for children
          <br />and early
          <br />learning
        </h1>

        <footer className="footer">
          <p>Privacy Policy</p>
          <p>© W STUDIO by Claire Wei</p>
        </footer>
      </aside>

      <section className="hero">
        <img src="/images/home.jpg" alt="W Studio home" />
      </section>
    </main>
  );
}
