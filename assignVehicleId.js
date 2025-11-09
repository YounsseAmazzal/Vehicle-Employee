const {
  Car,
  Airplane,
  Driver,
  Pilot,
  Resirvation,
  vehiclesDB,
  employeeBD,
  Resirvations,
  reservationData
} = require('./index.js');

/**
 * @param {string} employeeId
 * @param {string} vehiclesId
 */
function assignVehicle(employeeId, vehiclesId) {
    console.log(`Assigning ${employeeId} to ${vehiclesId}`);

    const employee = employeeBD.find(e => e.Id === employeeId);
    const vehicle = vehiclesDB.find(v => v.Id === vehiclesId);

    if (!employee || !vehicle) {
        console.log("The vehicle or the employee doesn't exist");
        return;
    }

    const isPilot = employee instanceof Pilot;
    const isDriver = employee instanceof Driver;
    const isCar = vehicle instanceof Car;
    const isAirplane = vehicle instanceof Airplane;

    if (isPilot && isCar) {
        console.log(`Incompatibility error: Cannot assign a car (${vehicle.name}) to a pilot (${employee.name}).`);
    } else if (isPilot && isAirplane) {
        console.log(`Success: An aircraft (${vehicle.name}) has been assigned to the pilot (${employee.name}).`);
        const newReservation = new Resirvation(
            `res${reservationData.counter++}`,
            employee.Id,
            vehicle.Id,
            new Date().toLocaleDateString()
        );
        Resirvations.push(newReservation);
    } else if (isCar && isDriver) {
        console.log(`Success: A car (${vehicle.name}) has been assigned to the driver (${employee.name}).`);
        const newReservation = new Resirvation(
            `res${reservationData.counter++}`,
            employee.Id,
            vehicle.Id,
            new Date().toLocaleDateString()
        );
        Resirvations.push(newReservation);
    } else if (isAirplane && isDriver) {
        console.log(`Incompatibility error: Cannot assign an airplane (${vehicle.name}) to a driver (${employee.name}).`);
    } else {
        console.log("Error: Employee or vehicle type not supported.");
    }
}

module.exports = { assignVehicle };
