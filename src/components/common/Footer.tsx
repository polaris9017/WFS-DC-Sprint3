import logo from "../../assets/image/logo.png";
import {styled} from "styled-components";

function Footer() {
    return (
        <FooterStyle>
            <h1 className="logo">
                <img src={logo} alt="Bookstore"/>
            </h1>
            <div className="copyright">
                <p>
                    copyright (c) 2024, Bookstore
                </p>
            </div>
        </FooterStyle>
    );
}

const FooterStyle = styled.footer`
    width: 100%;
    margin: 0 auto;
    max-width: ${({theme}) => theme.layout.large};
    border-top: 1px solid ${({theme}) => theme.color.background}; // 컨텐츠와의 구분 위함
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    
    .logo {
        img {
            width: 140px;  // 로고 이미지 조정
        }
    }
    
    .copyright {
        p{
            font-size: 0.75rem;
            color: ${({theme}) => theme.color.text};
        }
    }
`;

export default Footer;