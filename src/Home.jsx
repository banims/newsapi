import React, { Component } from 'react';
import './Home.css'
import Axios from 'axios';

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            post: [],
        }
    }

    componentDidMount(){
        Axios.get('https://randomuser.me/api/?results=12')
        .then(res => {
            this.setState({
                post: res.data.results
            })
        });
    }
    render() {
        return (
            <div>
                <h2 className="title">API newsorg</h2>
                    {this.state.post.map((data,index) => {
                        return (
                            <div className="newsorg" key={index}>
                                <p>{data.name.title}&nbsp;{data.name.last}</p>

                                <img src={data.picture.thumbnail} alt=""/>
                            </div>
                        )
                    })}
          </div>
       );
    }
}
export default Home;