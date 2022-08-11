const Ship = function(length) {
  this.counter = 0
  this.length = length;
  this.hit = function() {
      this.counter++
  }
  this.array = []
  this.arraypush = function() {
      for(let i = 0; i < length; i++) {
          this.array.push(i)
      }
  }

  this.arraypush()
  this.sunk = function() {if(this.length <= this.counter){return 'Sunk'}else{return 'Not Sunk'}}
  
};



  module.exports = Ship;