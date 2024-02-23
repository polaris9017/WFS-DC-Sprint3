import Footer from "../common/Footer";
import Header from "../common/Header";
import {styled} from "styled-components";


/* React Node -> React Element -> JSX Element */
interface LayoutProps {
    children: React.ReactNode;  // ReactNode -> React로 만든 모든 component가 배치될 수 있음
}

function Layout({children}: LayoutProps) {
    return (
        <LayoutStyle>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </LayoutStyle>
    );
}

const LayoutStyle = styled.main`
    width: 100%;
    margin: 0 auto;
    max-width: ${({theme}) => theme.layout.large};
    padding: 20px 0;
`;

export default Layout;