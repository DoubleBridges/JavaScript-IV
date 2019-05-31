class Parent {
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.job = attr.job;
    }
}

class Child extends Parent {
    constructor(attr){
        super(attr);
        this.favToy = attr.favToy;
        this.parent = attr.parent;
    }
}


const pops = new Parent({
    name: "Pops",
    age: 43,
    job: "Accountant",
})

const billy = new Child({
    name: "Billy",
    age: 12,
    favToy: "Scuba Steve",
    parent: pops


})

console.log(billy.parent.job);
                //Accountant

console.log(billy.Parent.job);
                //undefined

