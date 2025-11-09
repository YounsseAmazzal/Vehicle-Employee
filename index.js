
class Vehicle{
    constructor(id,name,manufacturer){
        this.Id=id
        this.name=name
        this.manufacturer=manufacturer
    }
}
class Car extends Vehicle{
   constructor(id,name,manufacturer,carType){
    super(id,name,manufacturer);
    this.carType=carType;
   } 
}

class Airplane extends Vehicle{
    constructor(id,name,manufacturer,AirplaneType){
        super(id,name,manufacturer)
        this.AirplaneType=AirplaneType
    }
}
class Employee{
    constructor(id,name,data_of_birth){
        this.Id=id
        this.name=name
        this.data_of_birth=data_of_birth
    }
}
class Driver extends Employee{
    constructor(Id,name,date_of_birth,licenseId){
        super(Id,name,date_of_birth);
        this.licenseId=licenseId
    }
}
class Pilot extends Employee {
    constructor(id,name,data_of_birth,licenseId){
        super(id,name,data_of_birth);
        this.licenseId=licenseId
    }
}
class Resirvation {
    constructor(reservationID,employeeId,vehiclesId,reservationDate){
        this.reservationID=reservationID
        this.employeeId=employeeId
        this.vehiclesId=vehiclesId
        this.reservationDate=reservationDate
    }
}
const car1=new Car ('car1','Model S','Tesla','electric') 
const car2=new Car('car2','Corollla','Toyota','gas')
const car3=new Car('car3','Civic','Honda','gas')

const plane1=new Airplane('plane1','747','Boeing','Arabia')
const plane2=new Airplane('plane2','A380','Airbus','Wide-body')

const driver1=new Driver('d100','Younsse','2001-02-30')
const Pilot1=new Pilot('p100','Khalid','1990-11-06')
const Pilot2=new Pilot('c100','anass','2001-02-30')

const vehiclesDB=[car1,car2,car3,plane1,plane2];
const employeeBD=[driver1,Pilot1,Pilot2];


const Resirvations=[];
const reservationData = { counter: 1 };
module.exports = {
  Vehicle,
  Car,
  Airplane,
  Employee,
  Driver,
  Pilot,
  Resirvation,
  vehiclesDB,
  employeeBD,
  Resirvations,
  reservationData
};
