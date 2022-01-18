type TreeNode = {
  value: string
}

type LeafNode = TreeNode & {
  isLeaf: true
}
type InnerNode = TreeNode & {
  children: [TreeNode] | [TreeNode, TreeNode]
}

let a: TreeNode = {value: 'a'}
let b: LeafNode = {value: 'b', isLeaf: true}
let c: InnerNode = {value: 'c', children: [b]}

function mapNode<T extends TreeNode>(
  node: T,
  f: (value: string) => string)
{
  console.log(node)
  return {
    ...node,
    value: f(node.value)
  }
}

let a1 = mapNode(a, _ => _.toUpperCase())
let b1 = mapNode(b, _ => _.toUpperCase())
let c1 = mapNode(c, _ => _.toUpperCase())

console.log(`a1: ${a1.value}`) // A
console.log(`b1: ${b1.isLeaf}`) // B
console.log(`c1.children: ${c1.children}`) // C
console.log(`c1.children[0]: ${c1.children[0].value}`) // B
