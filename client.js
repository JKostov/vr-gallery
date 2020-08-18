
import { ReactInstance, Location, Surface, Module } from 'react-360-web';
import KeyboardCameraController from './controllers/keyboard-camera-controller';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    nativeModules: [new surfaceModule()],
    ...options,
  });

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('vr_gallery', {}),
    r360.getDefaultSurface()
  );

  const customLocation = new Location([0, -1, 0]);

  r360.renderToLocation(r360.createRoot('vr_gallery'), customLocation);

  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));

  r360.controls.addCameraController(new KeyboardCameraController(-9.3, 3, -13, 3.8));

  // Hover image
  hoverImage = new Surface(500, 500, Surface.SurfaceShape.Flat);
  hoverImage.setAngle(-Math.PI / 2, 0);
  r360.renderToSurface(r360.createRoot("HoverImage", {}), hoverImage);
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
