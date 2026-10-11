// for database
let posts = [
    {
        id: 1,
        text: "Hello world!"
    }
]

// for indexing id
let nextId = 2;

function findPost(req) {
    // get id form url 
    const id = Number(req.params.id);

    // find post 
    return posts.find((post) => post.id === id)
}

function invalidText(text) {
    return typeof text !== "string" || text.trim() === "";
}

// GET ALL POSTS |-----------------
export function getAllPosts(req, res) {
    res.json(posts);
};


// GET A PARTICULAR POST |--------------
export function getPost(req, res) {
    const post = findPost(req);

    if (!post) {
        return res.status(404).json({
            message: "No post found",
        })
    }

    res.json(post);
}


// CREATE POST |-------------------------
export function createPost(req, res) {
    // get data
    const { text } = req.body;

    if (invalidText(text)) {
        return res.status(400).json({
            message: "Please enter valid text"
        });
    }


    const newPost = {id: nextId++, text: text.trim()};
    posts.push(newPost)

    res.status(201).json({
        message: "Post created successfully",
    })
}


// UPDATE POST |--------------------------
export function updatePost(req, res) {
    // get post 
    const post = findPost(req);

    if (!post) {
        return res.status(404).json({
            message: "No post found",
        })
    }

    // getting text
    const { text } = req.body;
    if (invalidText(text)) {
        return res.status(400).json({
            message: "Please enter valid text"
        });
    }


    // updating post
    post.text = text.trim();
    res.json(post)
}



export function deletePost(req, res) {
    const post = findPost(req);

    if (!post) {
        return res.status(404).json({
            message: "No post found",
        });
    }

    posts = posts.filter((p) => p.id !== post.id);
    return res.status(200).json({
        message: "Post deleted successfully",
    })
}