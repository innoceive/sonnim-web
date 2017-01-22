import React, {Component} from 'react';

export class CreateDaumMap extends Component{
    constructor(){
        super();
        this.state = {
            map: null,
            markerPos: null,
        }
    }

    render(){
        return (
            <div id="map" style={{height: '400px'}}></div>
        );
    }

    componentDidUpdate(){
        const options = initializeMapOption(this.props.gps);
        console.log(options);
        const container = document.getElementById('map');
        const map = new daum.maps.Map(container, options);

        const markerPos = options.center;
        const marker = new daum.maps.Marker({
            position: markerPos
        });

        marker.setMap(map);

        var infowindow = setInfoWindow(markerPos, this.props);
        infowindow.open(map, marker);
    }
}

function initializeMapOption(gps){
    const options = {
        center: new daum.maps.LatLng(gps.lat, gps.long),
        level: 3
    }

    return options;
}

function setInfoWindow(markerPos, props){
    //set text
    var iwContent = '<div><p class="text-center">'+props.name+'</p></div>'
    //set pos
    return new daum.maps.InfoWindow({
        position: markerPos,
        content: iwContent
    });
}

export class CreateNaverMap extends Component{
    render(){
        return (
            <div id="map" style={{height: '400px'}}></div>
        );
    }

    componentDidUpdate(){
      const gps = this.props.gps;
      /*
      * https://navermaps.github.io/maps.js/docs/tutorial-3-geocoder-geocoding.example.html
      * 위에서 제공하는 주소 -> 좌표계를 이용하여 위도 경도 검색
      */
      const center = new naver.maps.LatLng(gps.lat, gps.long);
      const map = new naver.maps.Map('map', {center: center, zoom: 13});
      const marker = new naver.maps.Marker({position: center, map: map});
    }
}
