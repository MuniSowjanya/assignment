import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';
import '../static/css/list.css';
import { category } from '../config/category';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            category1: category,
            length: [1, 2, 3]
        };
    }
    componentDidMount() {
        let path = this.props.match.params.category;
        let path2 = this.props.match.params.city;
        
        console.log(this.props.match.params.category);
        if (path) {


            axios.get('http://localhost:5000/item/?category=' + path)
                .then((res) => {
                    this.setState({ data: res.data });
                }).catch(err => console.error(err))
        } else {
            axios.get('http://localhost:5000/item/cities/?city=' + path2)
                .then((res) => {
                    this.setState({ data: res.data });
                }).catch(err => console.error(err))

        }
    }
    render() {

        return (

            <div>
                <div className="container">
                    <Header />
                 
                    <hr />
                    {
                        this.state.data.length === 0 ? <NoAd /> : <ListItem data={this.state.data} />
                    }
                </div>

                <Footer />
            </div>

        );
    }
}

const ListItem = (props) => (
    <div>
        {
            props.data.map((item) => {
                return (
                    <NavLink to={`/item/${item._id}`} key={item._id}>
                        {console.log(item._id)}
                        <div className="row">
                            <div id="list">
                                <div id="item-img">
                                    <img src={'http://localhost:5000/uploads/' + item.photo[0]} alt="List-Item" height='120' id="img" />

                                </div>
                                <div id="item-detail">
                                    <p id="product-name">{item.title}</p>
                                    <p id="product-cate">{item.category}</p>
                                    <p id="seller-location">{item.city}</p>
                                    <p id="product-price"><span>Rs.</span>{item.price}</p>


                                </div>
                                <div id="item-icon">
                                    <i className="far fa-heart" ></i>
                                </div>


                            </div>
                        </div>
                    </NavLink>



                );

            })
        }


    </div>
)

const NoAd = () => (
    <div style={{ margin: '50px auto', width: '80%', borderRadius: '20px', height: '300px' }}>
      
        <h4 style={{ textAlign: 'center', color: 'gray' }}>Sorry :-( There is no Post</h4>

    </div>
)



export default List;