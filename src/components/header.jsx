export const Header = () => {
    return (
        <header>
            <h1>My Website</h1>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default function Header2() {
    return (
        <div>
            <Header />
            <main>
                <h2>Welcome to My Website</h2>
                <p>This is a simple website built with React.</p>
            </main>
        </div>
    );
}