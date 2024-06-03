// src/utils/MapUtil.ts
var MapUtil;
(function(MapUtil2) {
  MapUtil2.take = (dict) => (key, generator) => {
    const oldbie = dict.get(key);
    if (oldbie) return oldbie;
    const value = generator();
    dict.set(key, value);
    return value;
  };
})(MapUtil || (MapUtil = {}));

export {
  MapUtil
};
//# sourceMappingURL=chunk-NDRJDMPV.mjs.map