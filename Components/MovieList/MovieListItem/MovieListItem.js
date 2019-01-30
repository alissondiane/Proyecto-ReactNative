import React from "react";
import {View, StyleSheet, Text, Image, Slider} from "react-native"
import TouchableWrapper from '../../TouchableWrapper/TouchableWrapper'

type Props = {
    title: string,
    subTitle: string,
    progress: number,
    img?: string,
    onPress?: Function
}
const movieListItem = (props: Props) => (
    <TouchableWrapper onPress={props.onPress}>
        <View style={styles.item} >
            <View style={styles.left}>
                <Image
                    style={styles.img}
                    source={{ uri: props.img}}
                />
            </View>
            <View style={styles.right}>
                <Text style={styles.title} >{props.title}</Text>
                <Text style={styles.subTitle}>{props.subTitle}</Text>
                <Slider maximumValue={100}  value={props.progress} disabled />
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
        fontWeight: 'bold'
    },
    subTitle: {
        color: 'grey'
    },
    left: {
        width: '30%'
    },
    right: {
        width: '70%'
    }


});

export default movieListItem;
