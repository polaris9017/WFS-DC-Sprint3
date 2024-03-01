import {render, screen} from "@testing-library/react";
import Button from "./Button";
import {BookStoreThemeProvider} from "../../context/themeContext";
import Title from "./Title";

describe("Button component testing", () => {
    it('render 확인', () => {
        /* 1. 렌더 */
        render(<BookStoreThemeProvider><Button size="large" scheme="normal">Button</Button></BookStoreThemeProvider>);
        const button = screen.getByText('Button');

        /* 2. 확인 */
        expect(button).toBeInTheDocument();
    });

    it('size props 확인', () => {
        const {container} = render(
            <BookStoreThemeProvider><Button size="medium" scheme="normal">Title</Button></BookStoreThemeProvider>);

        expect(screen.getByRole('button')).toHaveStyle({fontSize: '1rem'});
    });
});