import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from 'material-ui/Typography';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(nextProps){
   
  }

  render(){

    return (
    <div className='mdl-grid'>
         <Typography type="display4" gutterBottom>
          Title Here
        </Typography>
      <br/>
    </div>
   );
  }

}

const mapStateToProps = function (state, ownProps){
  return {
    ...state
  }
}

export default connect(mapStateToProps)(App)
