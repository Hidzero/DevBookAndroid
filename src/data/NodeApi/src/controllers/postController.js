import postRepositories from '../repositories/postRepositories.js';

export async function create (req, res) {
    try {
        const post = await postRepositories.create(req.body);
        res.status(201).json(post)
    }
    catch (error){
        res.status(400).json({ message: error.message})
    }
}

export async function getAllPosts(req, res) {
    try{
        const posts = await postRepositories.findAll();
        res.status(200).json(posts);
    }
    catch (error){
        res.status(400).json({ message: error.message})
    }
}

export async function getCarsByOwner(req, res) {
    try {
        const posts = await postRepositories.findByOwner(req.params.owner);
        res.status(200).json(posts);
    }
    catch (error){
        res.status(400).json({ message: error.message})
    }
}

export async function getById(req, res) {
    try {
        const post = await postRepositories.findById(req.params.id);
        res.status(200).json(post);
    }
    catch (error){
        res.status(400).json({ message: error.message})
    }
}

export async function updatePost(req, res){
    try {
        const post = await postRepositories.updateById(req.params.id, req.body);
        res.status(200).json(post);
    }
    catch (error){
        res.status(400).json({ message: error.message})
    }
}

export async function deletePost(req, res){
    try {
        const post = await postRepositories.deleteById(req.params.id);
        res.status(200).json({message: "Post deletado com sucesso"});
    }
    catch (error){
        res.status(400).json({ message: error.message})
    }
}