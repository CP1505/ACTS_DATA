var buff=Buffer.alloc(50);
for(var i=0;i<26;i++)
{
    buff[i]=i+97
}

var ss=new Buffer("sexy Boobs");
console.log(ss.length);
console.log(ss.toString());


var sexy=new Buffer("FuckEmUp");
var cutsexy=sexy.slice(4,6);
console.log(sexy.toString());
console.log(cutsexy.toString());



// var target=Buffer.alloc(sexy.length);
// //copy 0 to 5 chracters of buff2 into target buffer 
// //and start writing from 0 th position of target  
// sexy.copy(target,0,0,5);
// //console.log(sexy.toString());
// console.log(target.toString());

var targate=new Buffer(10);
sexy.copy(targate,0,0,3);
console.log(targate.toString());