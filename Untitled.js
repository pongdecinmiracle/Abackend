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
      isToggleOn: false,
      data: {},
      trackingnum: '',
      term:''
    }
                // { this.postTracking()}
                // {this.getTracking()}
      console.log(this.state.isToggleOn)
      this.handleChange = this.handleChange.bind(this)
      this.postTracking = this.postTracking.bind(this)
      this.togglepls = this.togglepls.bind(this);
    //  console.log(this.state.data)
  }


    onInputChange(term){
    console.log(this.state.term)
    this.setState({term});


  }


    handleChange(e) {
        console.log(e.target.name)
        this.state.data[e.target.name] = e.target.value
        this.setState(
            this.state

        )
    }





    postTracking() {
        const { refreshData } = this.props
        this.togglepls()
        console.log(this.state.isToggleOn)
        axios.post('http://localhost:3002/inventory', this.state.term)
            .then((res) => {
                console.log(res)
            }).then(() => {
                refreshData()
                this.setState({data: {}})
                // {this.getTracking()}
            })
    }



  getTracking() {
    axios.get('https://api.github.com/users/badapple47')
      .then((response) => {
        // console.log(response.data.login); // ex.: { user: 'Your User'}
        this.setState({ data: response.data }) // ex.: 200
      })
  }

  togglepls() {

    this.setState({
      isToggleOn : !this.state.isToggleOn
    })
  }






  render() {

          if (this.state.isToggleOn) {
     this.getTracking()
    } else {
      console.log('error')
    }

    return (
      <div className="Service_Tracking">






        {/* Tracking col-md-9*/}

        <div id="service-tracking-component">
          <h2 id="service-tracking-header">
            TRACKING
                                  </h2>
          {/*<form action="Service-Tracking" method="post">*/}
            <div className="input-group" id="service-tracking-search">

              <input   value={this.state.term}  onChange={event => this.onInputChange(event.target.value)} />
              <input type="text" className="form-control" placeholder="Input tracking number here..." name="trackno" value={this.state.data.trackno} onChange={this.handleChange}/>
              {this.state.data.trackno}

              <span className="input-group-btn">
                <button className="btn btn-default" type="Submit" onClick={this.postTracking} >post</button>
                {/*<button className="btn btn-default" type="Submit" onClick={this.getTracking}>get</button>*/}
              </span>

            </div>
          {/*</form>*/}
        </div>

        <div className="col-md-1"></div>
        <div className="col-md-10" id="service-tracking-system">
          {/* Tracking system col-md-10 in col-md-9 */}


          <div className="panel panel-default">
            <div className="panel-body">


              <h1> Tracking Number : XXXXXXXX </h1>



               {/*Wizard Progressbar ja*/}
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
                <h3>Tracking Number : {this.state.data.login} </h3>
                <h3>Export Date : {this.state.data.created_at} </h3>
                <h3>From : {this.state.data.type} </h3>
                <h3>Delivery Date : {this.state.data.updated_at} </h3>
                <h3>To : {this.state.data.url }</h3>


              </div>




                  <div className="container" id="service-tracking-table">

                      {/*https://bootsnipp.com/snippets/featured/mobile-friendly-api-documentation*/}





                      <div className="method">
                          <div className="row margin-0 list-header hidden-sm hidden-xs">
                              <div className="col-md-3"><div className="header">Property</div></div>
                              <div className="col-md-2"><div className="header">Type</div></div>
                              <div className="col-md-2"><div className="header">Required</div></div>
                              <div className="col-md-5"><div className="header">Description</div></div>
                          </div>



                          <div className="row margin-0">
                              <div className="col-md-3">
                                  <div className="cell">
                                      <div className="propertyname">
                                          CurrencyCode  <span className="mobile-isrequired">[Required]</span>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-2">
                                  <div className="cell">
                                      <div className="type">
                                          <code>String</code>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-2">
                                  <div className="cell">
                                      <div className="isrequired">
                                          Yes
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-5">
                                  <div className="cell">
                                      <div className="description">
                                          The standard ISO 4217 3-letter currency code
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="row margin-0">
                              <div className="col-md-3">
                                  <div className="cell">
                                      <div className="propertyname">
                                          PriceType  <span className="mobile-isrequired">[Required]</span>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-2">
                                  <div className="cell">
                                      <div className="type">
                                          <code>Int32</code>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-2">
                                  <div className="cell">
                                      <div className="isrequired">
                                          Yes
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-5">
                                  <div className="cell">
                                      <div className="description">
                                          The type of price
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="row margin-0">
                              <div className="col-md-3">
                                  <div className="cell">
                                      <div className="propertyname">
                                          WarehouseID  <span className="mobile-isrequired">[Required]</span>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-2">
                                  <div className="cell">
                                      <div className="type">
                                          <code>Int32</code>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-2">
                                  <div className="cell">
                                      <div className="isrequired">
                                          Yes
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-5">
                                  <div className="cell">
                                      <div className="description">
                                          The unique identifier for the warehouse
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="row margin-0">
                              <div className="col-md-3">
                                  <div className="cell">
                                      <div className="propertyname">
                                          ItemCodes
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-2">
                                  <div className="cell">
                                      <div className="type">
                                          <code>String[]</code>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-2">
                                  <div className="cell">
                                      <div className="isrequired">
                                          <span className="text-muted">No</span>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-5">
                                  <div className="cell">
                                      <div className="description">

                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="row margin-0">
                              <div className="col-md-3">
                                  <div className="cell">
                                      <div className="propertyname">
                                          LanguageID
                                          <a className="lookuplink" href="javascript:;">
                                              <i className="glyphicon glyphicon-search"></i>
                                          </a>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-2">
                                  <div className="cell">
                                      <div className="type">
                                          <code>Int32?</code>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-2">
                                  <div className="cell">
                                      <div className="isrequired">
                                          <span className="text-muted">No</span>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-5">
                                  <div className="cell">
                                      <div className="description">
                                          The customer's preferred language ID (ex. 0 (English), 1 (Spanish), etc.)
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
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
