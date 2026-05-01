import "./App.css";

export default function Home({ goWork }) {
  return (
    <main className="site-shell">

      <aside className="sidebar">
        <img className="logo" src="/images/Rectangle.svg" alt="W Studio" />


                <nav className="about-menu-card">
                    <button className="nav-active" onClick={() => setPage("about")}>ABOUT</button>
                    <button className="nav-active" onClick={() => setPage("work")}>WORK</button>
                    <button className="nav-active" onClick={() => setPage("australiana")}>AUSTRALIANA</button>
                    <button className="nav-active" onClick={() => setPage("tractor")}>TRACTOR RIDE</button>
                    <button className="nav-active" onClick={() => setPage("bear")}>CUDDLY BEAR</button>
                    <button className="nav-active" onClick={() => setPage("wonderland")}>WHIMSICAL WONDERLAND</button>
                    <button className="nav-active" onClick={() => setPage("market")}>MINI MARKET</button>
                    <button className="nav-active" onClick={() => setPage("others")}>OTHERS</button>
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
