import Feed from "./Feed";

const Home  = ({ posts,fetchError, isLoading })=>{
    return(
        <main className="" style={{minHeight: "500px"}}>
            {isLoading && <p className="text-center">Loading posts...</p>}
            {!isLoading && fetchError && <p className="text-center"style={{color:"red"}}>{fetchError}</p>}
            {!isLoading && !fetchError && (posts.length ? <Feed posts={posts}/>
               : <p style={{marginTop : "2rem"}}>
                    No Post to Dislay ...
                </p>)}


        </main>
    )
}
export default Home;