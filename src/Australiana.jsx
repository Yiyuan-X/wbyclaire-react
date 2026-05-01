import "./App.css";

const images = [
    "Work1.jpg",
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
            <aside className="australiana-sidebar">
                <img className="australiana-logo" src="/images/Rectangle.svg" alt="W Studio" />

                <nav className="australiana-menu-card">
                    <button onClick={() => setPage("about")}>ABOUT</button>
                    <button onClick={() => setPage("work")}>WORK</button>
                    <button className="nav-active" onClick={() => setPage("australiana")}>AUSTRALIANA</button>
                    <button onClick={() => setPage("tractor")}>TRACTOR RIDE</button>
                    <button onClick={() => setPage("bear")}>CUDDLY BEAR</button>
                    <button onClick={() => setPage("wonderland")}>WHIMSICAL WONDERLAND</button>
                    <button onClick={() => setPage("market")}>MINI MARKET</button>
                    <button onClick={() => setPage("others")}>OTHERS</button>
                </nav>

                <h1 className="australiana-title">
                    Australiana
                    <br />
                    <span>2025</span>
                </h1>

                <footer className="australiana-footer">
                    <p>Privacy Policy</p>
                    <p>© W STUDIO by Claire Wei</p>
                </footer>
            </aside>

            <section className="australiana-gallery">
                {images.map((name) => (
                    <img key={name} src={`/images/${name}`} alt={name} />
                ))}
            </section>
        </main>
    );
}
