function function_name(a,b)
{
    console.log("xyz")
    console.log(a)
    console.log(b)
}
function_name(11,12);
function_name(112,113);

console.log("With using the function name");
function sum(a,b)
{
    c=a+b;
    return c;
}
x=sum(12,12);
console.log(x);

console.log("Without the function name");
y= function (a,b)
{
    c=a+b;
    return c;
}
x=y(11,11);
console.log(x);

console.log("With using arrow function ");
y=(a,b)=> {
    c=a+b;
    return c;
}
x=y(13,13);
console.log(x);