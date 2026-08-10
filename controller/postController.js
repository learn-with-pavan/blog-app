let posts = [
    {
        id:1,
        name: 'New Post',
        status: 'CREATED'
    },
    {
        id:2,
        name: 'New Post',
        status: 'UPDATED'
    },
    {
        id:3,
        name: 'New Post',
        status: 'CREATED'
    },
    {
        id:4,
        name: 'New Post',
        status: 'DELETED'
    },
]

// @desc Get All posts
export const getPosts = (req,res) =>{
    res.status(200).json(posts);
};

// @desc Get Single Post by Id
export const getPostById = (req,res, next)=>{
    console.log(req.query)
    const postId = req.params.id;
    const post = posts.find(item => item.id === parseInt(postId))
    if(!post){
        const error = new Error('Post Not found');
        error.status = 404;
        return next(error);
    }
    res.status(200).json(post);
}

// @desc Post a post
export const createPost = (req,res) =>{
    console.log(req.body);
    const requestBody = req.body;
    posts.push(requestBody);
    res.status(201).json(requestBody);
};

// @desc Delete Post by id
export const deletePostById = (req, res) =>{
    const postId = parseInt(req.params.id);
    const filteredPosts = posts.filter(item => item.id !== postId);
    res.status(200).json(filteredPosts);
};