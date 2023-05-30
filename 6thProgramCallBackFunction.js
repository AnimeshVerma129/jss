function abc(n)
{
    n(123);
}

function xyz(data)
{
    console.log(data);
}
abc(xyz);


console.log("Another Apporach ")
function abc(n){n(456);}
abc((data)=> {console.log(data);});