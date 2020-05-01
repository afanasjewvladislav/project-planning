// eslint-disable-next-line import/prefer-default-export
export function isFunction(func) {
  return typeof func === 'function' || Object.prototype.toString.call(func) === '[object Function]';
}
