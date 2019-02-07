import React from 'react';


const CheckButtonIcon = (props) =>
    <div className="movie__icons">

        <div className="button__star">
            <label htmlFor="label_star">
                <input type="checkbox" name="star"  id="label_star" value="1"/>
                <span> </span>
            </label>

        </div>

        <div className="button__view">

            <label htmlFor="label_view">
                <input className="button__star" type="checkbox" name="view" id="label_view" value="2"/>
                <span> </span>
            </label>
        </div>

    </div>

export default CheckButtonIcon;
