let myObj={
    name:"amogh",
    age:25
};
let myObj_serialized=JSON.stringify(myObj);
console.log(myObj_serialized);
localStorage.setItem("myObj",myObj_serialized);
console.log(localStorage);
let myObj_deserialized=JSON.parse(localStorage.getItem("myObj"));
console.log(myObj_deserialized);