import React from "react";
import TopStates from "./TopStates";
import FeaturedHotels from "./FeaturedHotels.jsx";
import NavbarL from "./NavbarL";
import LandP_1 from "./LandP_1";
import LandP_2 from "./LandP_2";
import MyOwnership from "../Components/MyOwnership";
export default function Landing() {
    return (
        <>
            <NavbarL/>
            <LandP_1 />
            <LandP_2 />
            <TopStates/>
            <FeaturedHotels />
            <MyOwnership/>
        </>
    );
}