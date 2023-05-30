
a={}
a[0]=10;
console.log(a[0]);


console.log("Using for (Old) loop")
a=[100,200,"xyz"];
for(i=0;i<a.length;i++)
console.log(a[i])

console.log("Using New for loop")
a=[100,200,"xyz"];
for(i in a)
console.log(a[i])