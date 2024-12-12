import React, { useEffect } from "react";
import { useParams,Link } from "react-router-dom";

const EditPost = ({
    posts, handelEdit , editTitle, setEditTitle, editBody, setEditBody
}) =>{
    const { id } = useParams();
   //  const x=id;
   // // console.log(x);
   //  const  num = parseInt(x, 10);
   //
   //  if (typeof (num) ==='number'){
   //      console.log("yes..");
   //  }else console.log("int..");





   // const post = posts.find(post => (post.id).toString() === id );
    const post = posts.find(post => post.id === id );
   // console.log(post.title);


    useEffect(() =>{
        if (post){
            setEditTitle(post.title);
            setEditBody(post.body);

        }
    },[post,setEditTitle,setEditBody]);
    return(
        <main className="col-md-6 mx-auto border-bottom ">
            {
                editTitle &&
                    <>
                <h3 className="card-title mb-3 m-lg-1">Edit Post</h3>
                <form className="" onSubmit={(e) =>e.preventDefault()}>

                <label htmlFor="edittTitle" className="form-label  ">Title :</label>
                <input
                className="form-control "
                id='editTitle'
                type="text"
                required
                value={editTitle}
                onChange={(e)=>setEditTitle(e.target.value)}

                />
                <label htmlFor="editBody" className="form-label mb-2 ">Post:</label>
                <textarea
                className="form-control mb-3"
                id="editBody"
                required
                value={editBody}
                onChange={(e)=>setEditBody(e.target.value)}
                />
                <button type="submit" onClick={()=>handelEdit(post.id)} className="btn btn-outline-success mb-2">Submit Edit Post</button>


                </form>
                </>
            }
            {!editTitle &&
                <>
                    <h2 className="card-title">Post not Found</h2>
                    <p>well,thats disappointing</p>
                    <p>
                        <Link to='/'>Visit Our HomePage</Link>
                    </p>
                </>
        }


        </main>
    );
}
export default EditPost;