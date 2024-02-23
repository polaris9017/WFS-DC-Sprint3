import {styled} from "styled-components";
import logo from "../../assets/image/logo.png";
import {FaSignInAlt, FaRegUser} from "react-icons/fa";

const Category = [
    {id: null, name: "전체"},
    {id: 0, name: "동화"},
    {id: 1, name: "소설"},
    {id: 2, name: "사회"}
];

function Header() {
    return (
        <HeaderStyle>
            <h1 className="logo">
                <img src={logo} alt="Bookstore"/>
            </h1>
            <nav className="category">
                <ul>
                    {
                        Category.map((category) => (
                            <li key={category.id}>
                                <a href={category.id === null ? `/books` : `/books?cat=${category.id}`}>
                                    {category.name}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <nav className="auth">
                <ul>
                    <li>
                        <a href="/signin">
                            <FaSignInAlt/> 로그인
                        </a>
                    </li>
                    <li>
                        <a href="/signup">
                            <FaRegUser/>회원가입
                        </a>
                    </li>
                </ul>
            </nav>
        </HeaderStyle>);
}

const HeaderStyle = styled.header`
    width: 100%;
    margin: 0 auto;
    max-width: ${({theme}) => theme.layout.large};

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid ${({theme}) => theme.color.background}; // 컨텐츠와의 구분 위함

    .logo {
        img {
            width: 200px;
        }
    }

    .category {
        ul {
            display: flex;
            gap: 16px; // 간격

            li {
                a {
                    font-size: 1.5rem;
                    font-weight: 600;
                    text-decoration: none; // 밑줄 제거
                    color: ${({theme}) => theme.color.text};

                    &:hover { // 마우스 올렸을 때 style
                        color: ${({theme}) => theme.color.primary};
                    }
                }
            }
        }
    }

    .auth {
        ul {
            display: flex;
            gap: 16px;

            li {
                a {
                    font-size: 1rem;
                    font-weight: 600;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    line-height: 1;
                    
                    svg {
                        margin-right: 6px;
                    }
                }
            }
        }
    }
`;

export default Header;