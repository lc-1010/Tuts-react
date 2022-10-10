//customer hook start with use
// 

const useFetch = () => {

    //url = "http://localhost:8613/blogs";
    useEffect((url) => {
        //setTimeout(() => {

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
                    setBlogs(data);
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

    }, [url]);
    //}, 1000);
}