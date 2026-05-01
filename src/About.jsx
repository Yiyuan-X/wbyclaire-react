import "./App.css";

export default function About({ setPage }) {
  return (
    <main className="about-page">
      <aside className="about-sidebar">
        <img className="about-logo" src="/images/Rectangle.svg" alt="W Studio" />

        <nav className="about-menu-card">
          <button className="nav-active" onClick={() => setPage("about")}>ABOUT</button>
          <button onClick={() => setPage("work")}>WORK</button>
          <button onClick={() => setPage("australiana")}>AUSTRALIANA</button>
          <button onClick={() => setPage("tractor")}>TRACTOR RIDE</button>
          <button onClick={() => setPage("bear")}>CUDDLY BEAR</button>
          <button onClick={() => setPage("wonderland")}>WHIMSICAL WONDERLAND</button>
          <button onClick={() => setPage("market")}>MINI MARKET</button>
          <button onClick={() => setPage("others")}>OTHERS</button>
        </nav>

        <h1 className="about-title">
          W STUDIO
          <br />
          by Claire Wei
        </h1>

        <footer className="about-footer">
          <p>Privacy Policy</p>
          <p>© W STUDIO by Claire Wei</p>
        </footer>
      </aside>

      <section className="about-content">
        <p>
          I am a product designer and art director with experience designing and
          delivering commercial product ranges for early-childhood and nursery
          environments.
        </p>

        <p>
          This portfolio features selected work created during my time at Living
          Textiles Co (2024–2025), where I worked across product design and art
          direction for baby and children’s collections. I contributed to the
          development of seasonal ranges, supporting projects from early concept
          and visual direction through to final production.
        </p>

        <p>
          My work focuses on creating products that balance aesthetic clarity,
          safety requirements, and everyday functionality, while also nurturing a
          child’s early experience of the world. I design with an understanding of
          commercial constraints, customer needs, and manufacturing
          considerations, maintaining a visual language that supports comfort,
          emotional connection, and gentle guidance.
        </p>

        <p>
          Across bedding, bath textiles, toys, and nursery accessories, I build
          cohesive product systems through colour, pattern, illustration, texture,
          and material decisions. I work closely with cross-functional teams to
          ensure designs are consistent across categories and aligned with brand
          direction and market positioning.
        </p>

        <p>
          I am particularly interested in how thoughtful design can nurture and
          guide children as they grow, shaping early environments that feel loving,
          familiar, and engaging—supporting comfort, curiosity, and a positive
          sense of self from the very beginning.
        </p>

        <p>
          For enquiries or opportunities, please get in touch:
          <br />
          <a href="mailto:hi.claireww@gmail.com">hi.claireww@gmail.com</a>
        </p>
      </section>
    </main>
  );
}
