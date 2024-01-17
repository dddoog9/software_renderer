
export const COLOR_COMPONENTS_NUMBER = 4;
export const MAX_COLOR8 = 255;

export function create_framebuffer(w, h) {
  w |= 0;
  h |= 0;
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

export function color32(r, g, b) {
  r *= MAX_COLOR8;
  g *= MAX_COLOR8;
  b *= MAX_COLOR8;
  return (
    r |
    g << 8 |
    b << 16 |
    MAX_COLOR8 << 24
  );
}

export function put_pixel(framebuffer, x, y, r, g, b) {
  x |= 0;
  y |= 0;
  framebuffer.color32[ (x + y*framebuffer.width) ] = color32(r, g, b);
}

export function put_depth(framebuffer, x, y, depth) {
  x |= 0;
  y |= 0;
  const depth_array = framebuffer.depth;
  const index = (x + y*framebuffer.width);
  if (depth > depth_array[index]) {
    depth_array[index] = depth;
    return true;
  }
  return false;
}

export function put_depth_less(framebuffer, x, y, depth) {
  x |= 0;
  y |= 0;
  const depth_array = framebuffer.depth;
  const index = (x + y*framebuffer.width);
  if (depth < depth_array[index]) {
    depth_array[index] = depth;
    return true;
  }
  return false;
}

export function clear_color(framebuffer, r, g, b) {
  const color32array = framebuffer.color32;
  const size = color32array.length;
  for (let i = 0; i < size; i++) {
    color32array[i] = color32(r, g, b);
  }
}

export function clear_depth(framebuffer, depth) {
  const depth_array = framebuffer.depth;
  const size = depth_array.length;
  for (let i = 0; i < size; i++) {
    depth_array[i] = depth;
  }
}
