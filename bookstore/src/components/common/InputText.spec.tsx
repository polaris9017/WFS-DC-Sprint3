import {render, screen} from "@testing-library/react";
import InputText from "./InputText";
import {BookStoreThemeProvider} from "../../context/themeContext";
import React from "react";

describe("Button component testing", () => {
    it('render 확인', () => {
        /* 1. 렌더 */
        render(<BookStoreThemeProvider><InputText placeholder="Input Text"/></BookStoreThemeProvider>);
        const button = screen.getByPlaceholderText('Input Text');

        /* 2. 확인 */
        expect(button).toBeInTheDocument();
    });

    it('forwardRef 확인', () => {
            const ref = React.createRef<HTMLInputElement>();
            render(<BookStoreThemeProvider><InputText ref={ref} placeholder="Input Text"/></BookStoreThemeProvider>);
            expect(ref.current).toBeInstanceOf(HTMLInputElement);
        }
    );
});