import React, {Component} from 'react';


class FilterTable extends Component {

    render() {
        return (
            <div id="filterMovies" className="filter-for-table">
                <form>

                    <div className="wrapper__titleFilter">
                        <label htmlFor="titleFilter"> Movies: </label>
                        <input id="titleFilter" type="search" className="light-table-filter" data-table="order-table"
                               placeholder="Filtrer"/>
                    </div>

                    <div className="wrapper__yearFilter">
                        <span>Year: </span>

                        <div className="wrapper-for-radioButton">
                            <label htmlFor="label_up_year">
                                <input type="radio" name="demo" id="label_up_year" value="foo"/>
                                <span><i className="fas fa-arrow-up"> </i></span>
                            </label>
                            <label htmlFor="label_down_year">
                                <input type="radio" name="demo" id="label_down_year" value="bar"/>
                                <span><i className="fas fa-arrow-down"> </i></span>
                            </label>

                        </div>

                    </div>

                    <div className="wrapper__genreFilter">
                        <label htmlFor="genreFilter">Genre: </label>
                        <select id="genreFilter" name="genreFilter">
                            <option value="comedy">Comedy</option>
                            <option value="adventure">Adventure</option>
                            <option value="romance">Romance</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="music">Music</option>
                        </select>
                    </div>

                    <div className="wrapper__ratingFilter">
                        <span htmlFor="ratingFilter">Rating: </span>
                        <div className="wrapper-for-radioButton">
                            <label htmlFor="label_up_rating">
                                <input type="radio" name="demo" id="label_up_rating" value="foo"/>
                                <span><i className="fas fa-arrow-up"> </i></span>
                            </label>
                            <label htmlFor="label_down_rating">
                                <input type="radio" name="demo" id="label_down_rating" value="bar"/>
                                <span><i className="fas fa-arrow-down"> </i></span>
                            </label>

                        </div>
                    </div>

                    <div className="wrapper__ratingFilter">
                        <span htmlFor="ratingFilter">View: </span>
                        <div className="wrapper-for-radioButton">
                            <label htmlFor="label_view">
                                <input type="checkbox" name="demo" id="label_view" value="foo"/>
                            </label>


                        </div>
                    </div>
                </form>


            </div>

        );
    }
}

export default FilterTable;


