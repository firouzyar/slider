import React,{Component} from 'react';

class SlideShow extends Component{
    componentWillMount() {
        document.title = 'Hummingbird | slide show'
    }
    render(){
        return(
            <h1>slide show</h1>
        )
    }
}
export default SlideShow