import React from "react";
import './post.css'
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";

function Post({data}) {
  return (
    <div className="mb-3 shadow-sm rounded" style={{backgroundColor: "white"}}>
      <div className="d-flex align-item-center justify-content-between">
        {/*  header */}
        <button className="btn shadow-none text-dark">
          <div className="d-flex">
            <AccountCircleIcon style={{ fontSize: 40 }} />
            <div className="text-left ml-1">
              <h6 className="mb-0">{data.data.name}</h6>
              <p
                
                className="text-left text-sm my-0 club__name"
              >
                {data.data.club}
              </p>
            </div>
          </div>
        </button>
        <button className="btn shadow-none text-dark">
          <MoreHorizIcon style={{ fontSize: 30 }} />
        </button>
      </div>
      <div>
        {/* Body */}
          <img
            alt="img"
            src={data.data.photo}
            style={{objectFit: "contain", width: "100%", marginBottom: "10px"}}
          />
        <div className="mx-3">
          {/* caption */}
          <h6>{data.data.title}</h6>
          <p className="text-dark">
          {data.data.body}
          </p>
          <p className='text-sm' style={{ fontSize: 11}}>12 mins ago</p>
        </div>
      </div>
      {/* Footer */}
      <div className="d-flex align-item-center ml-1">
        <button className="btn shadow-none text-dark">
          <div className="d-flex">
            <FavoriteIcon style={{ fontSize: 20, marginTop: 0 }} />
            <p style={{ fontSize: 13 }}>{data.data.likes}</p>
          </div>
        </button>
        <button className="btn shadow-none text-dark">
          <div className="d-flex">
            <ChatBubbleIcon style={{ fontSize: 20, marginTop: 0 }} />
            <p style={{ fontSize: 13 }}>{data.data.comments}</p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Post;
