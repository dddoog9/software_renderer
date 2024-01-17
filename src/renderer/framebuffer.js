
export const COLOR_COMPONENTS_NUMBER = 4;

export function create_framebuffer(w, h) {
  const size = w*h;
  const color_buffer = new ArrayBuffer(size*COLOR_COMPONENTS_NUMBER);
  return {
    width: w,
    height: h,
    color8: new Uint8ClampedArray(color_buffer),
    color32: new Int32Array(color_buffer),
    depth: new Float32Array(size)
  };
}

export function put_pixel(framebuffer, x, y, r, g, b) {
}
