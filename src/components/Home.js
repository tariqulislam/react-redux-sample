import React, {Component} from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    getAllWeatherInfoFromApi
} from '../reducers/Home/home.reducer'


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
            <h1> Home Page</h1>
            {
                this.props.showInfo && <p> On July 16, 1969, the Apollo 11 spacecraft launched from the Kennedy Space Center in Florida. Its mission was to go where no human being had gone before—the moon! The crew consisted of Neil Armstrong, Michael Collins, and Buzz Aldrin. The spacecraft landed on the moon in the Sea of Tranquility, a basaltic flood plain, on July 20, 1969. The moonwalk took place the following day. On July 21, 1969, at precisely 10:56 EDT, Commander Neil Armstrong emerged from the Lunar Module and took 
                his famous first step onto the moon’s surface. He declared, “That’s one small step for man, one giant leap for mankind.” It was a monumental moment in human history!</p>
            }
            <button onClick={() => this.props.goToAboutPage()}> Go To About Page</button>
         </div>
       )
   }
}

const mapStateToProps = (state) => ({
    showInfo: state.home.weathers
})


const mapDispatchToProps = dispatch => bindActionCreators({
    getAllWeatherInfoFromApi,
    goToAboutPage: () => push('/about-us')
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)