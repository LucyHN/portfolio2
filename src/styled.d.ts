import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        red: string;
        pink: string;
        black: {
            veryDark: string;
            darker: string;
            lighter: string;
        };
        white: {
            darker: string;
            lighter: string;
        };
        gray: {
            darker: string;
            lighter: string;
        };
    }
}