import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetail = () => {
    const { id } = useParams();
    const url = 'http://localhost:8613/blogs/' + id;
    const { data: blog, isPending, error } = useFetch(url);

    const navigate = new useNavigate();
    const handleDelet = (id) => {
        // const newBlog = data.filter(blog => blog.id !== id);
        // setData(newBlog);
        fetch(url + '/' + id, {
            method: 'DELETE',
        }).then(() => {
            navigate('/');
        })
    };

    return (
        <div className="blog-detail">
            {error && <div>{error}</div>}
            {isPending && <div className="blog-preview" style={{ color: '#1e1f9f' }}> loading ....</div>}
            {
                blog && (

                    <article className="blog-details">
                        <h2>{blog.title}</h2>
                        <p>Writing by {blog.author}</p>
                        <div>
                            {blog.body}
                        </div>

                    </article>
                )
            }
            <button onClick={() => handleDelet(blog.id)} >delete</button>
        </div >
    );
}

export default BlogDetail;