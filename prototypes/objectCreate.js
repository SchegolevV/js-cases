Object.create = function (proto, propertiesObject = {}) {
  if (typeof proto !== "object" && typeof proto !== "function") {
    throw new TypeError();
  } 
  const newObject = {};

  Object.setPrototypeOf(newObject, proto)

  return Object.defineProperties(newObject, propertiesObject);
};





