//Color Tokens
export const colorTokens = {
    black: {
        0: "#FFFFFF",
        10: "#F6F6F6",
        50: "#F0F0F0",
        100: "#E0E0E0",
        200: "#C2C2C2",
        300: "#A3A3A3",
        400: "#858585",
        500: "#666666",
        600: "#4D4D4D",
        700: "#333333",
        800: "#1A1A1A",
        900: "#0A0A0A",
        1000: "#000000",
    },
    red: {
        0: "#FFEBEE",
        10: "#FFCDD2",
        50: "#EF9A9A",
        100: "#E57373",
        200: "#EF5350",
        300: "#F44336",
        400: "#E53935",
        500: "#D32F2F",
        600: "#C62828",
        700: "#B71C1C",
        800: "#981717",
        900: "#7E1414",
        1000: "#FF0000",
    },
    blue: {
        0: "#E3F2FD",
        10: "#BBDEFB",
        50: "#90CAF9",
        100: "#64B5F6",
        200: "#42A5F5",
        300: "#2196F3",
        400: "#1E88E5",
        500: "#1976D2",
        600: "#1565C0",
        700: "#0D47A1",
        800: "#0A36B1",
        900: "#002171",
        1000: "#0000FF",
    },
    yellow: {
        0: "#FFFDE7",
        10: "#FFF9C4",
        50: "#FFF59D",
        100: "#FFF176",
        200: "#FFEE58",
        300: "#FFEB3B",
        400: "#FDD835",
        500: "#FBC02D",
        600: "#F9A825",
        700: "#F57F17",
        800: "#F9A825",
        900: "#F57F17",
        1000: "#FFEB3B",
    },
};

// mui theme settings
export const themeSettings = (mode) => {
    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                      // palette values for dark mode
                      primary: {
                          dark: colorTokens.primary[200],
                          main: colorTokens.primary[500],
                          light: colorTokens.primary[800],
                      },
                      neutral: {
                          dark: colorTokens.black[100],
                          main: colorTokens.black[200],
                          mediumMain: colorTokens.black[300],
                          medium: colorTokens.black[400],
                          light: colorTokens.black[700],
                      },
                      background: {
                          default: colorTokens.black[900],
                          alt: colorTokens.black[800],
                      },
                  }
                : {
                      // palette values for light mode
                      primary: {
                          dark: colorTokens.primary[700],
                          main: colorTokens.primary[500],
                          light: colorTokens.primary[50],
                      },
                      neutral: {
                          dark: colorTokens.black[700],
                          main: colorTokens.black[500],
                          mediumMain: colorTokens.black[400],
                          medium: colorTokens.black[300],
                          light: colorTokens.black[50],
                      },
                      background: {
                          default: colorTokens.black[10],
                          alt: colorTokens.black[0],
                      },
                  }),
        },
        typography: {
            fontFamily: ["Rubik", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
    };
};
