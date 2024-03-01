import {render, screen} from "@testing-library/react";
import Title from "./Title";
import {BookStoreThemeProvider} from "../../context/themeContext";

describe("Title component testing", () => {
    it('render 확인', () => {
        /* 1. 렌더 */
        render(<BookStoreThemeProvider><Title size="medium" color="background">Title</Title></BookStoreThemeProvider>);
        const title = screen.getByText('Title');

        /* 2. 확인 */
        expect(title).toBeInTheDocument();
    });

    it('size props 확인', () => {
        const {container} = render(
            <BookStoreThemeProvider><Title size="medium" color="background">Title</Title></BookStoreThemeProvider>);

        expect(container?.firstChild).toHaveStyle(`font-size: 1.5rem`);
    });

    it('color props 확인', () => {
        const {container} = render(
            <BookStoreThemeProvider><Title size="medium" color="background">Title</Title></BookStoreThemeProvider>);

        expect(container?.firstChild).toHaveStyle(`color: lightgray`);
    });
});