import React from 'react';

const Comment = (props) => (
    <div className="comment__wrapper ">
        <div className="comment__photo ">
            <div className="avatar"><img src={props.image} alt=""/>
                <div className="comment__NickName">{props.name}</div>
            </div>
        </div>
        <div className="comment-block ">
            <p className="comment-text">{props.comment}</p>

        </div>
    </div>
);
export default Comment;
