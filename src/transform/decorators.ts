import { Settings } from './settings';
import { TransformOptions } from './transform-options';

/**
 * 
 * @Property sourcePropertyName optional Property (default: targetClassPropertyName)
 * @Property transformType optional Property (default: null)
 * @Property propertyAccessorsName optional Property (default: null)
 */
export function Property(...properties: any[]): any {
    let sourcePropertyName: string = null;
    let transformType: any = null;
    let propertyAccessorsName: string = null;

    switch (properties.length) {
        case 1:
            sourcePropertyName = properties[0];
            break;
        case 2:
            sourcePropertyName = properties[0];
            transformType = properties[1];
            break;
        case 3:
            sourcePropertyName = properties[0];
            transformType = properties[1];
            propertyAccessorsName = properties[2];
            break;
        default:
            break;
    }

    return function (targetClass: any, targetClassPropertyName: string) {
        
        if (typeof targetClass[Settings.PROPERTIES_TO_DECORATE] === 'undefined') {
            targetClass[Settings.PROPERTIES_TO_DECORATE] = {};
        }

        let transformOptions: TransformOptions = new TransformOptions();
        transformOptions.targetClassName = targetClass.constructor.name;
        transformOptions.targetClassPropertyName = targetClassPropertyName;
        transformOptions.sourcePropertyName = sourcePropertyName;
        transformOptions.transformType = (Array.isArray(transformType)) ? transformType[0] : transformType;
        transformOptions.propertyAccessorsName = propertyAccessorsName;

        targetClass[Settings.PROPERTIES_TO_DECORATE][targetClassPropertyName] = transformOptions;
    };
}
