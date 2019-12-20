import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            post: [],
        }
    }

    componentDidMount(){
        axios.get('https://randomuser.me/api/?results=10')
        .then((result)=>{
            this.setState({
                post: result.data
            })
        });
    }
    render() {
        return (
            <div></div>
                <h2>API newsorg</h2>
                <hr/>
                    {this.state.post.map((data,index) => {
                        return (
                            <div className="newsorg" key={index}>
                                <p>{data.name.title}&nbsp;{data.name.first}&nbsp;{data.name.last}</p>

                                <img src={data.picture.thumbnail} alt=""/>
                            </div>
                        )
                    })}
              <hr/>
          </div>
       );
    }
}
export default Home;