import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'

const AnyReactComponent = ({ lat, long, text }) => (
  <Marker text={text} />
)

class SimpleMap extends Component {
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
          <AnyReactComponent
            lat={center.lat}
            lng={center.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;