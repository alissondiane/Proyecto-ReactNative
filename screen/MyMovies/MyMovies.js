import React, { Component } from 'react';
import { View, StyleSheet, Modal, Text } from 'react-native';
import MovieList from "../../Components/MovieList/MovieList";
import {connect} from "react-redux";
import {
    deselectMovie,
    loadMovie,
    loadMovieSuccess,
    selectMovie
} from "../../store/actions/movie.actions";

class MyMovies extends Component {
    loadMovies = () => {
        this.props.load();
        setTimeout(() => {
            this.props.loaded();
        }, 2000)
    };

    componentDidMount() {
        this.loadMovies();
    }

    render() {
        return(
            <View style={styles.container}>
                <Modal
                    visible={!!this.props.selected}
                    onRequestClose={() => {this.props.deselect()}}>
                    <View>
                        {
                            !this.props.selected ? null :
                                <Text>{ JSON.stringify(this.props.selected)}</Text>
                        }
                    </View>
                </Modal>
                {/*<Header title="My Courses"/>*/}

                <MovieList
                    onItemPress={(movie) => {
                        // this.props.select(subject)
                        this.props.navigation.navigate('MyMovieDetail', {movie})
                    }}
                    movies={this.props.movies}
                    refreshing={this.props.loading}
                    onRefresh={() => {
                        this.loadMovies()
                    }}
                />
                {/*<Tabs/>*/}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'black'
    }
});


const mapStateToProps = (state) => ({
    movies: state.movie.movies,
    loading: state.movie.loading,
    selected: state.movie.selected
});

const mapDispatchToProps = (dispatch) => ({
    load: () => dispatch(loadMovie()),
    loaded: () => dispatch(loadMovieSuccess()),
    select: (movie) => dispatch(selectMovie(movie)),
    deselect: () => dispatch(deselectMovie())
});

export default connect(mapStateToProps, mapDispatchToProps)(MyMovies)