import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link ,Redirect} from 'react-router-dom';   

class Vehicle extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        console.log(this.props.items);
        let show = this.props.items.map(e => {
            return (
                <div class="card col-8 m-5">
                    <div class="card-body">
                        <h2 class="text-primary text-center">{e.carName}</h2>
                        <p>car description : - {e.desc}</p>
                        <h5> Vehicle Type : {e.type}</h5>
                        <h6>Vehicle Color : {e.color}</h6>
                        <h6>No. of seats : {e.noOfSeats}</h6>
                        <h5>Price : {e.price}/-</h5>
                        <img src={e.img}/>
                        <Link to={`/Book/${e.id}`} class="btn btn-outline-success m-5">Book Now</Link>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <h1  class="text-danger text-center">Pro_hire</h1>
                {show}
                
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps)(Vehicle) 