import { ArrayCollection, ArrayCollectionAbstract } from './../collections';
import { TransformOptions } from './transform-options';
import { Settings } from './settings';

export class Json2Entity {
    protected isArray: boolean;
    protected customArrayCollection: Function;

    /**
     * Start process root object
     * 
     * @Property data JSON object | object literal
     * @Property entity TypeScript Function | Object
     * @Property isArray boolean
     */
    public process(data: any, entity: any, isArray: boolean = false): any {
        this.isArray = isArray;
        const sourceData: any = this.jsonToLiteralObject(data);
        let result: any;

        if (Array.isArray(sourceData)) {
            let collection;
            if (this.isArray) {
                collection = [];
                sourceData.forEach((itemSourceData) => collection.push(this.deserializeProperties(itemSourceData, entity)));
                result = collection;
            } else {
                collection = (this.customArrayCollection) ? new (this.customArrayCollection()) : new ArrayCollection<any>();
                if (!(collection instanceof ArrayCollectionAbstract)) {
                    throw new Error('Your class Collection have to inherits by ArrayCollectionAbstract.');
                }
                sourceData.forEach((itemSourceData) => collection.add(this.deserializeProperties(itemSourceData, entity)));
                result = collection;
            }
        } else {
            result = this.deserializeProperties(sourceData, entity);
        }

        return result;
    }

    public setCustomArrayCollection(customArrayCollection: Function) {
        this.customArrayCollection = customArrayCollection;
    }

    /**
     * Start deserialize all properties in class
     * 
     * @Property sourceData literal object
     * @Property entity TypeScript class
     * @return {any} TypeScript object
     */
    private deserializeProperties(sourceData: any, entity: any): Object {
        let targetClass: Object;

        if (typeof(entity) === 'function') {
            targetClass = (new entity());
        }
        else if(typeof(entity) === 'object') {
            targetClass = Object.create(entity);
        }
        else {
            throw Error('Entity must be type: function or object.');
        }

        const propertiesToDecorate: any = targetClass[Settings.PROPERTIES_TO_DECORATE];

        for (let propertyName in propertiesToDecorate) {
            const transformOptions: TransformOptions = propertiesToDecorate[propertyName];
            this.deserializeProperty(sourceData, targetClass, transformOptions);
        }

        return targetClass;
    }

    /**
     * Deserialize property (start move data from literal object to entity class) 
     * 
     * @Property sourceData literal object
     * @Property targetClass TypeScript class
     * @Property transformOptions TransformOptions
     */
    private deserializeProperty(sourceData: any, targetClass: any, transformOptions: TransformOptions): void {
        let transformType: any = transformOptions.transformType;
        let propertyAccessorsName: string = transformOptions.propertyAccessorsName;
        let sourcePropertyName: string = transformOptions.sourcePropertyName;

        if (sourceData.hasOwnProperty(sourcePropertyName)) {
            let data: any = sourceData[sourcePropertyName];

            if (Array.isArray(data) || typeof (transformType) === 'function') {
                targetClass[propertyAccessorsName] = this.process(data, transformType, this.isArray);
            } else {
                targetClass[propertyAccessorsName] = data;
            }
        }
    }

    private jsonToLiteralObject(sourceData: any): any {
        let data;

        if (this.isJson(sourceData)) {
            data = JSON.parse(sourceData);
        }
        else if (typeof sourceData === "object") {
            data = sourceData;
        }
        else {
            throw new Error('Required json or literal object format');
        }

        return data;
    }

    private isJson(value) {
        try {
            JSON.parse(value);
        } catch (e) {
            return false;
        }
        return true;
    }
}
