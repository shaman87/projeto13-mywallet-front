import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./styles/globalStyles";
import LoginScreen from "./components/LoginScreen";
import SignUpScreen from "./components/SignUpScreen";
import MainScreen from "./components/MainScreen";
import NewInput from "./components/NewInput";
import NewOutput from "./components/NewOutput";

export default function App() {

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginScreen />} />
                    <Route path="/sign-up" element={<SignUpScreen />} />
                    <Route path="/main-screen" element={<MainScreen />} />
                    <Route path="/new-input" element={<NewInput />} />
                    <Route path="/new-output" element={<NewOutput />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}