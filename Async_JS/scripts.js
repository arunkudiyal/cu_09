const posts = [
    {id: '1', post: 'Post One', body: 'Post One Body'},
    {id: '2', post: 'Post Two', body: 'Post Two Body'},
    {id: '3', post: 'Post Three', body: 'Post Three Body'}
]

const getPosts = () => {
    setTimeout(() => {
        for(let i=0; i < posts.length; i++) {
            console.log(posts[i].body)
        }
    }, 2000)
}

const createPost = (post) => {
    setTimeout(() => {
        posts.push(post)
    }, 3000)
}

createPost( {id: 4, post: 'Post Four', body: 'Post Four Body'} )
getPosts()
