import Post from '../models/Post.js';

class PostRepository {
    async create(userData){
        const post = new Post(userData);
        await post.save();
        return post;
    }
    async findAll(){
        return Post.find();
    }
    async findByOwner(owner){
        return Post.find({ owner: owner });
    }
    async updateById(id, userData) {
        return Post.findByIdAndUpdate(id, userData, { new: true })
    }
    async deleteById(id) {
        return Post.findByIdAndDelete(id)
    }
}

const postRepositories = new PostRepository();
export default postRepositories;