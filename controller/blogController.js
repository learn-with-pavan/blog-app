import Blog from '../models/Blog.js';
export const createBlog = async (req, res) => {
    const { title, content, author } = req.body;

    try {
        const blog = new Blog({
            title,
            content,
            author,
        });

        await blog.save();
        res.status(201).json(blog);
    } catch (error) {
        res.status(500).json({ message: 'Blog creation failed', error: error.message });
    }
};

export const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().populate('author', 'username email');
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch blogs' });
    }
};


export const getBlogsByAuthor = async (req, res) =>{
    try{
        const author = req.params.id;
        const blogs = await Blog.find({author: author}).populate("author", "username email");
        res.json(blogs);
    } catch(error) {
        res.status(500).json({message: 'Failed to fetch Blogs'})
    }
}

export const removeBlogByAuthor = async (req, res) =>{
    try{
        const authorId = req.params.id;
        const result = await Blog.deleteMany({author: authorId});
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "No blogs found for this author" });
          }
      
          res.status(200).json({
            message: "Blogs deleted successfully",
            deletedCount: result.deletedCount,
          });
    } catch(error) {
        res.status(500).json({message: 'No Blog Found to remove'})
    }
}
