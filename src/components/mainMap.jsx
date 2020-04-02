import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'

class SimpleMap extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log("click");
  }
  render() {
    const { center, zoom } = this.props;
    if (!center || !zoom){
      return <div>Loading...</div>
    }
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCBzL2nnt27PIghDlqd_u6kQzkjRjGx5Rc" }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker
            lat={center.lat}
            lng={center.lng}
            text="My Marker"
            onClick={() => this.handleClick()}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;