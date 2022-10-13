import { useParams } from "react-router-dom";


const BlogDetail = () => {
    const { id } = useParams()
    return (
        <div className="blog-detail">
            <h2>Blog Detail-{id}</h2>
            <p>tod get content</p>
        </div>
    );
}

export default BlogDetail;