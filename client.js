import { ReactInstance, Location, Surface, Module } from 'react-360-web';
import { Vector3, Quaternion } from 'three';
import KeyboardMovementModule from './modules/keyboard-movement-module';
import ExplainedImageModule from './modules/explained-image-module';

function init(bundle, parent, options = {}) {

  // Explained image surface
  // explainedImage = new Surface(850, 500, Surface.SurfaceShape.Flat);

  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    nativeModules: [
      new surfaceModule(),
      ctx => new KeyboardMovementModule.addModule(ctx, 9.3, -3, 13, -3.8),
      ExplainedImageModule.addModule,
    ],
    frame: () => {
      const cameraQuaternion = r360.getCameraQuaternion();
      const quaternion = new Quaternion(cameraQuaternion[0], cameraQuaternion[1], cameraQuaternion[2], cameraQuaternion[3]);

      const v1 = new Vector3(0, 0, -1);
      v1.applyQuaternion(quaternion);

      const cx = v1.x;
      const cy = v1.y;
      const cz = v1.z;

      const horizAngle = Math.atan2(cx, -cz);
      const vertAngle = Math.asin(cy / Math.sqrt(cx * cx + cy * cy + cz * cz));

      // Custom surface follow camera
      ExplainedImageModule.setSurfaceAngle(horizAngle, vertAngle);
    },
    ...options,
  });

  KeyboardMovementModule.setInstance(r360);
  ExplainedImageModule.setInstance(r360);

  const customLocation = new Location([0, -1, 0]);
  r360.renderToLocation(r360.createRoot('vr_gallery'), customLocation);
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));

  // Custom surfaces
  hoverImage = new Surface(500, 500, Surface.SurfaceShape.Flat);
  hoverImage.setAngle(-Math.PI / 2, 0);
  // r360.renderToSurface(r360.createRoot("HoverImage", {}), hoverImage);
  // r360.renderToSurface(r360.createRoot("ExplainedImage", {}), explainedImage);
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
