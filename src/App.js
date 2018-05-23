import React from 'react';
import './App.scss';
import { NavBar,Icon } from 'antd-mobile';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

export class Bookstore extends React.Component{
    render(){
        return(
            <div className="Bookstore">
                <NavBar
                    leftContent={
                        [
                            <Icon key="0" type="left" />,
                             <Link to="/detail" key="1">
                                书架
                            </Link>
                        ]
                    }
                    rightContent={
                        [
                            <Icon key="0" type="search" />
                        ]
                    }
                >
                    书城
                </NavBar>
            </div>
        )
    }
}

export class BookDetail extends React.Component{
    render(){
        return(
            <div className="Bookstore">
                <NavBar
                    leftContent={
                        [
                            <Icon key="0" type="left" />,
                            <Link key="1" to="/">书架</Link>
                        ]
                    }
                    rightContent={
                        [
                            <Icon key="0" type="search" />
                        ]
                    }
                >
                    详情
                </NavBar>
            </div>
        )
    }
}

class App extends React.Component{
    render(){
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Bookstore}></Route>
                    <Route exact path="/detail" component={BookDetail}></Route>
                </div>
            </Router>
        )
    }
}

export default App;
