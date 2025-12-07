import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<ContactForm />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
