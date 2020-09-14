/**
 * 指定方法后的返回值组成的新数组
 * @param list 数组
 * @param iterate 回调
 * @param context 上下文
 */
export declare function map<T, U>(list: T[], iterate: (item: T, index: number, list: T[]) => U, context?: any): U[];

declare module './ctor' {
  interface XEUtilsMethods {
    map: typeof map;
  }
}

export default map
