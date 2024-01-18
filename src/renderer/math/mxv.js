
export function mxv(n, m, v, res) {
  for (let i = 0; i < n; i++) {
    res[i] = 0;
    for (let j = 0; j < n; j++)
      res[i] += m[i*n + j]*v[j];
  }
}
