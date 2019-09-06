import { XEUtilsMethods } from '../xe-utils'

/**
 * 判断对象是否包含该值,成功返回 true 否则 false
 * @param obj 对象
 * @param val 值
 */
export declare function includes(obj: any, val: any): boolean;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 判断对象是否包含该值,成功返回 true 否则 false
     * @param obj 对象
     * @param val 值
     */
    includes(obj: any, val: any): boolean;
  }
}

export default includes