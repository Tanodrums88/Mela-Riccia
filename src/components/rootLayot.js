import { Outlet } from "react-router-dom";  // ** 
import Header from "./header";
import Footer from "./footer";
import UpButton from "../ui/UpButton";

function RootLayot() {
    return (
        <>
            <Header />
            <Outlet />
            <UpButton />
            <Footer />
        </>
    )
}

export default RootLayot;
