import {styled} from "styled-components";
import Title from "../components/common/Title";
import InputText from "../components/common/InputText";
import Button from "../components/common/Button";
import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {signup} from "../api/auth.api";
import {useAlert} from "../hooks/useAlert";

export interface SignupProps {
    email: string;
    password: string;
}

function Signup() {
    const navigate = useNavigate();
    const showAlert = useAlert();
    /*const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();  // 기존 HTML form 의 submit 시 action 속성으로 인해 페이지가 이동하는 것을 막음
        console.log(`email: ${email}, password: ${password}`);
    };*/

    const {
        register  // input 값을 register 하는 역할
        , handleSubmit, formState: {errors}
    } = useForm<SignupProps>();

    const onSubmit = (data: SignupProps) => {
        /*signup(data).then((response) => {   // 개발 중 서버를 올리지 않는 관계로 임시 주석 처리. 최종 단계에서 주석 해제
            window.alert("회원가입이 완료되었습니다.");
        });*/
        showAlert("회원가입이 완료되었습니다.");
        navigate("/login");  // 회원가입 완료 후 로그인 화면으로 이동
    }

    return (
        <>
            <Title size="large">회원가입</Title>
            <SignupStyle>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset>
                        <InputText placeholder="이메일" inputType="email" {...register("email", {required: true})}/>
                        {errors.email && <p className="error-text">이메일을 입력해 주세요</p>}
                    </fieldset>
                    <fieldset>
                        <InputText placeholder="비밀번호" inputType="password" {...register("password", {required: true})}/>
                        {errors.password && <p className="error-text">비밀번호를 입력해 주세요</p>}
                    </fieldset>
                    <fieldset>
                        <Button type="submit" size="medium" scheme="primary">
                            회원가입
                        </Button>
                    </fieldset>
                    <div className="info">
                        <Link to="/reset-password">비밀번호 초기화</Link>
                    </div>
                </form>
            </SignupStyle>
        </>
    );
}

export const SignupStyle = styled.div`
    max-width: ${({theme}) => theme.layout.small};
    margin: 80px auto;

    fieldset {
        border: 0;
        padding: 0 0 8px 0;

        .error-text {
            color: red;
        }
    }

    input {
        width: 100%;
    }

    button {
        width: 100%;
    }

    .info {
        text-align: center;
        padding: 16px 0 0 0;
    }
`;

export default Signup;