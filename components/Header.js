import { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ThemeContext } from "../contexts/ThemeContext";
import Image from "next/image";

const Header = () => {
    const router = useRouter();
    const theme = useContext(ThemeContext);
    const [hamburger, setHamburger] = useState(false);

    const handleTheme = () => {
        theme.changeTheme();
    }
    // type : 0 = not click hamburger btn 
    // type : 1 = click hamburger btn 
    const handleHamburgerBtn = (type = 0) => {
        setHamburger(type === 0 ? false : !hamburger);
    }
    return (
        <header>
            <div>
                <h1 className="logo" onClick={() => { handleHamburgerBtn() }}>
                    <Link href="/">SHANG</Link>
                </h1>
                <nav className={hamburger === true ? "show" : ""}>
                    <ul>
                        <li className={router.pathname == "/projects" || router.pathname == "/projects/[id]" ? "active" : ""} onClick={() => { handleHamburgerBtn() }}>
                            <Link href="/projects">Projects</Link>
                        </li>
                        <li className={router.pathname == "/posts" ? "active" : ""} onClick={() => { handleHamburgerBtn() }}>
                            <Link href="/posts">Posts</Link>
                        </li>
                        <li >
                            <Link href="https://github.com/shangyuanhsu">Github</Link>
                        </li>
                    </ul>
                </nav>
                <div  className={hamburger === true ? "hamburgerBtn hamburgerBtnCkecked" : "hamburgerBtn"} onClick={() => { handleHamburgerBtn(1) }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="themeBtn">
                    <Image src={theme.type === true ? "/../public/img/sun.png" : "/../public/img/moon.png"} width={100} height={100} alt="" onClick={handleTheme} />
                </div>
            </div>
        </header>
    );
}

export default Header;