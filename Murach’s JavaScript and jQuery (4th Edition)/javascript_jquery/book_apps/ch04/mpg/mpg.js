"use strict";

const $ = selector => document.querySelector(selector);

const getErrorMsg = lbl => `${lbl} must be a valid number greater than zero.`;

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const processEntries = () => {
    //parseFloat ignores some characters
    //https://flexiple.com/javascript/parsefloat-javascript
    const miles = ($("#miles").value);
    const gallons = parseFloat($("#gallons").value);

    if (isNaN(miles) || miles <= 0) {
        alert(getErrorMsg("Miles driven"));
        focusAndSelect("#miles");
    } else if (isNaN(gallons) || gallons <= 0) {
        alert(getErrorMsg("Gallons of gas used"));
        focusAndSelect("#gallons");
    } else {
        $("#mpg").value = (miles / gallons).toFixed(2);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#miles").focus();
    $("#mytest").addEventListener("click", myDisplayFunction);
    $("#mytest2").addEventListener("click", myDisplayFunction2);
    $("#globalVal").addEventListener("click", whatisglobalVal);
    //You can add more than one event to one button!
    //You can remove events that have been set!
    //$("#globalVal").removeEventListener("click", whatisglobalVal);

    //an anonymous function:
    $("#globalVal").addEventListener("click", () => {
        writeHere("globalVal clicked!");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    $("#myform").addEventListener("click", evt => {
        evt.preventDefault();
    });
});

//stacking functions:
function myfunc(){
    //vanilla function
}

const myArrowFunc = () => {
    //assign a function into a variable, this is useful for variable scope, and \
    //because you can pass a function into another function!
}

//////////////////////////
let myGlobalVar=0;

function myDisplayFunction() {
    myGlobalVar++;
    let myLocalVar=0;
    myLocalVar++;
    document.write( d1("Anthony"));
    document.write("<br />");
    myLocalVar++;
    myGlobalVar++;
    document.write( d2("Anthony"));
    document.write("<br />");
}
//these are arrow functions:
const d1 = passedIn => {
    myGlobalVar++;
    const disvar=`${passedIn} was passed in.`;
    return disvar;
}
//Same affect, the round brackets are used for multiple parms if you want them
const d2 = (passedIn) => {
    myGlobalVar++;
    //notice this variable name
    const disvar=`this is on the left: ${passedIn}`;
    return disvar;
}

//////////////////////////

function myDisplayFunction2() {
    myGlobalVar++;
    myWrite(d1,"Disp2");
    myWrite(d2,"Disp2");
}
function myWrite(theMethod, theParm){
    myGlobalVar++;
    writeHere(theMethod(theParm));
   // writeHere("<br />");
}




//////////

function whatisglobalVal(){
    writeHere("myGlobalVal is:" + myGlobalVar);
    writeHere("myLocalVar is:" + myLocalVar);
}

const writeHere = theVal => {
    $("#writehere").innerHTML += theVal + "<br />   ";
}