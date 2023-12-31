import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                transparent: "transparent",
                current: "currentColor",
                white: "#ffffff",
                fuchsia: {
                    100: "#a3e635",
                    200: "#a3e635",
                    300: "#FF8FCF",
                    400: "#a3e635",
                    500: "#a3e635",
                    600: "#a3e635",
                    700: "#a3e635",
                    800: "#a3e635",
                    900: "#a3e635",
                    950: "#a3e635",
                },
                sky: {
                    100: "#a3e635",
                    200: "#a3e635",
                    300: "#a3e635",
                    400: "#a3e635",
                    500: "#a3e635",
                    600: "#a3e635",
                    700: "#a3e635",
                    800: "#a3e635",
                    900: "#a3e635",
                    950: "#a3e635",
                },
                "french-rose": {
                    100: "#ffd5e6",
                    200: "#ffacce",
                    300: "#ff83b6",
                    400: "#ff5a9e",
                    500: "#ff3186",
                    600: "#cc276b",
                    700: "#991d50",
                    800: "#661335",
                    900: "#33091a",
                    950: "#19040d",
                },
                "robin-egg": {
                    100: "#ccf2f1",
                    200: "#99e6e3",
                    300: "#66dad5",
                    400: "#32cec7",
                    500: "#00C2BA",
                    600: "#009b94",
                    700: "#00746f",
                    800: "#004d4a",
                    900: "#002625",
                    950: "#001312",
                },
                cerulean: {
                    100: "#cce4e8",
                    200: "#9ac9d2",
                    300: "#67afbc",
                    400: "#3594a6",
                    500: "#037A90",
                    600: "#026173",
                    700: "#014956",
                    800: "#013039",
                    900: "#00181c",
                    950: "#000c0e",
                },
                mauve: {
                    100: "#f5eafe",
                    200: "#ebd5fd",
                    300: "#e1c0fc",
                    400: "#d7abfb",
                    500: "#ce96fb",
                    600: "#a478c8",
                    700: "#7b5a96",
                    800: "#523c64",
                    900: "#291e32",
                    950: "#140f19",
                },
                "persian-pink": {
                    100: "#ffe8f5",
                    200: "#ffd2eb",
                    300: "#ffbbe2",
                    400: "#ffa5d8",
                    500: "#ff8fcf",
                    600: "#cc72a5",
                    700: "#99557c",
                    800: "#663952",
                    900: "#331c29",
                    950: "#190e14",
                },
            },
            fontFamily: {
                sans: ["ui-sans-serif", "system-ui"],
                serif: ["Roboto Slab", "Georgia"],
                mono: ["ui-monospace", "SFMono-Regular"],
                display: ["Oswald"],
                body: ["Questrial", "sans-serif"],
                title: ["Montserrat", "sans-serif"],
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};

export default config;
