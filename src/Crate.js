import { useState } from "react";
import { useNavigate } from 'react-router-dom';
const Crate = () => {

    const navigate = new useNavigate();

    let default_title = "the default title";
    let default_body = "some post";
    const [title, setTitle] = useState(default_title);

    const [body, setBody] = useState(default_body);
    const [author, setAuthor] = useState('yoshi');
    const [isPending, setIsPending] = useState(false);
    const hanldSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        fetch('http://localhost:8613/blogs', {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(blog),
        }).then(() => {
            console.log('new blog');
            setIsPending(false);
        });
        navigate('/');
    }
    return (
        <div className="crate">
            <h2>Add a new blog</h2>
            <form onSubmit={hanldSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label htmlFor="">Blog body:</label>
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label htmlFor="sk">author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog</button>}
            </form>
        </div >
    )
}

export default Crate;