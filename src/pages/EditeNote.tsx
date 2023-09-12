import React from 'react';
import { Link, useParams  , useNavigate} from 'react-router-dom';
import {IoIosArrowBack} from "react-icons/io";
import {RiDeleteBin6Line} from 'react-icons/ri';
function EditeNote({notes , setNotes}:any) {
  const params = useParams();
  const note = notes.find((item:any)=> item.id == params.id);
  const [title ,setTitle] = React.useState(note.title);
  const [description ,setDescription] = React.useState(note.description);
  const navigate = useNavigate();
  return (
    <div className="create-note">
    <header>
        <Link to="/" className='btn back-btn'><IoIosArrowBack 
        style={{fontSize:"20px",
        backgroundColor:"black",
        fill:"white",
        margin:"3px",
        borderRadius:"50%" }}/>
        </Link>
        <button form="edit-form" className="save-btn" id="edit-note">Save</button>
        <button 
        className="del-btn" 
        id="delete-note"
        onClick={function(){
          const newNotes = notes.filter((item:any)=>item.id != params.id)
          setNotes(newNotes);
          navigate("/");
        }}
        ><RiDeleteBin6Line/></button>
    </header>
    <form className='create-note-form' id="edit-form" onSubmit={function(e){
      e.preventDefault();
      if(title && description){
        const newNote = {...note, title, description};
        const newNotes = notes.map((item: any)=>{
          if(item.id == params.id){
            item = newNote
          }
          return item
        })
        setNotes(newNotes);
      }
      navigate("/")
    }}>
        <input 
        value={title}
        type="text"
        placeholder='Title'
        autoFocus
        required
        onChange={
          function(e){
            setTitle(e.target.value)
          }
        }/>
        <textarea 
        value={description}
        rows={22}
        placeholder="Description...."
        onChange={
          function(e){
            setDescription(e.target.value)
          }
        }
        ></textarea>
    </form>
</div>
  )
}

export default EditeNote
// ahmed$100100100