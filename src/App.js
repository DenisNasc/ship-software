import React from 'react';
import './App.css';

import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/header'
import About from './pages/about'
import InputTable from './pages/inputTable'

import store from './redux/store'

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
            <Header/>
            <Switch>
                <Route path='/home'  />
                <Route path='/about' component={About}/>
                <Route path='/inputTable' component={InputTable}/>
                <Route path='/' exact />
            </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default App;
