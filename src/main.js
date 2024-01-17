import "./style.css";

import {
  create_canvas,
  put_framebuffer
} from "./renderer/canvas";
import {
  create_framebuffer,
  put_pixel,
  clear_color
} from "./renderer/framebuffer";

const VIEWPORT_WIDTH = 800;
const VIEWPORT_HEIGHT = 600;

const canvas_cx = create_canvas(VIEWPORT_WIDTH, VIEWPORT_HEIGHT);
const framebuffer = create_framebuffer(VIEWPORT_WIDTH, VIEWPORT_HEIGHT);
clear_color(framebuffer, 0, 0, 0);

const rect_width = 100;
const rect_height = 200;
const rect_x = 100;
const rect_y = 100;
const rect_r = 1;
const rect_g = 0;
const rect_b = 1;
for (let x = 0; x < rect_width; x++) {
  for (let y = 0; y < rect_height; y++) {
    put_pixel(
      framebuffer,
      rect_x + x,
      rect_y + y,
      rect_r, rect_g, rect_b
    );
  }
}

put_framebuffer(canvas_cx, framebuffer, 0, 0, VIEWPORT_WIDTH, VIEWPORT_HEIGHT);
document.body.appendChild(canvas_cx.canvas);
