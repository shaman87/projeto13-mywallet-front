import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "./styles/globalStyles";
import UserContext from "./contexts/UserContext";
import LoginScreen from "./components/LoginScreen";
import SignUpScreen from "./components/SignUpScreen";
import MainScreen from "./components/MainScreen";
import NewTransaction from "./components/NewTransaction";

export default function App() {
    const [token, setToken] = useState("");
    const [userName, setUserName] = useState("");
    const [transactionType, setTransactionType] = useState("");

    return (
        <UserContext.Provider value={{ token, setToken, userName, setUserName, transactionType, setTransactionType }}>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginScreen />} />
                    <Route path="/sign-up" element={<SignUpScreen />} />
                    <Route path="/main-screen" element={<MainScreen />} />
                    <Route path="/new-transaction" element={<NewTransaction />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}