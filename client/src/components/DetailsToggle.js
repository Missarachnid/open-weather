import React from "react";

export default class DetailsToggle extends React.Component {
  //on click details window is opened, unless city doesn't exist or offline
  handleClick = (e) => {
    e.preventDefault();
    if(this.props.city === null){
      return false;
    } else {
      this.props.detailsToggle();
    }
  }
  
  render = () => (
    <div className='d-flex justify-content-center'>
      <div className="card d-flex justify-content-center" id='details-toggle'>
        <div className="card-body">
        <div className='show-data'>
          <div className='row' onClick={e => this.handleClick(e)}>
            <div className="col-3"></div>
            <div className="col-4">
            <p className="toggle-button">details</p>
            </div>
            <div className="col-2">
            <p className="toggle-button">+</p>
            </div>
            <div className="col-3"></div>
          </div>
        </div>          
      </div>
    </div>
  </div>
  )
}
