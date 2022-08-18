export {};

function Component(value: string) {
  console.log(value);

  // 데코레이터 함수
  return function (target: Function) {
    console.log(target);
    console.log(target.prototype);
  };
}

// 데코레이터 팩토리를 사용하면 값을 전달할 수 있습니다.
@Component("tabs")
class TabsComponent {}

// TabsComponent 객체 생성
const tabs = new TabsComponent();
