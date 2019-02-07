import React, {Component} from 'react';
import HeaderForTableComments from "./headerForTableComments/HeaderForTableComments";
import SingleRowComment from "./singleRowComment/SingleRowComment";
import FilterForComments from "../../filters/filterForComments/FilterForComments";


const commentsMovies = [
    {
        "Title": "Divergent",
        "Year": "2012",
        "Rated": "PG-13",
        "Released": "23 Mar 2012",
        "Runtime": "142 min",
        "Genre": "Adventure, Sci-Fi, Thriller",
        "Actors": "Stanley Tucci, Wes Bentley, Jennifer Lawrence, Willow Shields",
        "Plot": "Katniss Everdeen voluntarily takes her younger sister's place in the Hunger Games: a televised competition in which two teenagers from each of the twelve Districts of Panem are chosen at random to fight to the death.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_SX300.jpg",
        "imdbRating": "7.8",
        "comments": [
            {
                "comment": "Its interesting film",
                "nickNameUser": "MargaritaFir",
                "likes": "3",
                "dislikes": "0",
                "data": "21.12.17",
                "photoUser": "https://zabavnik.club/wp-content/uploads/foto_na_avu_devushek_22_22140847-300x200.jpg"
            }
        ]
    },
    {
        "Title": "Jurassic World",
        "Year": "2012",
        "Rated": "PG-13",
        "Released": "23 Mar 2012",
        "Runtime": "142 min",
        "Genre": "Adventure, Sci-Fi, Thriller",
        "Actors": "Stanley Tucci, Wes Bentley, Jennifer Lawrence, Willow Shields",
        "Plot": "Katniss Everdeen voluntarily takes her younger sister's place in the Hunger Games: a televised competition in which two teenagers from each of the twelve Districts of Panem are chosen at random to fight to the death.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_SX300.jpg",
        "imdbRating": "7.8",
        "comments": [
            {
                "comment": "Its interesting film",
                "nickNameUser": "MargaritaFir",
                "likes": "3",
                "dislikes": "0",
                "data": "15.12.17",
                "photoUser": "https://zabavnik.club/wp-content/uploads/foto_na_avu_devushek_22_22140847-300x200.jpg"
            }
        ]
    },
    {
        "Title": "The Hunger Games",
        "Year": "2012",
        "Rated": "PG-13",
        "Released": "23 Mar 2012",
        "Runtime": "142 min",
        "Genre": "Adventure, Sci-Fi, Thriller",
        "Actors": "Stanley Tucci, Wes Bentley, Jennifer Lawrence, Willow Shields",
        "Plot": "Katniss Everdeen voluntarily takes her younger sister's place in the Hunger Games: a televised competition in which two teenagers from each of the twelve Districts of Panem are chosen at random to fight to the death.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_SX300.jpg",
        "imdbRating": "7.8",
        "comments": [
            {
                "comment": "Its interesting film",
                "nickNameUser": "MargaritaFir",
                "likes": "6",
                "dislikes": "5",
                "data": "21.10.17",
                "photoUser": "https://zabavnik.club/wp-content/uploads/foto_na_avu_devushek_22_22140847-300x200.jpg"
            }

        ]
    }
];

class TableUserComments extends Component {

    render() {

        return (

            <div className="user_profile_comments">

                <FilterForComments/>
                <table className="table-for-comments">

                    <HeaderForTableComments/>

                    <tbody>

                    {commentsMovies.map((commentsMovie, i) => {
                            return <SingleRowComment
                                key={i}
                                comment={commentsMovie.comments[0].comment}
                                title={commentsMovie.Title}
                                data={commentsMovie.comments[0].data}
                                likes={commentsMovie.comments[0].likes}
                                dislikes={commentsMovie.comments[0].dislikes}
                            />
                        }
                    )}


                    </tbody>
                </table>
            </div>
        )
    }
}


export default TableUserComments;
