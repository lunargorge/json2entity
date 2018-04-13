import { ArrayCollection } from "./array-collection";

describe("A suite is just a ArrayCollection", () => {
    var collection: ArrayCollection<string>;
  
    beforeEach(() => {
        collection = new ArrayCollection<string>();
        collection.add('one');
        collection.add('two');
        collection.add('three');
        collection.add('four');
        collection.add('five');
        collection.add('six');
        collection.add('seven');
        collection.add('eight');
        collection.add('nine');
        collection.add('ten');
    });

    it('should have 10 items', () => {
      expect(collection.count()).toBe(10);
    });

    it('should return first item', () => {
        expect(collection.first()).toBe('one');
    });

    it('should return last item', () => {
        expect(collection.last()).toBe('ten');
    });

    it('should return all items', () => {
        let c: any[] = collection.items();
        expect(c.length).toBe(10);
        expect(c[0]).toBe('one');
        expect(c[5]).toBe('six');
        expect(c[9]).toBe('ten');
    });

    it('should return indicated item', () => {
        expect(collection.get(0)).toBe('one');
        expect(collection.get(1)).toBe('two');
        expect(collection.get(2)).toBe('three');
        expect(collection.get(3)).toBe('four');
        expect(collection.get(4)).toBe('five');
        expect(collection.get(5)).toBe('six');
        expect(collection.get(6)).toBe('seven');
        expect(collection.get(7)).toBe('eight');
        expect(collection.get(8)).toBe('nine');
        expect(collection.get(9)).toBe('ten');
    });

    it('should add item to collection', () => {
        expect(collection.count()).toBe(10);
        collection.add('eleven');
        expect(collection.count()).toBe(11);
    });


    it('should determine whether a variable is empty ', () => {
        expect(collection.isEmpty()).toBeFalsy();
        let c: ArrayCollection<string> = new ArrayCollection<string>();
        expect(c.isEmpty()).toBeTruthy();
    });

    it('should increment index and return next items', () => {
        expect(collection.current()).toBe('one');
        collection.next();
        expect(collection.current()).toBe('two');
        collection.next();
        expect(collection.current()).toBe('three');
    });

    it('should rewind to start', () => {
        collection.next();
        collection.next();
        collection.next();
        collection.next();
        expect(collection.key()).toBe(4);
        expect(collection.current()).toBe('five');
        collection.rewind();
        expect(collection.key()).toBe(0);
        expect(collection.current()).toBe('one');
    });

    it('should rewind to start (reset)', () => {
        collection.next();
        collection.next();
        collection.next();
        collection.next();
        expect(collection.key()).toBe(4);
        expect(collection.current()).toBe('five');
        collection.reset();
        expect(collection.key()).toBe(0);
        expect(collection.current()).toBeNull();
    });

    it('should replace item', () => {
        expect(collection.get(1)).toBe('two');
        collection.replace(1, 'second');
        expect(collection.get(1)).toBe('second');
    });

    it('should remove item', () => {
        expect(collection.count()).toBe(10);
        expect(collection.get(1)).toBe('two');
        collection.remove(1);
        expect(collection.count()).toBe(9);
        expect(collection.get(1)).toBe('three');
    });

  });
  