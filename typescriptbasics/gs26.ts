class Car { 
   //field 
   engine:string; 
 
   //constructor 
   constructor(engine:string) { 
      this.engine = engine 
   }  

   //function 
   disp():void { 
      console.log("Engine is  :   "+this.engine) 
   } 
}

class Shape { 
   Area:number 
   
   constructor(a:number) { 
      this.Area = a 
   } 
} 

class Circle extends Shape { 
   disp():void { 
      console.log("Area of the circle:  "+this.Area) 
   } 
}
  
var obj = new Circle(223); 
obj.disp()