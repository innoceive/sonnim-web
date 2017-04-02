import React, {Component} from 'react';

var map;
window.initMap = function() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
};


class MapView extends Component {

    render() {
        return (
            <div id="map" style={style}>
                <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCxqzT1VA3zindKRO6pYcyaIP9vS1gL5dY&callback=initMap"
            type="text/javascript">
                </script>
            </div>

        );
    }
}

export default MapView;
