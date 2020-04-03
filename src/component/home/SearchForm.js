import React, { Component} from 'react';

import {connect} from 'react-redux';
import {searchMovie, fetchMovies} from '../../action/searchActions';

export class SearchForm extends Component{
    onChange = e =>{
         this.props.searchMovie(e.target.value);
    };
    onSubmit = e =>{
        e.preventDefault();
        this.props.fetchMovies(this.props.text);
    };

    render(){
        return(
            <div className="jumbotron jumbotron-fluid mt-5 text-center">
                <div className="container">
                    <h1 className="display-4 mb-3">
                        <i className="fa fa-search" />Search For Movie
                    </h1>
                    <form id="searchForm" onSubmit ={this.onSubmit}>
                        <input 
                            type="text"
                            className="form-control"
                            name="searchText"
                            placeholder="Search movie, Tv Series.."
                            onChange={this.onChange}
                        />
                        <button type="submit" className="btn btn-primary btn-bg mt-3">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    text: state.movies.text
})

export default connect(mapStateToProps, {searchMovie, fetchMovies})(SearchForm);