import {Component} from 'react';

class MapView extends Componen{
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });
    }
    render(){
        return (

        );
    }
}
