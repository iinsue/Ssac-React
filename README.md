## Ssac React

## Day3 Chapter6

- Javascript 의 map() 함수

> array.map(callback, [args]);

- 파라미터로 전달된 함수를 이용해서 배열 내의 각 요소를
  원하는 규칙에 따라 변환하고 _그 결과를 새로운 배열로 생성_

      ```
      // numbers 배열의 값을 제곱한 새로운 배열을 생성하는 방법
      const numbers = [ 1, 2, 3, 4 ];

      // map 함수를 이용 (권장)
      const newNumbers = numbers.map(function(n) { return n * n });
      const newNumbers2 = numbers.map(n => n * n);
      console.log(newNumbers);
      console.log(newNumbers2);

      // forEach 구문을 이용
      let newNumbers3 = [];
      numbers.forEach(n => {
      newNumbers3.push(n * n);
      });
      console.log(newNumbers3);
      ```

> IterationSample 컴포넌트를 map 함수를 이용해서 개선

      ```
      const IterationSample = () => {
      const names = ['눈사람', '얼음', '눈', '바람'];
      const nameList = names.map((name) => <li>{name}</li>);
      return <ul>{nameList}</ul>;
      };
      export default IterationSample;
      ```

> 개발자 도구에 Each child in a list should have a unique "key" prop. 경고가 발생하는 것을 확인할 수 있음

    ```
    //경고 해결 : key를 설정
    const IterationSample = () => {
        const names = ['눈사람', '얼음', '눈', '바람'];
        const nameList = names.map((name, index) => <li key={index}{name}</li>);
        return <ul>{nameList}</ul>;
    };

    export default IterationSample;
    ```

- Javascript의 concat() 함수

_상태변수가 배열 또는 객체인 경우에는_
_복사해서 변경 후 반영해야 하는데 이 때 사용_
