import Link from 'next/link'; 
const Navbar = () => (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <Link href="/"><a class="nav-link">Home <span class="sr-only">(current)</span></a></Link>
                </li>
                <li class="nav-item">
                    <Link href="/about"><a class="nav-link">About</a></Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navbar;