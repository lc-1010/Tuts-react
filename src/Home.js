import { useState, useEffect } from "react";
import BlogList from "./BlogList";



const Home = () => {

    // const [blogs, setBlogs] = useState([
    //     { title: 'my new website', body: 'lodjklajfkls', author: 'mario', id: 1 },
    //     { title: ' website', body: 'lodjklajfkls', author: 'yoshi', id: 2 },
    //     { title: 'ok ok website', body: 'lodjklajfkls', author: 'mario', id: 3 },
    // ]);
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    // const [name, setName] = useState('mario');

    const handleDelet = (id) => {
        const newBlog = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlog);
    }



    return (
        <div className="home">
            {/* reused bloglist , use props prototry blogs,title  */}
            {error && <div> {error}  </div>}
            {isPending && <div className="blog-preview" style={{ color: '#1e1f9f' }}> loading ....</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs" handleDelet={handleDelet} />}
            {/* filter true ,  */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} handleDelet={handleDelet} title="mario blogs" />
            <button onClick={() => { setName("abc") }}>set name </button>
            <p>{name}</p> */}
        </div >

    );
}

export default Home;