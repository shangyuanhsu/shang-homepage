import Footer from "./Footer";
import Header from "./Header";

const Layuot = ({ children }) => {
    return (
        <div className="content">
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default Layuot;