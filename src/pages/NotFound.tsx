import React, { useEffect } from "react";
import "./styles.scss";
import { Link, useNavigate } from "react-router-dom";
import TitleSection from "@components/UI/TitleSection/TitleSection";

function NotFound() {
    let navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            return navigate("/");
        }, 3000);
    }, []);
    return (
        <div className="not-found">
            <TitleSection title={"Not found page"} classTitle={"not-found"} />
            <Link className="not-found__link" to="/">
                Go to home
            </Link>
        </div>
    );
}

export default NotFound;
