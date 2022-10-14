import { useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetail = () => {
    const { id } = useParams();

    const { data: blog, isPending, error } = useFetch('http://localhost:8613/blogs/' + id);
    return (

        <div className="blog-detail">
            {error && <dev>{error}</dev>}
            {isPending && <div className="blog-preview" style={{ color: '#1e1f9f' }}> loading ....</div>}
            {blog && (

                <article class="blog-details">
                    <h2>{blog.title}</h2>
                    <p>Writing by {blog.author}</p>
                    <div>
                        {blog.body}
                    </div>

                </article>
            )}

        </div>
    );
}

export default BlogDetail;