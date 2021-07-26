export default {
    Query:{
        getAllPosts: async (_, {}, {Post}) => {
            return await Post.find();

        }
    },
    Mutation: {
        createNewPost:async (_, {newPost}, {Post}) => {
            return await Post.create(newPost);
        }
    }
}