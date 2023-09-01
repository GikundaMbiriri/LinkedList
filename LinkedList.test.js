const LinkedList = require("./LinkedList");

describe("#insertAtHead", () => {
  test("it adds the element to the beginning of the list", () => {
    const l1 = new LinkedList();
    l1.insertAtHead(10);
    const oldHead = l1.head;
    l1.insertAtHead(20);

    expect(l1.head.value).toBe(20);
    expect(l1.head.next).toBe(oldHead);
    expect(l1.length).toBe(2);
  });
});
describe("#getByIndex", () => {
  describe("with index less than zero", () => {
    test("it returns null", () => {
      const l1 = LinkedList.fromValues(10, 20);

      expect(l1.getByIndex(-1)).toBeNull();
    });
  });
  describe("with index greater than list length", () => {
    test("it returns null", () => {
      const l1 = LinkedList.fromValues(10, 20);

      expect(l1.getByIndex(5)).toBeNull();
    });
  });
  describe("with index 0", () => {
    test("it returns the head", () => {
      const l1 = LinkedList.fromValues(10, 20);

      expect(l1.getByIndex(0).value).toBe(10);
    });
  });
  describe("with index in the middle", () => {
    test("it returns the element at that index", () => {
      const l1 = LinkedList.fromValues(10, 20, 30, 40);

      expect(l1.getByIndex(2).value).toBe(30);
    });
  });
});
describe("#insertAtIndex", () => {
  describe("with index less than zero", () => {
    test("It does not insert anything", () => {
      const l1 = LinkedList.fromValues(10, 20);
      l1.insertAtIndex(-1, 30);
      expect(l1.length).toBe(2);
    });
  });
  describe("with index greater than list length", () => {
    test("It does not insert anything", () => {
      const l1 = LinkedList.fromValues(10, 20);
      l1.insertAtIndex(5, 30);
      expect(l1.length).toBe(2);
    });
  });
  describe("with index 0", () => {
    test("Insert at the head", () => {
      const l1 = LinkedList.fromValues(10, 20);
      l1.insertAtIndex(0, 30);
      expect(l1.head.value).toBe(30);
      expect(l1.head.next.value).toBe(10);
      expect(l1.length).toBe(3);
    });
  });
  describe("with index in the middle", () => {
    test("Insert at the given index", () => {
      const l1 = LinkedList.fromValues(10, 20, 30, 40);
      l1.insertAtIndex(2, 50);
      const node = l1.getByIndex(2);
      expect(node.value).toBe(50);
      expect(node.next.value).toBe(30);
      expect(l1.length).toBe(5);
    });
  });
});

describe("#RemoveHead", () => {
  test("removes the head", () => {
    const l1 = LinkedList.fromValues(10, 20, 30);
    l1.removeHead();

    expect(l1.head.value).toBe(20);
    expect(l1.length).toBe(2);
  });
});
describe("#removeAtIndex", () => {
  describe("with index less than zero", () => {
    test("It does not remove anything", () => {
      const l1 = LinkedList.fromValues(10, 20);
      l1.removeAtIndex(-1);
      expect(l1.length).toBe(2);
    });
  });
  describe("with index greater than list length", () => {
    test("It does not remove anything", () => {
      const l1 = LinkedList.fromValues(10, 20);
      l1.removeAtIndex(-1);
      expect(l1.length).toBe(2);
    });
  });
  describe("with index 0", () => {
    test("Remove the head", () => {
      const l1 = LinkedList.fromValues(10, 20, 30);
      l1.removeAtIndex(0);
      expect(l1.head.value).toBe(20);
      expect(l1.head.next.value).toBe(30);
      expect(l1.length).toBe(2);
    });
  });
  describe("with index in the middle", () => {
    test("Remove at the given index", () => {
      const l1 = LinkedList.fromValues(10, 20, 30, 40);
      l1.removeAtIndex(2);
      const node = l1.getByIndex(1);
      expect(node.value).toBe(20);
      expect(node.next.value).toBe(40);
      expect(l1.length).toBe(3);
    });
  });
});
