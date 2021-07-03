import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FormControl from "react-bootstrap/FormControl";
import SendIcon from "@material-ui/icons/Send";
import PhotoIcon from "@material-ui/icons/Photo";
function PostForm() {
  return (
    <div className="p-2 bg-dark mb-4  ">
      <div className="d-flex">
        <AccountCircleIcon style={{ fontSize: 40 }} />
        <FormControl
          className="bg-transparent border-0 text-secondary shadow-none"
          placeholder="Start a post"
          aria-label="post"
          aria-describedby="basic-addon1"
        />
      </div>
      <hr className="mt-1"></hr>
      <div className='d-flex justify-content-between'>
        <button className="btn shadow-none text-secondary" style={{fontSize: '12px'}}>
          Photo
          <PhotoIcon className="ml-1" style={{ fontSize: 15 }} />
        </button>
        <button className="btn shadow-none text-secondary" style={{fontSize: '12px'}}>
          Post
          <SendIcon className="ml-1" style={{ fontSize: 15 }} />
        </button>
      </div>
    </div>
  );
}

export default PostForm;
