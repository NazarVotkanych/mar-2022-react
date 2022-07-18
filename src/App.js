import React, {Component} from 'react';

import {Posts} from "./component";
import Comments from "./component/comments/Comments";


class App extends Component {
    render() {
        return (
            <div>
                <Posts/>
                <Comments/>
            </div>
        );
    }
}

export default App;