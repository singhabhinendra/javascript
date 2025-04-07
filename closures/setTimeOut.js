function x(){
    for(var i=0;i<=5;i++){
        function close(i){
            setTimeout(function(){
                console.log(i);
            },i*1000);
            close(i);
        }

    }

    console.log("Namaste Javascript");
}
x();

/*Use of closures:
- Module Design Pattern
- Currying
- Functions like once
- maintaining state in async world
- setTimeouts
- Iterators
- and many more...
* */