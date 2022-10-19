import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
    const router = useRouter();
    console.log(router)

    return (
        <header>
            <div>
                <h1 className="logo">
                    <Link href="/">SHANG</Link>
                </h1>
                <nav className="show">
                    <ul>
                        <li className={router.pathname == "/works" || router.pathname =="/works/[id]" ? "active" : ""}>
                            <Link href="/works">Projects</Link>
                        </li>
                        <li className={router.pathname == "/posts" ? "active" : ""}>
                            <Link  href="/posts">Posts</Link>
                        </li>
                        <li>
                            <Link href="https://github.com/shangyuanhsu">Github</Link>
                        </li>
                    </ul>
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