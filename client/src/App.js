import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import HomePage from "scenes/HomePage";
import LoginPage from "scenes/LoginPage";

function App() {
    const isAuth = Boolean(useSelector((state) => state.token));
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route
                        path="/home"
                        element={isAuth ? <HomePage /> : <Navigate to="/" />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
