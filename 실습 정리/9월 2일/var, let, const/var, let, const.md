# var, let, const

## 변수 선언 방식

|        | 중복 선언  | 재할당 |
|--------|----------|----------|
| `var`  | ⭕     | ⭕     |
| `let`  | ❌     | ⭕     |
| `const`  | ❌     | ❌     |


## var
중복 선언과 재할당이 모두 가능하다.

```javascript
//var
var greeting = 'hello';
console.log(greeting); //hello

var greeting = 'hi'; //중복 선언 o
console.log(greeting); //hi - 

greeting = '재할당'; //재할당 o
console.log(greeting); //재할당 
```

## let

let의 경우 중복선언을 하면 에러가 발생한다.

```javascript
let greeting = 'hello';
console.log(greeting); //hello

let greeting = 'hi'; //중복 선언 -> 에러 발생
```
그렇지만 재할당은 가능하다.
```javascript
greeting = '재할당'; //재할당 o
console.log(greeting); //재할당 
```

## const
const는 중복 선언과 재할당 모두 불가능하다.