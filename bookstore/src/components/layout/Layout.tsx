import Footer from "../common/Footer";
import Header from "../common/Header";


/* React Node -> React Element -> JSX Element */
interface LayoutProps {
    children: React.ReactNode;  // ReactNode -> React로 만든 모든 component가 배치될 수 있음
}

function Layout({children}: LayoutProps) {
    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    );
}

export default Layout;