import {styled} from "styled-components";
import logo from "../../assets/image/logo.png";
import {FaSignInAlt, FaRegUser} from "react-icons/fa";
import {Link} from "react-router-dom";
import {useCategory} from "../../hooks/useCategory";

function Header() {
    // 개발 중 서버를 올리지 않는 관계로 임시 주석 처리. 최종 단계에서 주석 해제
    /*const {category} = useCategory();*/

    return (
        <HeaderStyle>
            <h1 className="logo">
                <Link to="/">
                    <img src={logo} alt="Bookstore"/>
                </Link>
            </h1>
            <nav className="category">
                <ul>
                    {/*{    // 개발 중 서버를 올리지 않는 관계로 임시 주석 처리. 최종 단계에서 주석 해제
                        category.map((item) => (
                            <li key={item.id}>
                                <Link to={item.id === null ? `/books` : `/books?cat=${item.id}`}>
                                    {item.name}
                                </Link>
                            </li>
                        ))
                    }*/}
                    <li>
                        <Link to="/books">전체</Link>
                    </li>
                </ul>
            </nav>
            <nav className="auth">
                <ul>
                    <li>
                        <Link to="/signin">
                            <FaSignInAlt/> 로그인
                        </Link>
                    </li>
                    <li>
                        <Link to="/signup">
                            <FaRegUser/>회원가입
                        </Link>
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