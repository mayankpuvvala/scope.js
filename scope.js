var x=15
function first(){
    var x= 1;
    console.log(x);
    function second(){
        var x=2;
        console.log(x);
    }
    second();
    function child(){
        console.log(x);
    }
    child();
    
}
first()

console.log(x);

var x= 'fcked up man, try let instead'
{
    var x= `it updates and you can't access old var `;
    console.log(x);
}
console.log(x);

// let has scope priority
let y= 1
{
    let y= 2;
    console.log(y);
    
}
console.log(y);

