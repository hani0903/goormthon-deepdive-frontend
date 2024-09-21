console.log('hello world');
console.log(1234567);
console.log(false);
var greeting = '안녕하세요.'
console.log(greeting);
console.log({a: 'a', b: 'b'});
console.table({a: 'a', b: 'b'});

console.error("Error!");
console.warn('warning!');

console.time('hello');
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.timeEnd('hello'); //시간을 측정하려면 time 안에 있는 값과 timeEnd 안에 있는 값을 똑같이 적어야 한다.

console.clear();    //이걸 사용하면 콘솔을 클리어 할 수 있다.