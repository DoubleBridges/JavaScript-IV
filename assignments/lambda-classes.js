// CODE here for your Lambda Classes

class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }

    speak(){
        return `Hello, my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }

    demo(subject){
        return `Today we are learning about ${subject}`
    }

    grade(student, subject){
        return `${student} recieves a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.grade = attributes.grade;
    }

    listsSubjects(){
        for(let i=0; i<this.favSubjects.length; i++) {
            console.log(this.favSubjects[i]);
        }
    }

    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManagers extends Instructor {
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }

    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times`);
    }

    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s cade on {subject}`);
    }
}

const billy = new Instructor({
    name: "Billy",
    location: "Bucksnort",
    age: 45,
    favLanguage: 'FORTRAN',
    specialty: "Contempt",
    catchPhrase: "That's not how I would do it..."
})

const zoe = new Instructor({
    name: "Zoe",
    location: "Lulaville",
    age: 28,
    favLanguage: 'TyepScript',
    specialty: "Front-End",
    catchPhrase: "You can do it!"
})

const jeremiah = new Instructor({
    name: "Jeremiah",
    location: "Big Pond",
    age: 32,
    favLanguage: 'C++',
    specialty: "Back-end",
    catchPhrase: "Ribbit"
})

const bill = new ProjectManagers({
    name: "Bill",
    location: "Sonora",
    age: 40,
    favLanguage: 'JavaScript',
    specialty: "Middleware",
    catchPhrase: "That's interesting",
    gradClassName: "CS2",
    favInstructor: billy
})

const martha = new ProjectManagers({
    name: "Martha",
    location: "Philadelphia",
    age: 22,
    favLanguage: 'Python',
    specialty: "UX",
    catchPhrase: "Let's go!",
    gradClassName: "UX2",
    favInstructor: zoe
})

const jill = new ProjectManagers({
    name: "Jill",
    location: "D.C.",
    age: 25,
    favLanguage: 'JavaScript',
    specialty: "iOS",
    catchPhrase: "Go team!",
    gradClassName: "iOS4",
    favInstructor: jeremiah
})

const jeff = new Student({
    name: "Jeff",
    location: "Bucksnort",
    age: 45,
    previousBackground: "Landscaping",
    className: "Web12",
    favSubjects: ['HTML', 'JavaScript', 'CSS']
})

const angela = new Student({
    name: "Angela",
    location: "Tuscon",
    age: 50,
    previousBackground: "Administration",
    className: "CS23",
    favSubjects: ['HTML', 'JavaScript', 'Python']
})

const donny = new Student({
    name: "Donny",
    location: "Allerna",
    age: 29,
    previousBackground: "IT",
    className: "CS@$",
    favSubjects: ['Python', 'JavaScript', 'Rust']
})

donny.PRAssignment("Web Fundamentals");

const favInst = function(pm) {
    return `${pm.name}'s favorite instructor's catchphrase is "${pm.favInstructor.catchPhrase}".`
}

console.log(favInst(jill));