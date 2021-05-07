var person = { 
   firstname:"Tom", 
   lastname:"Hanks" 
}; 
var invokeperson = function( param: { firstname:string, lastname :string }) { 
   console.log("first name :"+param.firstname) 
   console.log("last name :"+param.lastname) 
} 
invokeperson(person)