'use stric'

const Counter = function ({initialValue = 0, step = 1}){
  
  this.value = initialValue;
  this.step = step;

  this.incriment = function(){
    this.value += this.step;
  }
};

Counter.prototype.incriment = function (){
   this.value += this.step
};
const counter = new Counter ({initialValue: 11, step: 5});

const counterFirst = new Counter ({initialValue: 12,step: 45});

console.log(counter,counterFirst);

counterFirst.incriment ();

console.log('counterFirst: ', counterFirst);

console.dir(counter);