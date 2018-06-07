import { Settings } from './settings';
import { TransformOptions } from './transform-options';

export interface ISerializerConfig {
    name?: string;
    type?: any;
}

/**
 * @example:
 * Serializer()
 * Serializer({name: 'name'})
 * Serializer({type: PersonEntity})
 * Serializer({name: 'name', type: PersonEntity})
 */
export function Serializer(params: ISerializerConfig = null): any {
    let sourcePropertyName: string = null;
    let transformType: any = null;

    if (params && params.hasOwnProperty('name')) {
        sourcePropertyName = params.name;
    }

    if (params && params.hasOwnProperty('type')) {
        transformType = params.type;
    }

    return function (targetClass: any, targetClassPropertyName: string) {
        
        const removeFirstUnderscore = (value: string): string => {
            return value.replace(/^_/i, "");
        };

        if (typeof targetClass[Settings.PROPERTIES_TO_DECORATE] === 'undefined') {
            targetClass[Settings.PROPERTIES_TO_DECORATE] = {};
        }

        let transformOptions: TransformOptions = new TransformOptions();
        transformOptions.targetClassName = targetClass.constructor.name;
        transformOptions.targetClassPropertyName = targetClassPropertyName;
        transformOptions.sourcePropertyName = sourcePropertyName ? sourcePropertyName : removeFirstUnderscore(targetClassPropertyName);
        transformOptions.transformType = (Array.isArray(transformType)) ? transformType[0] : transformType;
        // transformOptions.propertyAccessorsName = propertyAccessorsName;

        targetClass[Settings.PROPERTIES_TO_DECORATE][targetClassPropertyName] = transformOptions;
    };
}
