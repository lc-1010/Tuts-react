
import { useState, useEffect } from "react";

//customer hook start with use
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    //url = "http://localhost:8613/blogs";


    useEffect(() => {
        const controler = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: controler.signal })
                .then(
                    (response) => {
                        if (!response.ok) {
                            // source err throw ourself err!
                            throw Error("no data in there ");
                        }
                        console.log(response);
                        return response.json()
                    }
                )
                .then(
                    data => {
                        console.log(data);
                        setData(data);
                        setIsPending(false);
                        setError(null);
                    }
                )
                .catch(
                    error => {
                        // if (error.name === 'AbortError') {
                        //     console.log(error);
                        //     console.log("fetch aborted");
                        // } else {
                        setIsPending(false);
                        console.log('errlog->', error);
                        setError(error.message);
                        //}
                    }
                );

        }, 1000);
        return () => controler?.abort();
    }, [url]);

    return { data, isPending, error }
}

export default useFetch