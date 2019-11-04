import React from 'react';
import {Link} from 'react-router-dom';

const Comment = (props) => (
    <div className="comment__wrapper ">
        <div className="comment__photo ">
        <Link to={`/otherprofile/${props.userId}`} > <div className="avatar"><img src={props.image} alt=""/>
                <div className="comment__NickName">{props.name}</div>
            </div> </Link>
        </div>
        <div className="comment-block ">
            <p className="comment-text">{props.comment}</p>
            <div className="bottom-comment">
            <div comment-actions>{props.commentDate}</div>
        </div>
        </div>

    </div>
);
export default Comment;
