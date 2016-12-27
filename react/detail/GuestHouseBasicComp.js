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
    const startTime = props.value.start.slice(0,5);
    const endTime = props.value.end.slice(0,5);
    const outTime=  props.value.out.slice(0,5);

    return (
        <div>
            <p className="guestHouseCheckInTime">체크인 : {startTime} ~ {endTime}</p>
            <p className="guestHouseCheckOutTime">체크아웃 : {outTime}</p>
        </div>
    );
}