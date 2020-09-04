import React from 'react';
import './App.css';
import TableContainer from './container/TableContainer/TableContainer'
// import Register from './component/Register/Register';
// import Editor from './component/Editor/Editor';
// import ModalWin from './component/Modal/ModalWin';
// import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      // <Router>
      //   <Fragment>
      //     <div className='container1'>
      //       <Switch>
      //         <Route exact path="/" component={TableContainer} />
      //         <Route exact path="/register" component={Register} />
      //         <Route exact path="/editor" component={Editor} />
      //       </Switch>
      //     </div>
      //   </Fragment>
      // </Router>

      <div className='container1'>
        <TableContainer />
      </div>
    )
  }
}
export default App;
