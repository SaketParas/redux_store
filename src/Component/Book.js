import React, { Component } from 'react'
import { connect } from 'react-redux';
class Book extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        var datas = this.props.add
        var id_amit = this.props.match.params.id
        return (
            <div>
                {
                    datas.map((e) => {
                        if(e.id == id_amit){
                            return(
                                <div>
                                    <h1>{e.carName}</h1>
                                    <img src={e.img}/>
                                </div>
                            )
                        }
                    })
                }
            </div>
        )
    }
}
const mapStateToprops = (state) => {
    return{
        add: state.items
    }
}
export default connect(mapStateToprops) (Book)