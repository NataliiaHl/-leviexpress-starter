import React from "react";
import { Seat } from "../Seat";

export const SeatRow = ({row, rowSelectedSeat, onSeatSelected}) => {
    return (
        <div className="seat-row">
            {row.map((seat, index) => 
            <Seat 
                key={index} 
                number={seat.number} 
                isOccupied={seat.isOccupied} 
                isSelected={rowSelectedSeat}
                onSelect={onSeatSelected}
            />)}
        </div>
    )
}

