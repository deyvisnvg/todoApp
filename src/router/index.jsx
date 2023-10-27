import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DetailPage, HomePage } from "../pages";
import { MainLayout } from "../layout";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="" element={<HomePage />} />
                    <Route path="detail/:id" element={<DetailPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}