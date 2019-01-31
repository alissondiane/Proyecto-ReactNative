import React from "react";
import {View, StyleSheet, Text, Image, Slider} from "react-native"
import TouchableWrapper from '../../TouchableWrapper/TouchableWrapper'

type Props = {
    original_title: string,
    poster_path?: string,
    genres:[],
    onPress?: Function
}
const movieListItem = (props: Props) => (
    <TouchableWrapper onPress={props.onPress}>
        <View style={styles.item} >
            <View style={styles.left}>
                <Image
                    style={styles.img}
                    source={{ uri: props.poster_path}}
                />
            </View>
            <View style={styles.right}>


                <Text style={styles.title} >{props.original_title}</Text>
                <View style={styles.tags}>
                {
                    props.genres.map((genre) => {
                        return <Text style={styles.genre} key={genre.toString()}>{genre}</Text>

                    })
                }
                </View>
            </View>
        </View>
    </TouchableWrapper>
);

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    img: {
        width: 100,
        height: 100
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    subTitle: {
        color: 'grey'
    },
    left: {
        width: '30%'
    },
    right: {
        width: '70%'
    },
    genre:{
        color:'purple',
        fontSize:15,
        backgroundColor:'white',
        borderRadius:12,
        padding:2,
        margin:1
    },
    tags:{
        flexDirection: 'row'

    }


});

export default movieListItem;
