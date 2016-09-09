var id = (function () {

  var count = 0;
return function () {
    count += 1;
    return count;
}

})();
var log = (function (){
console.log(id());
console.log(id());
console.log(id());

})
module.exports ={
 send:log()
}