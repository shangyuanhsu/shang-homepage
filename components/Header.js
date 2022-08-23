import Link from "next/link";
const Header = () => {
    return (
        <header>
            <div>
                <div className="logo">
                    <Link href="/">SHANG</Link>
                </div>
                <nav>
                    <Link href="/works">Project</Link>
                    <Link href="/posts">Post</Link>
                    <Link href="https://github.com/shangyuanhsu" target="_blank">Github</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;