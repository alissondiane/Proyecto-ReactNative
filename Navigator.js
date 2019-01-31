import React from 'react'
import {
    createAppContainer,
    createBottomTabNavigator,
    createStackNavigator,
    createSwitchNavigator
} from 'react-navigation';
import MyMovies from "./screen/MyMovies/MyMovies";
import Search from "./screen/Search/Search";
import Account from "./screen/Account/Account";
import MyMovieDetail from "./screen/MyMovies/MyMovieDetail/MyMovieDetail";


const defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: 'purple'
    },
    headerTintColor: '#fff'
};

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
    {defaultNavigationOptions}
);

const SearchStack = createStackNavigator(
    {Search},
    {defaultNavigationOptions}
);

const AccountStack = createStackNavigator(
    {Account},
    {defaultNavigationOptions}
);


/*const MenuTab = createBottomTabNavigator(
    {
        Search: {
            screen: SearchStack
        },
        MyMovies: {
            screen: MyMovieStack
        },
        Account: {
            screen: AccountStack
        },
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
*/
const Navigator = createSwitchNavigator({
    Menu: MyMovieStack
});

export default createAppContainer(Navigator);