import {
    createAppContainer,
    createBottomTabNavigator,
    createStackNavigator
} from 'react-navigation';
import MyMovies from "./screens/MyMovies/MyMovies";
import MyMoviesDetail from "./screens/MyMovies/MyMovieDetail/MyMovieDetail";

const MyMovieStack = createStackNavigator(
    {
        MyMovies: {
            screen: MyMovies,
            navigationOptions: {
                title: 'My Movies'
            }
        },
        MyMovieDetail
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#ea5252'
            },
            headerTintColor: '#fff'
        }
    }
);

const Navigator = createBottomTabNavigator(
    {
        MyMovies: MyMovieStack
    },
    {
        initialRouteName: 'MyMovies',
        tabBarOptions: {
            activeTintColor: '#fff',
            inactiveTintColor: '#9e9e9e',
            style: {
                backgroundColor: '#607d8b'
            },
            labelStyle: {
                fontSize: 18
            },
            showIcon: false,
            tabStyle: {
                justifyContent: 'center'
            }
        }
    }
);

export default createAppContainer(Navigator);