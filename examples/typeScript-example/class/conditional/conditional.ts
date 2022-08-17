export {};

//조건부 타입
type IsNumber<T> = T extends number ? "yse" : "no";
type T1 = IsNumber<number>; // type T1 = "yes"
type T2 = IsNumber<string>; // type T2 = "no"

//조건부 타입 : 유니온 타입

type T3 = IsNumber<string | number>;
type T4 = IsNumber<string> | IsNumber<number>;

type Array2<T> = Array<T>;
type T5 = Array2<string | number>;
