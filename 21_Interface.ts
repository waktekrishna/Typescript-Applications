

// Declare interface
interface Student 
{ 
    name:string, 
    college:string, 
    fun:()=>string 
 } 
 
 // Implement the above interface
 var obj1:Student = 
 { 
    name:"Krishna Wakte",
    college:"Pune University", 
    fun: ():string =>{return "Welcome to India"} 
 }
 
 // Display contents of object
 console.log("Students Object obj1:") 
 console.log(obj1.name) 
 console.log(obj1.college) 
 console.log(obj1.fun())  
 
  // Implement the above interface
 var obj2:Student = 
 { 
    name:"Akshay Wakte",
    college:"Modern", 
    fun: ():string =>{return "welcome to Pune"} 
 } 
   
  // Display contents of object
 console.log("Students Object obj2") 
 console.log(obj2.name) 
 console.log(obj2.college)
 console.log(obj2.fun())  
 