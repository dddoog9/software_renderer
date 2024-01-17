import "./style.css";

import {
  create_canvas,
  put_framebuffer
} from "./renderer/canvas";
import {
  create_framebuffer,
  // put_pixel,
  // put_depth,
  clear_color,
  clear_depth
} from "./renderer/framebuffer";

const VIEWPORT_WIDTH = 800;
const VIEWPORT_HEIGHT = 600;

const canvas_cx = create_canvas(VIEWPORT_WIDTH, VIEWPORT_HEIGHT);
const framebuffer = create_framebuffer(VIEWPORT_WIDTH, VIEWPORT_HEIGHT);

clear_color(framebuffer, 0, 0, 0);
clear_depth(framebuffer, -1);

put_framebuffer(
  canvas_cx,
  framebuffer,
  0, 0,
  VIEWPORT_WIDTH, VIEWPORT_HEIGHT
);

document.body.appendChild(canvas_cx.canvas);
