import React from 'react';
import {Link} from 'react-router-dom';


const SingleRowComment = (props) => (
    <tr>
        <td data-head='movie'><Link to="">{props.title}</Link></td>
        <td data-head='comment'>{props.comment}</td>

        <td data-head='data'>{props.data}</td>
        <td data-head='likes'>{props.likes}</td>
        <td data-head='dislikes'>{props.dislikes}</td>
    </tr>
);
export default SingleRowComment;
