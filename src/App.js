import React from 'react';
import styled from 'styled-components';
import SimpleMap from './components/mainMap'

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
`;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      zoom: 11
    }
    this.updateLocation = this.updateLocation.bind(this);
  }

  updateLocation(position){
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    console.log(pos);
    this.setState({center: pos})
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.updateLocation)
    } else {
      // Browser doesn't support Geolocation
      console.log("location not available");
    }
  }
  render (){
    const { center, zoom } = this.state;
    if (!center || !zoom){
      return <div>Loading...</div>
    }
    return (
      <Wrapper>
        <SimpleMap
          center={center}
          zoom={zoom}
        />
      </Wrapper>
    );
  }
};

export default App;
