function deepEqual(obj1, obj2) {
  const isObj = (elem) => {
    return typeof elem === "object";
  };
  if (!isObj(obj1) && !isObj(obj2) || obj1 === null || obj2 === null) {
    return obj1 === obj2;
  }

  const keys_1 = Object.keys(obj1);
  const keys_2 = Object.keys(obj2);
  if (keys_1.length !== keys_2.length) return false;

  for (let key of keys_1) {
    if (!deepEqual(obj1[key], obj2[key])) {
      return false
    }
  }
  
  return true;
}

const firstObject = {
  name: "Misha",
  order: {
    price: 20,
    count: 1,
    taxes: { vat: { name: "vat", amount: { uah: 10, usd: 0.37 } } },
    total: {
      withoutTaxes: { uah: 20, usd: 0.74 },
      withTaxes: { vat: { uah: 30, usd: 1.11, eur: null } },
    },
  },
};

const secondObject = {
  name: "Misha",
  order: {
    price: 20,
    count: 1,
    taxes: { vat: { name: "vat", amount: { uah: 10, usd: 0.37 } } },
    total: {
      withoutTaxes: { uah: 20, usd: 0.74 },
      withTaxes: { vat: { uah: 30, usd: 1.11 } },
    },
  },
};

deepEqual(firstObject, secondObject); //?
deepEqual({ a: 1, b: 3 }, { b: 3, a: 1 }); //?
deepEqual(1, 2); //?
deepEqual(true, false); //?
deepEqual(null, null); //?
deepEqual(undefined, undefined); //?

deepEqual(
  {
    name: "Misha",
    order: {
      price: 20,
      count: 1,
      taxes: { vat: { name: "vat", amount: { uah: 10, usd: 0.37 } } },
      total: {
        withoutTaxes: { uah: 20, usd: 0.74 },
        withTaxes: { vat: { uah: 30, usd: 1.11 } },
      },
    },
  },
  {
    name: "Misha",
    order: {
      price: 20,
      count: 1,
      taxes: { vat: { name: "vat", amount: { uah: 10, usd: 0.37 } } },
      total: {
        withoutTaxes: { uah: 20, usd: 0.74 },
        withTaxes: { vat: { uah: 30, usd: 1.11 } },
      },
    },
  }
); //?
