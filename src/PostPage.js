import { Link, useParams } from 'react-router-dom';
const PostPage = ({posts,handleDelete})=>{
    const {id} = useParams();
    const post = posts.find(post =>(post.id).toString() === id );

    return(
        <main className="" style={{minHeight: "500px"}}>
            <article className="card col-md-9 mt-3 mx-auto">
                {post &&
                    <>
                        <h3 className="card-title text-center">{post.title}</h3>
                        <p className="text-center">{post.datetime}</p>
                        <p className="card-text text-center">{post.body}</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-center">
                            <Link  to={`/edit/${post.id}`} ><button className="btn btn-outline-success">Edit post</button></Link>
                            <button className="btn btn-outline-warning mb-1 "onClick={()=>handleDelete(post.id)}>
                                Delete Post
                            </button>
                        </div>

                    </>
                }{
                    !post &&
                        <>
                            <h2 className="card-title">Post not Found</h2>
                            <p>well,thats disappointing</p>
                            <p>
                                <Link to='/'>Visit Our HomePage</Link>
                            </p>
                        </>
            }
            </article>

        </main>
    )
}
export default PostPage