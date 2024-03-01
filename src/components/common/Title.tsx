import {styled} from "styled-components";
import React from "react";
import {ColorKey, HeadingSize} from "../../style/theme";

/* 전체적인 설계를 위해 Props 먼저 작성하는 것 추천! */
interface Props {
    children: React.ReactNode;
    size: HeadingSize;
    color?: ColorKey;
}

function Title({children, size, color}: Props) {
    return <TitleStyle size={size} color={color}>{children}</TitleStyle>;
}

const TitleStyle = styled.h1<Omit<Props, 'children'>>`
    font-size: ${({theme, size}) => theme.heading[size].fontSize};
    color: ${({theme, color}) => (color ? theme.color[color] : theme.color.primary)};
`;

export default Title;