type KeyValue<V> = {
    [key: string]: V
}

class MyMap<K, V> {
  private hash:  KeyValue<V>

  constructor(initialKey: K, initialValue: V) {
    this.hash = {[`${initialKey}`]: initialValue}
  }

  getAll(): KeyValue<V>{
    return this.hash
  }

  get(key: K): V {
    return this.hash[`${key}`]
  }

  set(key: K, value: V): void {
    this.hash[`${key}`] = value
    console.log("success!!")
  }

  merge<K1, V1>(map: MyMap<K1, V1>): MyMap<K | K1, V | V1> {
    return
  }
  static of<K, V>(k: K, v: V): MyMap<K, V> {
    return
  }
}

interface MyMap<K, V> {
  get(key: K, value: V)
  set(key: K, value: V)
}

let myMap = new MyMap("key1", 1)
console.log(myMap.get("key1"))
console.log(myMap.set("key2", 2))
console.log(myMap.get("key2"))
console.log(myMap.getAll())

let a = new MyMap<string, number>("k", 1)
let b = new MyMap<string, boolean>("k", true)

a.get("k")
b.get("k")