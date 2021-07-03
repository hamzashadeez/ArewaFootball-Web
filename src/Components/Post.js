import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";

function Post() {
  return (
    <div className="mb-3 shadow-sm rounded" style={{backgroundColor: "white"}}>
      <div className="d-flex align-item-center justify-content-between">
        {/*  header */}
        <button className="btn shadow-none text-dark">
          <div className="d-flex">
            <AccountCircleIcon style={{ fontSize: 40 }} />
            <div className="text-left ml-1">
              <h6 className="mb-0">Hamza Shadeez</h6>
              <p
                style={{ fontSize: "12px" }}
                className="text-left text-sm my-0"
              >
                Real Madrid
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
            src="https://picsum.photos/400/300"
            style={{objectFit: "contain", width: "100%", marginBottom: "10px"}}
          />
        <div className="mx-3">
          {/* caption */}
          <p className="text-dark">
            One morning, when Gregor Samsa woke from troubled dreams, he found
            himself transformed in his bed into a horrible vermin. He lay on his
            armour-like back, and if he lifted his head a little he could see
            his brown belly.
          </p>
        </div>
      </div>
      {/* Footer */}
      <div className="d-flex align-item-center ml-1">
        <button className="btn shadow-none text-dark">
          <div className="d-flex">
            <FavoriteIcon style={{ fontSize: 20, marginTop: 0 }} />
            <p style={{ fontSize: 13 }}>112</p>
          </div>
        </button>
        <button className="btn shadow-none text-dark">
          <div className="d-flex">
            <ChatBubbleIcon style={{ fontSize: 20, marginTop: 0 }} />
            <p style={{ fontSize: 13 }}>112</p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Post;
