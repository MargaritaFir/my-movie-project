import React, { Component } from 'react';


const  FilterForComments =() =>

    <div className="filter-for-table">

        <form>

            <div className="wrapper__titleFilter">
                <label htmlFor="titleFilter">Movies:</label>
                <input id="titleFilter" type="search" className="light-table-filter" data-table="order-table"
                       placeholder="Filtrer"/>
            </div>

            <div className="wrapper__likeFilter">
                <span htmlFor="genreFilter"><i className="far fa-thumbs-up"> </i> </span>
                <div className="wrapper-for-radioButton">
                    <label htmlFor="label_up_like">
                        <input type="radio" name="demo" id="label_up_like" value="foo"/>
                        <span><i className="fas fa-arrow-up"> </i></span>
                    </label>
                    <label htmlFor="label_down_like">
                        <input type="radio" name="demo" id="label_down_like" value="bar"/>
                        <span><i className="fas fa-arrow-down"> </i></span>
                    </label>
                </div>
            </div>

            <div className="wrapper__dislikeFilter">
                <span><i className="far fa-thumbs-down"> </i> </span>

                <div className="wrapper-for-radioButton">
                    <label htmlFor="label_up_dislike">
                        <input type="radio" name="demo" id="label_up_dislike" value="foo"/>
                        <span><i className="fas fa-arrow-up"> </i></span>
                    </label>
                    <label htmlFor="label_down_dislike">
                        <input type="radio" name="demo" id="label_down_dislike" value="bar"/>
                        <span><i className="fas fa-arrow-down"> </i></span>
                    </label>
                </div>
            </div>


        </form>
    </div>

export default FilterForComments;