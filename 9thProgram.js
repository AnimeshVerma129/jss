a={
    name:"Acro",
    set Name(name){this.name=name;},
    get Name(){return this.name;}
}
a.Name="new value";
console.log(a.Name);