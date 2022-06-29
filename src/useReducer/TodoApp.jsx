
import { NavBar } from "./NavBar";

import { Router } from "./Routes/Router";
import { useLayoutEffect } from "react";
import { useState } from "react";
import { responsiveScript } from "./responsive";


export const TodoApp = () => {
    

    const [windowSize, setWindowSize] = useState(responsiveScript);
    
    window.addEventListener("resize", () => {
        setWindowSize(responsiveScript);
    });

    useLayoutEffect(() => {
    }, [windowSize])

    return (
        <>  
            <NavBar />
            <Router></Router>
            
           
        </>
    );
};
