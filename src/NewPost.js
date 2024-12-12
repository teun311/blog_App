import React from "react";
const NewPost  = ({
   handleSubmit, postTitle, setPostTitle, postBody, setPostBody

})=>{
    return(
        <main className="col-md-6 mx-auto border-bottom" style={{minHeight: "500px"}}>
            <h3 className="card-title mb-3 m-lg-1">New Post</h3>
            <form className="" onSubmit={handleSubmit}>

                <label htmlFor="postTitle" className="form-label  ">Title :</label>
                <input
                    className="form-control "
                    id='postTitle'
                    type="text"
                    required
                    value={postTitle}
                    onChange={(e)=>setPostTitle(e.target.value)}

                />
                <label htmlFor="postBody" className="form-label mb-2 ">Post:</label>
                <textarea
                    className="form-control mb-3"
                    id="poostBody"
                    required
                    value={postBody}
                    onChange={(e)=>setPostBody(e.target.value)}
                />
                <button type="submit" className="btn btn-outline-success mb-2">Add New Post</button>


            </form>

        </main>
    )
}
export default NewPost;