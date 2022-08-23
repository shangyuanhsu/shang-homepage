import Footer from "./Footer";
import Header from "./Header";

const Layuot = ({ children }) => {
    return (
        <div className="content">
            <Header />
            <main>
            {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layuot;