const ThermalPrinter = require("node-thermal-printer").printer;
const PrinterTypes = require("node-thermal-printer").types;
const express =  require('express');

const app =  express();
app.listen(8080,()=>{
   console.log("listen 8080"); 
});

app.get('/print',(req,res)=>{
    let printer = new ThermalPrinter({
        type: PrinterTypes.EPSON,
        interface: "tcp://192.168.123.100",
    });
    
    printer.alignCenter();
    printer.println("Test case ");
    //await printer.printImage("./assets/olaii-logo-black.png");
    printer.cut();
    
    try {
        let execute = printer.execute();
        console.error("Print done!");
    } catch (error) {
        console.log("Print failed:", error);
    }
})

