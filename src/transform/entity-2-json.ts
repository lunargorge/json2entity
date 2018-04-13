
import { ArrayCollection, ArrayCollectionAbstract } from './../collections';
import { TransformOptions } from './transform-options';
import { Settings } from './settings';

export class Entity2Json {
    protected customArrayCollection: Function;

    public process(source: any): any {
        return JSON.stringify(this.transform(source));
    }

    /**
     * @Property source mixed object|array
     */
    public transform(source: any): any {
        let result: any;
        let collection = [];

        if (Array.isArray(source)) {
            source.forEach((itemSourceData) => collection.push(this.serializeProperties(itemSourceData)));
            result = collection;
        } else if (source instanceof ArrayCollectionAbstract) {
            source['items']().forEach((itemSourceData) => collection.push(this.serializeProperties(itemSourceData)));
            result = collection;
        } else {
            result = this.serializeProperties(source);
        }

        return result;
    }

    public setCustomArrayCollection(customArrayCollection: Function) {
        this.customArrayCollection = customArrayCollection;
    }

    /**
     * @Property source mixed object
     */
    public serializeProperties(source: any): any {
        const propertiesToDecorate: any = source[ Settings.PROPERTIES_TO_DECORATE ];
        let result = {};
        for (let propertyName in propertiesToDecorate) {
            const transformOptions: TransformOptions = propertiesToDecorate[propertyName];
            result[ transformOptions.sourcePropertyName ] = this.serializeProperty(source, transformOptions);
        }

        return result;
    }
    
    /**
     * @Property source mixed object
     */
    private serializeProperty(source: any, transformOptions: TransformOptions): any {
        let propertyAccessorsName: string = transformOptions.propertyAccessorsName;
        let data: any = source[ propertyAccessorsName ];

        if (Array.isArray(data) || typeof (data) === 'object') {
            return this.transform(data);
        } else {
            return data;
        }
    }
}
