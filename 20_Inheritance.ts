
// Declare class Student
class Student 
{ 
    // Characteristics
    Sname:string; 
  
    //constructor 
    constructor(value:string) 
    { 
       this.Sname = value 
    }  
 
    //Behaviour
    DisplayS():void 
    { 
       console.log("Name of student : "+this.Sname) 
    } 
 }

 // Inherite Student class
 class Employee extends Student
 {
    // Characteristics
    Eid : number;

    //constructor 
    constructor(value:number, name:string) 
    { 
        super(name);
        this.Eid = value; 
    }  
 
    //Behaviour
    DisplayE():void 
    { 
       console.log("ID of Employee : "+this.Eid) 
    }
 }

 // Create object of above class
 var obj1 = new Employee(11,"Krishna Wakte");
 obj1.DisplayS();
 obj1.DisplayE();
