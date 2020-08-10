// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Surface, Module } from "react-360-web";

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    nativeModules: [new surfaceModule()],
    ...options,
  });

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot("vr_gallery", {
      /* initial props */
    }),
    r360.getDefaultSurface()
  );

  // Animated Text
  const animatedTextSize = 400;

  animatedText = new Surface(
    animatedTextSize,
    animatedTextSize,
    Surface.SurfaceShape.Flat
  );

  // Putting it on the right

  animatedText.setAngle(Math.PI / 2, 0);

  // Angles:
  // yaw - left/right
  // pitch - top/bottom
  // roll - whole surface

  r360.renderToSurface(
    r360.createRoot("AnimatedText", { text: "Juki <3 VR" }),
    animatedText
  );

  // Hover image

  hoverImage = new Surface(500, 500, Surface.SurfaceShape.Flat);

  // Putting it on the left

  hoverImage.setAngle(-Math.PI / 2, 0);

  r360.renderToSurface(r360.createRoot("HoverImage", {}), hoverImage);

  // Explained image

  explainedImage = new Surface(800, 450, Surface.SurfaceShape.Flat);

  // Just the oposite

  explainedImage.setAngle(Math.PI, 0);

  r360.renderToSurface(r360.createRoot("ExplainedImage", {}), explainedImage);

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL("360_world.jpg"));
}

class surfaceModule extends Module {
  constructor() {
    super("surfaceModule");
  }

  resize(width, height) {
    hoverImage.resize(width, height);
  }
}

window.React360 = { init };
