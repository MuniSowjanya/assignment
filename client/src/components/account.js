import React from 'react';
import Header from './Header';
import Footer from './footer';
import MyAds from './layouts/myads';
import logo from './logo.jpg'
import Chat from './Chat/Chat'


import '../static/css/account.css';

class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
   
    render() {
        return (
            <div>
                <div className="container">
                    <Header />
                    <ul className="nav nav-tabs md-tabs nav-justified">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#panel1" role="tab">You'r Posts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#panel2" role="tab">Messages</a>
                        </li>

                    </ul>
                    <div className="tab-content card" id="tabcard">

                        <div className="tab-pane fade in show active" id="panel1" role="tabpanel">


                            <MyAds />
                        </div>

                        <div className="tab-pane fade in show active" id="panel2" role="tabpanel">
                            <br />
                          
                              
                              <Chat/>
                          
                        </div>
                       
                        <div className="tab-pane fade" id="panel3" role="tabpanel">
                            <br />
                            
                        </div>

                    </div>
                </div>
                <Footer />
            </div>

        );
    }
}

export default Account;