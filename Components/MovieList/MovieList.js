import React from "react";
import {ScrollView, StyleSheet, FlatList, RefreshControl} from "react-native"
import MovieListItem from "./MovieListItem/MovieListItem";

type Props = {
    movies: Object[],
    refreshing: boolean,
    onRefresh: Function,
    onItemPress?: Function
}
const movieList = (props: Props) => (
    <FlatList
        data={props.movies}
        keyExtractor={(item)=> String(item.id) }
        renderItem={({item})=>(
            <MovieListItem
                onPress={() => props.onItemPress(item)}
                original_title={item.original_title}
                poster_path={item.poster_path}
                genres = {item.genres}
            />
        )}
        refreshControl={
            <RefreshControl
                refreshing={props.refreshing}
                onRefresh={props.onRefresh}
            />
        }
    />
);

const styles = StyleSheet.create({
    list: {
        flex: 1
    }
});

export default movieList;
