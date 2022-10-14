const Crate = () => {
    return (
        <div className="crate">
            <h2>Add a new blog</h2>
            <form>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                />
              
                <label htmlFor="">Blog body:</label>
                <textarea> </textarea>
                <label htmlFor="sk">author:</label>
                <select>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
    )
}

export default Crate;