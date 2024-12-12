import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Register from "./Register";
import Login from "./Login";
import Missing from './Missing';
import EditPost from "./EditPost";
import { Routes, Route,useNavigate } from 'react-router-dom';
import {useState,useEffect} from 'react';
import api from './api/posts';

import { format } from 'date-fns';
import useAxiosFethch from "./hooks/useAxiosFetch";
import data from "bootstrap/js/src/dom/data";





function App() {
    const [posts,setPosts] = useState([]);
    const[search,setSearch] = useState('');
    const [searchResults,setSearchResults] = useState([]);
    const [postTitle,setPostTitle] = useState('');
    const [postBody,setPostBody]= useState('');
    const [editTitle,setEditTitle] = useState('');
    const [editBody,setEditBody] = useState('');
   // const history = useHistory();
    const navigate = useNavigate();

    const {data,fetchError,isLoading} = useAxiosFethch('http://localhost:3500/posts');

    useEffect(()=>{
        setPosts(data);
    },[data]);


    useEffect(()=>{


            const filteredResult =
                posts.filter(post =>
                    (post.body.toLowerCase()).includes(search.toLowerCase())
                    ||(post.title.toLowerCase()).includes(search.toLowerCase()) );
            setSearchResults(filteredResult.reverse());

    },[posts,search]);



    const handleSubmit = async (e) => {
       e.preventDefault();
        const id = posts.length ? posts[posts.length -1].id +1 : 1;
        const datetime = format(new Date(),'MMMM dd,yyyy pp');
        const newPost ={ id,title:postTitle,datetime,body: postBody};
        try {
            const response = await api.post('/posts',newPost);
            console.log()
            const allPost =[...posts,response.data];
            setPosts(allPost);
            setPostTitle('');
            setPostBody('');
            navigate('/');
        }catch (err) {
            console.log(`Error : ${err.message}`);
        }

    }


    const handleDelete = async (id) =>{
      //  console.log(id);
        try {
            alert('are you sure to delete this post?')
            await api.delete(`/posts/${id}`);
            const postsList = posts.filter(post=>post.id !== id);
            setPosts(postsList);
            // console.log(postsList);
            //history.push('/')
            navigate('/');
            
        }catch (err) {
            console.log(`Error : ${err.message}`);
        }
    }

    const handleEdit = async (id) =>{
        const datetime = format(new Date(),'MMMM dd,yyyy pp');
        const updatedPost ={ id,title:editTitle,datetime,body: editBody};
        try{
            const response = await api.put(`/posts/${id}`,updatedPost);
            //console.log(response.data);
             const edit= posts.map(post => post.id === id ? { ...response.data } : posts);
            // setPosts(posts.map(post => post.id === id ? { ...response.data,title:response.data.title,
            //     body:response.data.body,
            //     datetime:response.data.datetime
            // } : post));


        //   setPosts(posts.map(post => post.id === id ? { ...response.data} : posts));
            setEditTitle('');
            setEditBody('');
            navigate('/');

         }catch (err) {
             console.log(`Error : ${err.messge}`);
        }

    }


  return (
      <div>
          <Header title="React Blog"/>
          <Nav search={search} setSearch={setSearch} />
          <Routes>
              <Route path="/" element={<Home
                                         posts={searchResults}
                                         fetchError={fetchError}
                                         isLoading={isLoading}/>}/>
              <Route path="/post" element={<NewPost
                  handleSubmit={handleSubmit}
                  postTitle={postTitle}
                  setPostTitle={setPostTitle}
                  postBody={postBody}
                  setPostBody={setPostBody}
              />}
              />
              <Route path="/post/:id" element={<PostPage posts={posts} handleDelete={handleDelete} />}/>
              <Route path="/edit/:id" element={<EditPost
                                        posts={posts}
                                        handelEdit={handleEdit}
                                        editTitle={editTitle}
                                        setEditTitle={setEditTitle}
                                        editBody={editBody}
                                        setEditBody={setEditBody} />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/register" element={<Register />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="*" element={<Missing />}/>
          </Routes>
          <Footer />
      </div>


  );
}

export default App;
