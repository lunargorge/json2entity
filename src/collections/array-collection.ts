import { ArrayCollectionAbstract } from './array-collection.abstract';

export class ArrayCollection<T> extends ArrayCollectionAbstract {
    private _data: T[] = [];
    private _index = 0;

    public items(): T[] {
        return this._data;
    }

    public isEmpty(): boolean {
        return !(this._data && this._data.length > 0);
    }

    public count(): number {
        if (!this.isEmpty()) {
            return this._data.length;
        } 
        return 0;
    }

    public first(): null|T {
        if (!this.isEmpty()) {
            return this._data[0];
        } 
        return null;
    }

    public last(): null|T {
        if (!this.isEmpty()) {
            return this._data[this.count() - 1];
        }
        return null;
    }

    public current(): null|T {
        return this.get(this.key());
    }

    public key(): number {
        return this._index;
    }

    public next(): void {
        this._index++;
    }

    public rewind(): void {
        this._index = 0;
    }

    public remove(index: number): void {
        if (this.isset(index)) {
            this._data.splice(index, 1);
        }
    }

    public add(v: T): void {
        this._data.push(v);
    }

    public get(index: number): null|T {
        if(this.isset(index)) {
            return this._data[index];
        }
        return null;
    }

    public replace(index: number, value: T): void {
        if(this.isset(index)) {
            this._data[index] = value;
        }
    }

    public reset(): void {
        this._data = [];
        this.rewind();
    }

    public isset(index: number): boolean {
        if(!this.isEmpty() && this._data[index]) {
            return true;
        }
        return false;
    }
}
