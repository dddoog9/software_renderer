
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

export function vector_scale2(n, vec, factor) {
  for (let i = 0; i < n; i++)
    vec[i] *= factor;
}

export function vector_div(n, src, factor, dest) {
  for (let i = 0; i < n; i++)
    dest[i] = src[i]/factor;
}

export function vector_dot(n, a, b) {
  let res = 0;
  for (let i = 0; i < n; i++)
    res += a[i]*b[i];
  return res;
}
