/**
 * Get the last n data elements from the nested object
 *
 * See the test if you have questions
 */

const payload = {
  data: 25,
  next: {
    data: 34,
    next: {
      data: 67,
      next: {
        data: 98,
        next: {
          data: 89,
          next: {
            data: 78,
            next: {
              data: 43,
              next: {
                data: 44,
                next: {
                  data: 36,
                  next: {
                    data: 22,
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

const num = 3;

export const getLastNumbers = (payload, num) => {
  const getArray = (payload, arr = []) => {
    const newArr = [...arr, payload.data];
    if (payload.next === undefined) return newArr;
    return getArray(payload.next, newArr);
  };

  return num === 0 ? [] : getArray(payload).slice(-num);
};
getLastNumbers(payload, num);
