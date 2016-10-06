export function update(data, extra) {
  return Object.assign({}, data, extra);
}

export function append(array, item) {
  return array.concat([item]);
}
