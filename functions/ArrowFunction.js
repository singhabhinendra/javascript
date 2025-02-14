// getName is not a function .it gives type Error.
getName();
console.log(x);
console.log(getName);

var x=7;
var getName=()=>{
    console.log(x);
}