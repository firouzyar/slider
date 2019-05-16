import React,{Component,Fragment} from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from  '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    render(){
        return(
            <Fragment>
                <Toolbar/>
                <SideDrawer/>
                <div className="container">
                    <main className='content'>
                        {this.props.children}
                    </main>
                </div>
            </Fragment>
        )
    }
}
export default Layout;