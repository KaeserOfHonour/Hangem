import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Hangman from "./pages/Hangman";
import Wrapper from "./pages/Wrapper";
import Generate from "./pages/Generate";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Wrapper />}>
            <Route index element={<Hangman />} />
            <Route path="home" element={<Navigate to="/" />} />
            <Route path="index" element={<Navigate to="/" />} />
            <Route path="generate" element={<Generate />} />
            <Route path="/:id" element={<Hangman />} />

            {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
