/**
 * 反序列化查询参数
 * @param str 字符串
 */
export declare function unserialize(str: string): any;

declare module './ctor' {
  interface XEUtilsMethods {
    unserialize: typeof unserialize;
  }
}

export default unserialize
