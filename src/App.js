import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import EngagementRings from "./pages/EngagementRings/EngagementRings";
import WeedingRings from "./pages/WeedingRings/WeedingRings";
import Layout from "./Layout/Layout";
import AboutRing from "./pages/AboutRing/AboutRing";
import WishList from "./pages/WishList/WishList";
import MyCart from "./pages/MyCart/MyCart";
import Diamonds from "./pages/Diamonds/Diamonds";
import UniqueMoments from "./pages/UniqueMoments/UniqueMoments";
import Contacts from "./pages/Contacts/Contacts";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path="/engagements-rings/" element={<EngagementRings/>}/>
                    <Route path="/weeding-rings/" element={<WeedingRings/>}/>
                    <Route path="/ring-page/" element={<AboutRing/>}/>
                    <Route path="/wish-list/" element={<WishList/>}/>
                    <Route path="/my-cart/" element={<MyCart/>}/>
                    <Route path="/diamonds/" element={<Diamonds/>}/>
                    <Route path="/memoire-rings/" element={<UniqueMoments/>}/>
                    <Route path="/contacts/" element={<Contacts/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App
