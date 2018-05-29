require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import {add} from 'shared/math';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <p>1 + 2 = {add(1, 2)}</p>
        <p>ReactJS</p>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
