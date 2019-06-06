const classes = require("../src/binarySearchTree");
const BinarySearchTree = classes.BinarySearchTree;
const Node = classes.Node;

describe("Binary Search Tree", () => {
  it("should create Node with given value", () => {
    const newNode = new Node("value");
    expect(newNode.value).toBe("value");
    expect(newNode.left).toBeNull();
    expect(newNode.right).toBeNull();
  });

  let tree;
  beforeEach(() => {
    tree = new BinarySearchTree();
  });
  describe("Insert", () => {
    test("added node on empty tree should be the only node in the tree", () => {
      expect(tree.root).toBeNull();
      tree.insert(10);
      expect(tree.root.value).toBe(10);
    });
  
    it("should put lesser values than root to the left", () => {
      tree.insert(10);
      tree.insert(1);
      expect(tree.root.left.value).toBe(1);
      expect(tree.root.right).toBeNull();
    });
  
    test("given two numbers, one smaller then the other, should put them to the left and then to the left", () => {
      tree.insert(10);
      tree.insert(7);
      tree.insert(5);
      expect(tree.root.left.value).toBe(7);
      expect(tree.root.right).toBeNull();
      expect(tree.root.left.left.value).toBe(5);
    });
  
    it("should put greater values than root to the right", () => {
      tree.insert(10);
      tree.insert(11);
      expect(tree.root.right.value).toBe(11);
      expect(tree.root.left).toBeNull();
    });
  
    test("given two numbers, one bigger then the other, should put them to the right and then to the right", () => {
      tree.insert(10);
      tree.insert(12);
      tree.insert(14);
      expect(tree.root.right.value).toBe(12);
      expect(tree.root.left).toBeNull();
      expect(tree.root.right.right.value).toBe(14);
    });
  
    it("should ignore duplicates", () => {
      tree.insert(10);
      tree.insert(10);
      expect(tree.root.value).toBe(10);
      expect(tree.root.left).toBeNull();
      expect(tree.root.right).toBeNull();
    });
  });
});
