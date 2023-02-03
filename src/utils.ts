function findItems(item: string, items: string[]) {
  const result = [];

  for (let el of items) {
    if (el.includes(item)) {
      result.push(el);
    }
  }

  return result;
}

export { findItems };
