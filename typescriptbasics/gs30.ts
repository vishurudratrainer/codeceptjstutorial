class PrinterClass { 
   doPrint():void {
      console.log("doPrint() from Parent called…") 
   } 
} 

class StringPrinter extends PrinterClass { 
   doPrint():void { 
      super.doPrint() 
      console.log("doPrint() is printing a string…")
   } 
} 

var obj = new StringPrinter() 
obj.doPrint()


class StaticMem {  
   static num:number; 
   
   static disp():void { 
      console.log("The value of num is"+ StaticMem.num) 
   } 
} 

StaticMem.num = 12     // initialize the static variable 
StaticMem.disp()      // invoke the static method