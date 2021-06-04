import { useState } from "react";
import { useHistory } from "react-router";


const Create = () => {
    const[title,setTitle]=useState('');
    const[body,setBody]=useState('');
    const[author,setAuthor]=useState('Prakhar');
    const[isPending,setIsPending]=useState(false);
    const history= useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog={title,body,author}
        setIsPending(true);
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(blog)

        }).then(()=>{
            console.log('new blod added');
            setIsPending(false);
            // history.go(-1);
            history.push('/');
        })
       
    }
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form  onSubmit={handleSubmit}>
                <label >Blog title:</label>
                <input 
                type="text" 
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <label >Blog body:</label>
                <textarea required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                ></textarea>
                <label >Blog author:</label>
                <select 
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="Prakhar">Prakhar</option>
                    <option value="Baba">Baba</option>
                </select>
                {!isPending&&<button>Add blog</button>}
                {isPending&&<button disabled>Adding blog....</button>}
                {/* <p>{author}</p>
                <p>{title}</p>
                <p>{body}</p> */}
            </form>
        </div>
     );
}
 
export default Create;