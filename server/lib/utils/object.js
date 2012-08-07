/**
 * Like object.extend, but does so recursively, merging
 * two objects together
 *
 * @param target Target object
 * @param toCopy Object to merge in properties from.
 */
var extendDeep = exports.extendDeep = function (target, toCopy) {
  if (target === null || target === undefined ||
    toCopy === null || toCopy === undefined) {
    return toCopy;
  }

  for (var name in toCopy) {
    if (typeof toCopy[name] === 'object') {
      target[name] = extendDeep(target[name], toCopy[name]);
    } else {
      target[name] = toCopy[name];
    }
  }
  return target;
};
