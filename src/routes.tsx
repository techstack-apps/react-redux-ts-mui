import Profile from "./containers/Profile";
import Login from "./containers/Login";
import Feeds from "./containers/Feeds";

import {FC} from "react";
import { Navigate } from 'react-router-dom';

interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>,
    private: boolean,
    button: boolean
}

export const routes: Array<Route> = [
    {
        key: 'main-route',
        title: 'Profile',
        path: '/',
        enabled: true,
        component: Profile,
        private: true,
        button: false
    } ,
    {
        key: 'profile-route',
        title: 'Profile',
        path: '/profile',
        enabled: true,
        component: Profile,
        private: true,
        button: true
    } ,
    {
        key: 'login-route',
        title: 'Login',
        path: '/login',
        enabled: true,
        component: Login,
        private: false,
        button: false
    } ,
    {
        key: 'feeds-route',
        title: 'News',
        path: '/feed',
        enabled: true,
        component: Feeds,
        private: true,
        button: true
    }
]

interface PropType {
    component: React.FC;
}

export const PrivateRoute: FC<PropType> = ({ component:Component }) => {
    const user = localStorage.getItem("user");

    if (user) 
        return <Component/>
    return <Navigate to='/login' />;
};