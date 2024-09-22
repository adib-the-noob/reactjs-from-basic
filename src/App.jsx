import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";

const App = () => {

    return (
         <div>
            <HashRouter>
                <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/profile/:id/:name" element={<ProfilePage />} />
                <Route path="*" element={<NotFound />} />
                </Routes>            
            </HashRouter>
        </div>
    )
}

export default App;
