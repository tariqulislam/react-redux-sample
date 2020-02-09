import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    getAllWeatherInfoFromApi
} from '../reducers/Home/home.reducer'
import Forcast from './Forcast'


class Home extends Component {
   constructor(props) {
       super(props);
       this.state = {
       }
   }
   componentWillMount () {
    this.props.getAllWeatherInfoFromApi()
   }

   componentDidCatch() {
       
   }

   render () {
       return (  
        <div>
            <Forcast weathers={this.props.weathers} />
        </div>
       )
   }
}

const mapStateToProps = (state) => ({
    weathers: state.home.weathers
})


const mapDispatchToProps = dispatch => bindActionCreators({
    getAllWeatherInfoFromApi
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)