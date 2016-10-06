export function update(data, extra) {
  return Object.assign({}, data, extra);
}

export function append(array, item) {
  return array.concat([item]);
}

export function updateArrayById(array, id, fn) {
  return array.map((item) => {
    if (item.id === id) {
      return fn(item);
    }
    return item;
  })
}
