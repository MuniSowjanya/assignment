import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import SubmitAdd from '../components/submitadd';
import List from '../components/List';
import Account from '../components/account';
import SingleProduct from '../components/singleProducet';
import Offers from '../components/Offers/offers'
import Chat from '../components/Chat/Chat'
import Contact from '../components/Contactus/Contactus'
import About from '../components/About/About'
import Users from '../components/Allusers/allusers'


const NotFound = () => {
    return (<div>
        <h4>The Page You Are Requested Is Not Found. Error:404</h4>
    </div>
    );
}

class Routes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/user/login' component={Login} />
                    <Route exact path='/user/register' component={Register} />
                    <Route exact path='/posting' component={SubmitAdd} />
                    <Route exact path='/myaccount' component={Account} />
                    <Route exact path='/item/:id' component={SingleProduct} />
                    <Route exact path='/list/:category' component={List} />
                    <Route exact path='/cities/:city' component={List} />
                    <Route exact path='/offers' component={Offers}/>
                    <Route exact path='/chat' component={Chat}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/contact' component={Contact}/>
                    <Route exact path='/users' component={Users}/>


                    <Route exact path='*' component={NotFound} />

                </Switch>
            </Router>


        );
    }
}

export default Routes;

