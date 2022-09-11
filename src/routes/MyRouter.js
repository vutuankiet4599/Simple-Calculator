import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../components/App";
import NoPage from "../components/NoPage";
const MyRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRouter;