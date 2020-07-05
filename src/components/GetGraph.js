import React from 'react'
import Loader from './Loader';
import ShowImage from './ShowImage';

class GetGraph extends React.Component {

  state = {
  	image: null,  
    	loading: false
  }


  getRBCCount = async e => {
    this.setState({image:null, loading: true });
    e.preventDefault();
    const fetchResponse = await fetch('https://lab-report-backend.herokuapp.com/getrbc');
    const res = await fetchResponse.json();
    this.setState({image: res['image'], loading: false})
  }

  getMonocytes = async e => {
    this.setState({image:null, loading: true });
    e.preventDefault();
    const fetchResponse = await fetch('https://lab-report-backend.herokuapp.com/getmonocytes');
    const res = await fetchResponse.json();
    this.setState({image: res['image'], loading: false})
  }

  getLymphocytes = async e => {
    this.setState({image:null, loading: true });
    e.preventDefault();
    const fetchResponse = await fetch('https://lab-report-backend.herokuapp.com/getlymphocytes');
    const res = await fetchResponse.json();
    this.setState({image: res['image'], loading: false})
  }

  clearData = async e => {
    this.setState({image:null});
    e.preventDefault();
    const fetchResponse = await fetch('https://lab-report-backend.herokuapp.com/clear');
  }

  render() {

    return (
    	<div className="container">

    		<form className="card shadow trans2 ">
	        	<button className="btn trans" onClick = {this.getRBCCount}>Get Trend of RBC Count</button>
          		<button className="btn trans" onClick = {this.getMonocytes}>Get Trend of Monocytes</button>
	        	<button className="btn trans" onClick = {this.getLymphocytes}>Get Trend of Lymphocytes</button>
          		<button className="btn trans" onClick = {this.clearData}>Clear Stored Data</button>
	        	<div className="container p-3 ">
          			{this.state.loading ? 
            				<Loader />
            				:(
              				<div>
                				<ShowImage image = {this.state.image} />
              				</div>
              				)
          			}
          		</div>
        	</form>
    	</div>
   	)
  }
}

export default GetGraph;
