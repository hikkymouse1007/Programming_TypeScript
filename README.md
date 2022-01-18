# Programming_TypeScript

オライリー

## let と const の型推論について

https://qiita.com/uhyo/items/6acb7f4ee73287d5dac0

## デフォルトの型引数の制約

https://typescriptbook.jp/reference/generics/default-type-parameter

MyErrorEvent に与えられる型 T を Error のサブクラスに限定しつつ、省略時は SyntaxError としたい場合は次のような書き方になります。

```
type MyErrorEvent<T extends Error = SyntaxError> = {
  error: T;
  type: string;
};
```

型引数の制約とデフォルト型引数の両立をする場合はデフォルト型引数が制約を満たしている必要があります。

```
interface Serializable<T extends string | number = bigint> {
  value: T;
  toString(): string;
}
```

この例は string | number 型に制約しているにもかかわらず、デフォルト型引数に bigint 型を指定しています。そのため制約を満足することができず TypeScript から指摘を受けます。

```
TS2344: Type 'bigint' does not satisfy the constraint 'string | number'.
```
