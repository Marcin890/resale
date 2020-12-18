import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from "react-router-dom";
import Login from "./Login/Login";
import { ThemeProvider } from "styled-components";
import themeLight from "./utils/themeLight";
import GlobalStyles from "./index.css";
import {AppWrapper} from './Main.css';





function Example() {
    return (
        <Router>
            <ThemeProvider theme={themeLight}>
                <GlobalStyles />
                <AppWrapper>
                    <Route exact path="/login" component={Login} />
                    </AppWrapper>
            </ThemeProvider>
        </Router>
    );
}

export default Example;

if (document.getElementById('root')) {
    ReactDOM.render(<Example />, document.getElementById('root'));
}
