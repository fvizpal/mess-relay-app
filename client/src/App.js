import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/HomePage";
import LoginPage from "scenes/LoginPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/home" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
