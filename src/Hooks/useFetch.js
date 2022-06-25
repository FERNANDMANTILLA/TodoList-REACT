import { useEffect } from "react";
import { useState } from "react";


export const useFetch = (url) => {
    const [state, setState] = useState({
        data: "",
        loading: true,
        error: null,
    });
   
    


    const getFetch = async () => {
        setState({ ...state,
             loading: true 
            });

        const response = await fetch(url);
        const data = await response.json();
        console.log(url);
        setState({
            data,
            loading: false,
            error: null,
        });

    };

    useEffect(() => {
        getFetch();
    }, [url]);

    return{...state,};
};
