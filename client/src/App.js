import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Layout from "scenes/layout";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ComplaintPage from "scenes/complaintPage";
import MessMenu from "scenes/messMenu";

function App() {
    const isAuth = Boolean(useSelector((state) => state.token));
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route element={<Layout />}>
                        <Route
                            path="/home"
                            element={
                                <HomePage />
                                // isAuth ? <HomePage /> : <Navigate to="/" />
                            }
                        />
                        <Route path="/complaint" element={<ComplaintPage />} />
                        <Route path="/menu" element={<MessMenu />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
