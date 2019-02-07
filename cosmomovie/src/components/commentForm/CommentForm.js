import React from 'react';
import {Field, reduxForm} from "redux-form";

const CommentForm = (props) => {
    const {handleSubmit} = props;
    return (
        <div className="comment__wrapper row">

            <div className="comment__form col-10 col-md-12">
                <form action="" onSubmit={handleSubmit}>
                    <Field name="comment"
                           component="textarea"
                           rows="4"
                           cols="100"
                           type="text"
                           placeholder="Add comment..."
                    > </Field>
                    <button type="submit" id="submit" name="comment">Add</button>

                </form>
            </div>


        </div>
    );
};


export default reduxForm({
    form: 'addComment'
})(CommentForm);
