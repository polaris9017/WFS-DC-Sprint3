export type ThemeName = "light" | "dark";
export type ColorKey = "primary" | "background" | "secondary" | "third" | 'border' | 'text';
export type HeadingSize = "small" | "medium" | "large";
export type ButtonSize = "small" | "medium" | "large";
export type ButtonScheme = "primary" | "normal" | "like";

export type LayoutWidth = "small" | "medium" | "large";

interface Theme {
    name: ThemeName;
    color: Record<ColorKey, string>;
    heading: {
        [key in HeadingSize]: {
            fontSize: string;
        }
    };
    button: {
        [key in ButtonSize]: {
            padding: string;
            fontSize: string;
        }
    };
    buttonScheme: {
        [key in ButtonScheme]: {
            color: string;
            backgroundColor: string;
        }
    };
    borderRadius: {
        default: string;
    };
    layout: {
        [key in LayoutWidth]: string;
    };
}

export const light: Theme = {
    name: "light",
    color: {
        primary: '#ff5800',
        background: 'lightgray',
        secondary: '#5f5f5f',
        third: 'green',
        border: 'gray',
        text: 'black'
    },
    heading: {
        large: {
            fontSize: "2rem"
        },
        medium: {
            fontSize: "1.5rem"
        },
        small: {
            fontSize: "1rem"
        }
    },
    button: {
        large: {
            fontSize: "1.5rem",
            padding: "1rem 2rem"
        },
        medium: {
            fontSize: "1rem",
            padding: "0.5rem 1rem"
        },
        small: {
            fontSize: "0.75rem",
            padding: "0.25rem 0.5rem"
        }
    },
    buttonScheme: {
        primary: {
            color: "white",
            backgroundColor: "midnightblue"
        },
        normal: {
            color: "black",
            backgroundColor: "lightgray"
        },
        like: {
            color: "white",
            backgroundColor: "coral"
        }
    },
    borderRadius: {
        default: "4px"
    },
    layout: {
        small: "320px",
        medium: "760px",
        large: "1020px"
    }
};

export const dark: Theme = {
    ...light,
    name: "dark",
    color: {
        primary: 'coral',
        background: 'midnightblue',
        secondary: 'darkblue',
        third: 'darkgreen',
        border: 'gray',
        text: 'black'
    }
};

export const getTheme = (themeName: ThemeName) => themeName === "light" ? light : dark;