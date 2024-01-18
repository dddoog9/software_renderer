
export function vector_add(n, a, b, c) {
  for (let i = 0; i < n; i++)
    c[i] = a[i] + b[i];
}

export function vector_subtract(n, a, b, c) {
  for (let i = 0; i < n; i++)
    c[i] = a[i] - b[i];
}

export function vector_scale(n, src, factor, dest) {
  for (let i = 0; i < n; i++)
    dest[i] = src[i]*factor;
}

export function vector_scale2(n, src, factor) {
  for (let i = 0; i < n; i++)
    src[i] *= factor;
}
