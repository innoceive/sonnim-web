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
    console.log(props);
    let times = {
        startTime: null,
        endTime: null,
        outTime: null,
    }

    if(props.start === "undefined"){
        console.log("not in there");
        times = {
            startTime: props.value.start.slice(1,5),
            endTime: props.value.end.slice(1,5),
            outTime:  props.value.out.slice(1,5)
        }
    }

    return (
        <div>
            <p className="guestHouseCheckInTime">체크인 : {times.startTime} ~ {times.endTime}</p>
            <p className="guestHouseCheckOutTime">체크아웃 : {times.outTime}</p>
        </div>
    );
}