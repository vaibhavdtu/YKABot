import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Body from './components/Body/Body'
import Main from './components/Main/Main'
import './main.css'
export default class App extends React.Component {
    render() {
        console.log(<google />);
        return (
            <BrowserRouter>
                <div>
                    <Body className="body">
                        <Switch>
                            <Route path="/" component = {Main} />
                        </Switch>
                    </Body>
                </div>
            </BrowserRouter>
        );
    }
}
