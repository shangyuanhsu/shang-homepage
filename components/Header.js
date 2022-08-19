import Link from "next/link";

const Header = () => {
    return (
        <header>
            <div className="logo">
            <Link href="/">Logo</Link>
            </div>
            <nav>
                <Link href="/works">WORKS</Link>
                <Link href="/posts">POSTS</Link>
                <Link href="https://github.com/shangyuanhsu" target="_blank">GITHUB</Link>
            </nav>
        </header>
    );
}

export default Header;