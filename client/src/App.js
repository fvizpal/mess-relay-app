import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Layout from "scenes/layout";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ComplaintPage from "scenes/complaintPage";
import MessMenu from "scenes/messMenu";
import { useMemo } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { themeSettings } from "./theme";

function App() {
    const mode = useSelector((state) => state.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    const isAuth = Boolean(useSelector((state) => state.token));

    return (
        <div className="App">
            <BrowserRouter>
                {/* <ThemeProvider theme={theme}> */}
                {/* <CssBaseline /> */}
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route element={<Layout />}>
                        <Route
                            path="/home"
                            element={
                                // <HomePage />
                                isAuth ? <HomePage /> : <Navigate to="/" />
                            }
                        />
                        <Route
                            path="/complaint"
                            element={
                                // <ComplaintPage />
                                isAuth ? <ComplaintPage /> : <Navigate to="/" />
                            }
                        />
                        <Route
                            path="/menu"
                            element={
                                // <MessMenu />
                                isAuth ? <MessMenu /> : <Navigate to="/" />
                            }
                        />
                    </Route>
                </Routes>
                {/* </ThemeProvider> */}
            </BrowserRouter>
        </div>
    );
}

export default App;
