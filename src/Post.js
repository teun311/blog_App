import { Link } from 'react-router-dom';


const Post =({post})=>{
    return(
        <article className="container ">
           <div className="row mt-1 ">
               <div className="card col-md-12">
                   <Link to={`post/${post.id}`}>
                       <h2 >{post.title}</h2>
                       <p className="card-text">{
                           (post.body).length <= 25
                               ? post.body
                               :`${(post.body).slice(0,25)}...`
                       }
                       </p>
                   </Link>
                   <p className="">{post.datetime}</p>
               </div>
           </div>

        </article>
    )
}
export default Post;