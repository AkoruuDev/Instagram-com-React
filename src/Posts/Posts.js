import Post from "./Post";

const posts = [
  {
    imagePerfil: "assets/img/meowed.svg",
    name: "meowed",
    post: "assets/img/gato-telefone.svg",
    perfilReacted: "assets/img/respondeai.svg",
    perfilReactedName: "respondeai",
    reactionsNumber: "101523"
  },
  {
    imagePerfil: "assets/img/barked.svg",
    name: "barked",
    post: "assets/img/dog.svg",
    perfilReacted: "assets/img/adorable_animals.svg",
    perfilReactedName: "adorable_animals",
    reactionsNumber: "99159"
  }
]

function Posts() {
  const showPosts = posts.map((post, i) => (
    <Post
      key={i}
      imagePerfil={post.imagePerfil}
      name={post.name}
      post={post.post}
      perfilReacted={post.perfilReacted}
      perfilReactedName={post.perfilReactedName}
      reactionsNumber={post.reactionsNumber}
    />
  ))

  return(
    <div className="posts">
      {showPosts}
    </div>
  )
}

export default Posts;