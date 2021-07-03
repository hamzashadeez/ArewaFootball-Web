import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Post() {
  return (
    <div className="mb-3 bg-dark">
      <div className="d-flex align-item-center justify-content-between">
        {/*  header */}
        <button className="btn shadow-none">
          <div className="d-flex">
            <AccountCircleIcon style={{ fontSize: 40 }} />
            <div className='text-left ml-1'>
              <h6 className='mb-0'>Hamza Shadeez</h6>
              <p style={{fontSize: '12px'}} className='text-left text-sm my-0'>Real Madrid</p>
            </div>
          </div>
        </button>
        <button className="btn shadow-none">
          <MoreHorizIcon style={{ fontSize: 40 }} />
        </button>
      </div>
      post
    </div>
  );
}

export default Post;
