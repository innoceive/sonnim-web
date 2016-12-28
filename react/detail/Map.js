import React, {Component} from 'react';

export class CreateMap extends Component{
    constructor(){
        super();
        this.state = {
            map: null,
            markerPos: null,
        }
    }

    render(){
        return (
            <div className="col-md-8" id="map" style={{height: '400px'}}></div>
        );
    }

    componentDidMount(){
        const options = initializeMapOption(this.props);
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

function initializeMapOption(props){
    const lat = props.value.lat;
    const lng = props.value.lng;
    var options = {
        center: new daum.maps.LatLng(lat, lng),
        level: 3
    }

    return options;
}

function setInfoWindow(markerPos, props){
    //set text
    var iwContent = '<div><p class="text-center">'+props.value.name+'</p></div>'
    //set pos
    return new daum.maps.InfoWindow({
        position: markerPos,
        content: iwContent

    });
}


