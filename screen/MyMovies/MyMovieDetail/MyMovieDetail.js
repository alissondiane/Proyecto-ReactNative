import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const {width} = Dimensions.get('window');

class MyMovieDetail extends Component{
    static navigationOptions = ({navigation}) => {
        const {title} = navigation.getParam('movie');
        return {
            title: title
        }
    };
    render(){
        const movie = this.props.navigation.getParam('movie');
        return(
            <View style={styles.container}>
                <Image
                    style={{width: width, height: 200}}
                    source={{uri: movie.poster_path}} />
                <View style={styles.content}>
                    <Text style={styles.title} >{movie.original_title}</Text>
                    <Text style={styles.date} >{movie.release_date}</Text>
                    <Text style={styles.overview} >{movie.overview}</Text>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        padding: 10,
        flex: 1
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 20
    },
    overview:{
        fontSize:19
    },
    date:{
        fontSize:18,
        color:'purple',
        fontWeight:'bold'
    }
});



export default MyMovieDetail;
