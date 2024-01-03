const getNumeric = (value) => {
  return value.match(/\d+g/g);
};

const getNotNumeric = (value) => {
  return value.match(/\D+g/g);
};

export { getNumeric, getNotNumeric };
