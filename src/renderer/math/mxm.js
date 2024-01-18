
export function mxm(n, a, b, c) {
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++) {
      c[i*n + j] = 0;
      for (let k = 0; k < n; k++)
        c[i*n + j] += a[i*n + k]*b[k*n + j];
    }
}
