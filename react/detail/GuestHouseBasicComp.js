export function Name(props){
    return (
        <h3 className="guestHouseName">{props.value}</h3>
    );
}

export function Address(props){
    return (
        <p className="guestHouseAddress">{props.value}</p>
    );
}

export function CheckInTime(props){
    let times = {};
    if(props.value.start){
        times = {
            startTime: cutSecTime(props.value.start),
            endTime: cutSecTime(props.value.end),
            outTime: cutSecTime(props.value.out),
        }
    }
    return (
        <div>
            <p className="guestHouseCheckInTime">체크인 : {times.startTime} ~ {times.endTime}</p>
            <p className="guestHouseCheckOutTime">체크아웃 : {times.outTime}</p>
        </div>
    );
}

function cutSecTime(originString){
    return originString.slice(0,5);
}

export function ImageArea(props){
    return (
        <img src={props.imageUrl} alt=""/>
    );
}