const {Resirvations } = require('./index.js');
const {assignVehicle}=require('./assignVehicleId.js')
console.log("======= Starting the assignment process =======")
assignVehicle('d100', 'car2'); // Younsse (Driver) + d100 (car)

assignVehicle('p100','plane1') // Khalid(Pilot) + plane1 (Airplane)

assignVehicle('d100', 'car3'); // Younsse (Driver) + Corolla (Car)

assignVehicle('c100', 'plane2'); // anass (Pilot) + A380 (Airplane)

assignVehicle('c12', 'plane2'); // anass (Pilot) + A380 (Airplane)

assignVehicle('p100', 'car2'); // anass (Pilot) + A380 (Airplane)


console.log("\n======= Final Booking List =======");
if (Resirvations.length===0){
console.log("No reservations yet.");
}else {
    const formationreservation=Resirvations.map(res=>{
        return  ` * [Reservation ID: ${res.reservationID}] - Employee: ${res.employeeId} - Vehicle: ${res.vehiclesId} - Date: ${res.reservationDate}`;
    })
    console.log(formationreservation.join('\n'))
}

