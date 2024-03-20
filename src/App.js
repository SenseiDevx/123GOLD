import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import EngagementRings from "./pages/EngagementRings/EngagementRings";
import WeedingRings from "./pages/WeedingRings/WeedingRings";
import Layout from "./Layout/Layout";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path="engagements-rings" element={<EngagementRings/>}/>
                    <Route path="weeding-rings" element={<WeedingRings/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App
