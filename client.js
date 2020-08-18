import { ReactInstance, Location } from 'react-360-web';
import KeyboardCameraController from '@martinpham/react-360-keyboard-camera-controller';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('vr_gallery', {}),
    r360.getDefaultSurface()
  );

  const customLocation = new Location([0, 0, 0]);

  r360.renderToLocation(r360.createRoot('vr_gallery'), customLocation);

  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));

  r360.controls.addCameraController(new KeyboardCameraController());
}

window.React360 = { init };
