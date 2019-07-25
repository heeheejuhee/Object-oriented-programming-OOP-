// 1: create straight object

var oDog1 = {
    name: 'Kina',
    weight: 10,
    eat: function(){
        this.weight += 0.1;
    },
    bark: function(){
        document.write('My name is ' + this.name);
    }
};
var oDog2 = {
    name: 'Bruce',
    weight: 10,
    eat: function(){
        this.weight += 0.1;
    },
    bark: function(){
        document.write('My name is ' + this.name);
    }
};
var oDog3 = {
    name: 'Dulux',
    weight: 20,
    eat: function(){
        this.weight += 0.1;
    },
    bark: function(){
        document.write('My name is ' + this.name);
    }
};

oDog1.eat();
oDog1.eat();
oDog1.bark();

console.log(oDog1);
console.log(oDog2);
console.log(oDog3);





// 2: Classical OOP

class Dog {
    constructor(name,weight){
        //initialise data
        this.name = name;
        this.weight = weight;
        this.friends = [];
    }
    eat(){
        this.weight += 0.1;
    }
    bark(){
        document.write('My name is ' + this.name);
    }
    like(oDog){
       this.friends.push(oDog); 
    }
    describeFeelings(){
        document.write('I have ' + this.friends.length + ' friends.');
        if(this.friends.length < 2){
            document.write(this.name + ' feels lonely');
        }else{
            document.write(this.name + ' feels happy');
        }
    }
}

var oDog1 = new Dog('Kina',10);
var oDog2 = new Dog('Bruce',2);
var oDog3 = new Dog('Dulux',20);

oDog2.talent = 'do maths';

oDog2.like(oDog1);
oDog2.like(oDog3);

// oDog1.eat();
// oDog2.bark();
console.log(oDog1);
console.log(oDog2.friends[1].name);
console.log(oDog3);

// Practice

class cat {
    constructor(name,color,weight){
        this.name = name;
        this.color = color;
        this.weight = weight;
    }
    eat(){
        this.weight += 0.1;
    }
    hunt(){
        this.weight - 0.1;
    }
    meow(){
        document.write('I am ' + this.name + '!');
    }
}

var oCat1 = new cat('Ham','Black',20);
var oCat2 = new cat('Lili','white',25);
var oCat3 = new cat('Sara','Brown',10);

oCat2.meow();
document.write(oCat1.name);
console.log(oCat2.weight);
console.log(oCat3.name);
console.log(oCat1.color);
console.log(oCat1);
