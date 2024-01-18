
export function vector_add(n, a, b, c) {
  for (let i = 0; i < n; i++) {
    c[i] = a[i] + b[i];
  }
}

export function vector_subtract(n, a, b, c) {
  for (let i = 0; i < n; i++) {
    c[i] = a[i] - b[i];
  }
}
