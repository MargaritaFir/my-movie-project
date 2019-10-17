import React from 'react';
import PropTypes from 'prop-types';

const FormSearch = (props) => (

    <div className="view__position__form ">


        <form className="form-autocomplite  field-input" onInput={event => props.onInput(event.target.value)}>
            <input type="search" id="search"  value={props.query} placeholder="Начните вводить.." autoComplete="off" />
            <div id="result"></div>

        </form>
    </div>
);

FormSearch.propTypes = {
    query: PropTypes.string.isRequired,
    onInput: PropTypes.func.isRequired,
    placeholder: PropTypes.string

}

export default FormSearch;
