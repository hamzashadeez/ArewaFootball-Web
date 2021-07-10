import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FormControl from "react-bootstrap/FormControl";
import SendIcon from "@material-ui/icons/Send";
import PhotoIcon from "@material-ui/icons/Photo";
import {useRecoilState} from 'recoil'
import {show} from '../Recoil/PostModelState'
import { userState } from "../Recoil/UserState";
import Avatar from '@material-ui/core/Avatar';

function PostForm() {
  const [showState, setShowState] = useRecoilState(show);
  const [user, setUser] = useRecoilState(userState);

  const showModel = ()=> setShowState(true)
  return (
    <div className="p-2 mb-4 shadow-sm rounded " style={{backgroundColor: "white"}}>
      <div className="d-flex ">
        <Avatar src={user? user.photo: ""} style={{ fontSize: 30 }} />
        <FormControl
          className="bg-transparent border-0 text-secondary shadow-none"
          placeholder="Start a post"
          aria-label="post"
          aria-describedby="basic-addon1"
          onClick={()=>showModel()}
        />
      </div>
      <hr className="mt-1"></hr>
      <div className='d-flex justify-content-between mx-2'>
        <button className="btn shadow-none bg-dark text-light" style={{fontSize: '12px'}} onClick={()=>showModel()}>
          Photo
          <PhotoIcon className="ml-1" style={{ fontSize: 15 }} />
        </button>
        <button className="btn shadow-none bg-danger text-light" color="secondary" style={{fontSize: '12px'}} onClick={()=>showModel()}>
          Post
          <SendIcon className="ml-1" style={{ fontSize: 15 }} />
        </button>
      </div>
    </div>
  );
}

export default PostForm;
