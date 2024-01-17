var addTwoNumbers = function (l1, l2) {
  const getReverseFromListed = (list, res) => {
    if (!list.next) {
      return [list.val, ...res]; //=
    }
    return getReverseFromListed(list.next, [list.val, ...res]);
  };

  const num1 = BigInt(getReverseFromListed(l1, []).join("")); //=
  const num2 = BigInt(getReverseFromListed(l2, []).join("")); //=
  const sum = num1 + num2; //=
  const arr = `${sum}`.split(""); //=

  const res = {};
  let current = res;

  for (let i = arr.length - 1; i >= 0; i--) {
    let next = {};
    current.val = arr[i];
    current.next = i === 0 ? null : next;
    current = next;
  }

  return res; //=
};

const l1 = {
  val: 1,
  next: {
    val: 0,
    next: {
      val: 0,
      next: {
        val: 0,
        next: {
          val: 0,
          next: {
            val: 0,
            next: {
              val: 0,
              next: {
                val: 0,
                next: {
                  val: 0,
                  next: {
                    val: 0,
                    next: {
                      val: 0,
                      next: {
                        val: 0,
                        next: {
                          val: 0,
                          next: {
                            val: 0,
                            next: {
                              val: 0,
                              next: {
                                val: 0,
                                next: {
                                  val: 0,
                                  next: {
                                    val: 0,
                                    next: {
                                      val: 1,
                                      next: null,
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
const l2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
    },
  },
};
addTwoNumbers(l1, l2); //=
