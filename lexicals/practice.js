function x(){
    var a=7;
     function y(){
        console.log(a);
     }
     y();
}
x();
console.log(x);
var z=x();
console.log(z);

/*Use of closures:
- Module Design Pattern
- Currying
- Functions like once
- maintaining state in async world
- setTimeouts
- Iterators
- and many more...
* */