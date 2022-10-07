import Link from "next/link";
const Header = () => {
    return (
        <header>
            <div>
                <h1 className="logo">
                    <Link href="/">SHANG</Link>
                </h1>
                <nav>
                    <Link href="/works">Project</Link>
                    <Link href="/posts">Post</Link>
                    <Link href="https://github.com/shangyuanhsu">Github</Link>
                    <Link href="https://www.linkedin.com/in/hsushangyuan/">Linkedin</Link>
                </nav>
                <div className="hamburgerBtn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

        </header>
    );
}

export default Header;