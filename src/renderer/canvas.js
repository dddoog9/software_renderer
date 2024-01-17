
export function create_canvas(w, h) {
  const elem = document.createElement("canvas");
  elem.width = w;
  elem.height = h;

  const cx = elem.getContext("2d");

  if (cx === null)
    throw new Error("canvas cx is a null");
  return cx;
}

export function put_framebuffer(canvas_cx, framebuffer, x, y, w, h) {
  canvas_cx.putImageData(
    new ImageData(framebuffer.color8, w, h),
    x, y
  );
}
