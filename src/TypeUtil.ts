interface IPerson {
  name: string;
  age: number;
  gender: string;
}

/**
 * 인터페이스의 모든 프로퍼티를 옵셔널 하게 변경
 */
type PartialPerson = Partial<IPerson>;
const partialPerson: PartialPerson = {
  gender: "undead", // optional
};

/**
 * 인터페이스의 모든 프로퍼티를 required하게 변경한다.
 */
type RequiredPerson = Required<PartialPerson>;
const requiredPerson: RequiredPerson = {
  name: "Jade",
  age: 29,
  gender: "male",
};

/**
 * 인터페이스의 프로퍼티중 일부(name, age)만 받도록 설정한다.
 */
type PickPerson = Pick<IPerson, "name" | "age">;
const pickPerson: PickPerson = {
  name: "jade",
  age: 29,
};

/**
 * 인터페이스의 일부 (name, age)는 required
 * gender는 optional로 받도록 선택한다.
 */
type PickPerson2 = Pick<IPerson, "name" | "age"> & Pick<Partial<IPerson>, "gender">;
const pickPerson2: PickPerson2 = {
  name: "jade",
  age: 29,
  gender: "male"
}

/**
 * 특정 속섬만 제거하기 Omit
 */
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>;
type SubPartial<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export default {};
