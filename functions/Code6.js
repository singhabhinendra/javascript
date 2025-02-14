
/* In this code, it gives undefined error because x is not
 defined in the memory (Reference Error).
 --> Difference btw not defined and undefined-->
  undefined : At the time of memory creation ,it allocated undefined in memory to variable because of variable
   that has been declared but not assigned a value.
  not defined : A variable that has not been declared at all.*/
getName();
console.log(x);
console.log(getName);//It gives the function in this
//Syntax like [Function: getName] .

function getName(){
    console.log("Hello Abhinendra Singh ");
}
