import React from 'react';

const FormSearchFriends = (props) => (

    <div className="view__position__form ">


        <div className="form-autocomplite  field-input">
            <input type="search" id="search" placeholder="Начните вводить.." autoComplete="off" />
            <div id="result"></div>

        </div>
    </div>
);



export default FormSearchFriends;
