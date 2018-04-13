export class TransformOptions {

    private _targetClassName: string;
    private _targetClassPropertyName: string;
    private _propertyAccessorsName: string;
    private _sourcePropertyName: string;
    private _transformType: any;
    
	public get targetClassName(): string {
		return this._targetClassName;
	}

	public set targetClassName(value: string) {
		this._targetClassName = value;
	}

	public get propertyAccessorsName(): string {
        return (this._propertyAccessorsName) 
            ? this._propertyAccessorsName : this.removeFirstUnderscore(this.targetClassPropertyName);
	}

	public set propertyAccessorsName(value: string) {
		this._propertyAccessorsName = value;
	}

	public get targetClassPropertyName(): string {
		return this._targetClassPropertyName;
	}

	public set targetClassPropertyName(value: string) {
		this._targetClassPropertyName = value;
	}

	public get sourcePropertyName(): string {
        return (this._sourcePropertyName) 
            ? this._sourcePropertyName : this.targetClassPropertyName;
	}

	public set sourcePropertyName(value: string) {
		this._sourcePropertyName = value;
	}

	public get transformType(): any {
		return this._transformType;
	}

	public set transformType(value: any) {
		this._transformType = value;
    }
    
    private removeFirstUnderscore(value: string): string {
        return value.replace(/^_/i, "");
    }
}