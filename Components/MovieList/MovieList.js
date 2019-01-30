import React from "react";
import {ScrollView, StyleSheet, FlatList, RefreshControl} from "react-native"
import SubjectListItem from "./MovieListItem/MovieListItem";

type Props = {
    subjects: Object[],
    refreshing: boolean,
    onRefresh: Function,
    onItemPress?: Function
}
const movieList = (props: Props) => (
    <FlatList
        data={props.subjects}
        keyExtractor={(item)=> String(item.id) }
        renderItem={({item})=>(
            <SubjectListItem
                onPress={() => props.onItemPress(item)}
                title={item.title}
                subTitle={item.instructor}
                progress={item.progress}
                img={item.img}
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
