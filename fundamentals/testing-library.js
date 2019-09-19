const expect = value => {
  return {
    toBe: expected => {
      if (value !== expected) {
        throw new Error(`${value} is not equal to ${expected}.`);
      }
    },
    toBeGreaterThan: expected => {
      if (value <= expected) {
        throw new Error(`${value} is not greater than ${expected}.`);
      }
    }
  };
};

const test = async (title, callback) => {
  try {
    await callback();
    //If the callback does not throw an error log success
    console.log(`✅ ${title} `);
  } catch (error) {
    //If the callback throws an error
    console.error(`❌ ${title} `);
    console.error(error);
  }
};

module.exports = {
  expect,
  test
};
