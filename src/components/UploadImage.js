import React from 'react'
import Loader from './Loader';
import Features from './Features';

class UploadImage extends React.Component {

  state = {
  	file: null, // The current file which is uploaded
  	user: null,  
    loading: false
  }

  onFormSubmit = async e => {
    this.setState({ loading: true });
    e.preventDefault();
    const formData = new FormData();
    formData.append('file',this.state.file);
    const fetchResponse = await fetch('https://lab-report-backend.herokuapp.com/getdigital',{
    	method: 'POST',
    	body: formData
    });
    const res = await fetchResponse.json();
    console.log( res)
    this.setState({user: res, loading: false})
  }

  onChange = e => this.setState({file:e.target.files[0], user: null});  

  render() {

    return (
    	<div className="container">

    		<form onSubmit={this.onFormSubmit} className="card shadow trans2">
	        
          <label htmlFor="files" className="btn btn-block text-center trans">Select File (Upto 500 KB)</label>
          Selected File: {this.state.file && this.state.file.name}
	        <input id="files"  type="file" onChange={this.onChange} style={{visibility:'hidden'}} />
	        <button className="btn btn-block trans" type="submit">Get</button>
	        <div className="container p-3 ">
          {this.state.loading ? 
            <Loader />
            :(
              <div>
                <Features user = {this.state.user} />
                
              </div>
              )
          }
          </div>
          
        </form>
	     
    	</div>
   )
  }
}



export default UploadImage