
import { useState, useEffect } from "react";
//customer hook start with use
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    //url = "http://localhost:8613/blogs";

    const handleDelet = (id) => {
        const newBlog = data.filter(blog => blog.id !== id);
        setData(newBlog);
    }

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
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
                        setIsPending(false);
                        console.log(error.message);
                        setError(error.message);

                    }
                )

        }, 1000);
    }, [url]);

    return { data, isPending, error, handleDelet }
}

export default useFetch