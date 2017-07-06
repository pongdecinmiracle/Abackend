import React, { Component } from 'react';
import './Service-Tracking.css';
import LogoCat from '../../pic/cat.jpg';
import axios from 'axios'



class Service_Tracking extends Component {


  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      isLoading: true,
      data: [],
      track: ["ET089578821TH"]
    }
  {this.postTracking()}
  {this.getTracking()}

  }

   
   
  

   postTracking() {
        axios.post('http://localhost:3002/api1', this.state.track)
            .then((res) => {
                console.log(res)
            })
            
    }




// https://api.github.com/users/badapple47
  getTracking() {
    axios.get('http://localhost:3002/api1')
      .then((response) => {
        // console.log(response.data.login); // ex.: { user: 'Your User'}
        this.setState({ data: response.data }) // ex.: 200          
      })
  }





  render() {
                //    { this.postTracking()}
                // {this.getTracking()}
    return (
      <div className="Service_Tracking">






        {/* Tracking col-md-9*/}

        <div id="service-tracking-component">
          <h2 id="service-tracking-header">
            TRACKING
                                  </h2>
          <form action="Service-Tracking" method="post">
            <div className="input-group" id="service-tracking-search">
              <input type="text" className="form-control" placeholder="Input tracking number here..." />
              <span className="input-group-btn">
                <button className="btn btn-default" type="Submit">Check</button>
              </span>

            </div>
          </form>
        </div>

        <div className="col-md-1"></div>
        <div className="col-md-10" id="service-tracking-system">
          {/* Tracking system col-md-10 in col-md-9 */}


          <div className="panel panel-default">
            <div className="panel-body">


              <h1> Tracking Number : XXXXXXXX </h1>



              {/* Wizard Progressbar ja*/}
              <div className="container">
                <div className="row bs-wizard" >

                  <div className="col-xs-3 bs-wizard-step complete">
                    <div className="text-center bs-wizard-stepnum">Step 1</div>
                    <div className="progress"><div className="progress-bar"></div></div>
                    <a href="#" className="bs-wizard-dot"></a>
                    <div className="bs-wizard-info text-center">Test1</div>
                  </div>


                  <div className="col-xs-3 bs-wizard-step active">
                    <div className="text-center bs-wizard-stepnum">Step 3</div>
                    <div className="progress"><div className="progress-bar"></div></div>
                    <a href="#" className="bs-wizard-dot"></a>
                    <div className="bs-wizard-info text-center">Test2</div>
                  </div>

                  <div className="col-xs-3 bs-wizard-step disabled">
                    <div className="text-center bs-wizard-stepnum">Step 4</div>
                    <div className="progress"><div className="progress-bar"></div></div>
                    <a href="#" className="bs-wizard-dot"></a>
                    <div className="bs-wizard-info text-center"> Test3</div>
                  </div>
                </div>
              </div>



              {/* end wizard progress bar ja*/}

              {/*Tracking-detial 1 */}


              <div id="service-tracking-detail1">
                <h3>Tracking Number : {this.state.data.trackno} </h3>
                <h3>Export Date : {this.state.data.created_at} </h3>
                <h3>From : {this.state.data.location} </h3>
                <h3>Delivery Date : {this.state.data.checkpoint_time} </h3>
                <h3>To : {this.state.data.message }</h3>
                
                
                



              </div>






              {/*End Tracking-detial 1 */}






            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>












    );

  };
};


export default Service_Tracking;
