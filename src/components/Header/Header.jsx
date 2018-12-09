import React, { Component } from 'react';

class Header extends Component {
    render() {
        let header;
        if (this.props.location.pathname === '/admin') { // header for /admin view
            header = <h1 className="App-title">Feedback Results</h1>            
        } else { // header for /form view
            header = <div
            ><h1 className="App-title">Feedback!</h1>
                <h4><i>Don't forget it!</i></h4>
            </div>;
        }
        return(
            <header className="App-header">
                {header}
            </header>
        );
    }
}

export default Header;