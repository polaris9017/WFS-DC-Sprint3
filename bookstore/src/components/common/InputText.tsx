import React, {forwardRef, ForwardedRef} from 'react';
import {styled} from "styled-components";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    inputType?: "text" | "email" | "password" | "number";
}

const InputText = forwardRef(({
                                  placeholder,
                                  inputType,
                                  onChange,
                                  ...props
                              }: Props, ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <InputTextStyled placeholder={placeholder} ref={ref} type={inputType} onChange={onChange} {...props}/>
    );
});

const InputTextStyled = styled.input`  // text 속성에만 한정하지 않고 모든 input 속성에 적용하기 위함
    padding: 0.25rem 0.75rem;
    border: 1px solid ${({theme}) => theme.color.border};
    border-radius: ${({theme}) => theme.borderRadius.default};
    font-size: 1rem;
    line-height: 1.5;
    color: ${({theme}) => theme.color.text};
`;

export default InputText;