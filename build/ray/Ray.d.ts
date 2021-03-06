import IRay from "./interfaces/IRay";
import { IVector3Data } from "../vector/interfaces/IVector3";
import ISphere from "../shape/interfaces/ISphere";
export default class Ray implements IRay {
    position: IVector3Data;
    direction: IVector3Data;
    constructor(position?: IVector3Data, direction?: IVector3Data);
}
export declare const at: (a: IRay, b: number, out?: any) => Float32Array;
export declare const distanceToPoint: (a: IRay, point: any) => number;
export declare const distanceSqToPoint: (a: IRay, point: any) => number;
export declare const lookAt: (a: IRay, b: any, out?: IRay) => IRay;
export declare const intersectSphere: (ray: IRay, sphere: ISphere, target: any) => Float32Array | null;
export declare const intersectsSphere: (ray: IRay, sphere: ISphere) => boolean;
