/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React from 'react';
import { Switch, Route } from 'react-router';
import Weather from '../Weather';
import History from '../History';
import HistoryItem from '../History/components/HistoryItem';
import Profile from '../Profile/index';
import HeaderProtected from '../../components/Header/HeaderProtected';

import axiosInstance from '../../core/axios';

class Protected extends React.Component {
    state = {
        isAuthenticated: false,
    }

    componentDidMount() {
        // checkLogin();
        console.log('Проверка логина', this.props);
        const { history } = this.props;
        axiosInstance.get('/api/checkLogin')
            .then(() => {
                this.setState({
                    isAuthenticated: true,
                }, () => {
                    // history.push('/weather');  //постоянный редирект, если залогинен
                });
            })
            .catch((err) => {
                history.push('/login');
            });
    }


    render() {
        const { isAuthenticated } = this.state;
        if (!isAuthenticated) return null;


        return (
            <>
                <HeaderProtected />
                <Switch>
                    <Route path='/weather' exact component={Weather} />
                    <Route path='/history' exact component={History} />
                    <Route path='/history/:_id' component={HistoryItem} />
                    <Route path='/profile' exact component={Profile} />
                </Switch>
            </>
        );
    }
}

export default Protected;
