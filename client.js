
import { ReactInstance, Location, Surface, Module } from 'react-360-web';
import { Vector3, Quaternion } from 'three';

let r360 = null;

function init(bundle, parent, options = {}) {

  // Explained image surface
  explainedImage = new Surface(500, 500, Surface.SurfaceShape.Flat);

  r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    nativeModules: [new surfaceModule(), ctx => new MyModule(ctx),],
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
      explainedImage.setAngle(horizAngle, vertAngle);
    },
    ...options,
  });

  const customLocation = new Location([0, -1, 0]);
  r360.renderToLocation(r360.createRoot('vr_gallery'), customLocation);
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));

  // Custom surfaces
  hoverImage = new Surface(500, 500, Surface.SurfaceShape.Flat);
  hoverImage.setAngle(-Math.PI / 2, 0);
  r360.renderToSurface(r360.createRoot("HoverImage", {}), hoverImage);
  r360.renderToSurface(r360.createRoot("ExplainedImage", {}), explainedImage);
}

class ObjectNotation {
  position = null;
  quaternion = null;

  constructor(position, quaternion) {
    this.position = position;
    this.quaternion = quaternion;
  }

  translateOnAxis = (axis, distance) => {
    const v1 = new Vector3();

    v1.copy(axis).applyQuaternion(this.quaternion);

    this.position.add(v1.multiplyScalar(distance));
  };

  translateX = (distance) => {
    this.translateOnAxis(new Vector3(1, 0, 0), distance);
  };
  translateY = (distance) => {
    this.translateOnAxis(new Vector3(0, 1, 0), distance);
  };
  translateZ = (distance) => {
    this.translateOnAxis(new Vector3(0, 0, 1), distance);
  };
}

class MyModule extends Module {
  x = 0;
  z = 0;
  movingX = 0;
  movingZ = 0;
  movingSpeed = 0.2;
  xUpLimit = 9.3;
  xDownLimit = -3;
  zUpLimit = 13;
  zDownLimit = -3.8;

  constructor(ctx) {
    super('MyModule');

    this._ctx = ctx;

    console.log(ctx);

    document.addEventListener('keydown', (event) => this.onKeyDown(event));
  }

  getValueWithCallback(id) {
    const cameraQuaternion = r360.getCameraQuaternion();
    const quaternion = new Quaternion(cameraQuaternion[0], cameraQuaternion[1], cameraQuaternion[2], cameraQuaternion[3]);
    const position = new Vector3(this.x, 0, this.z);

    const cameraObjectNotation = new ObjectNotation(position, quaternion);

    if (this.movingZ !== 0) {
      cameraObjectNotation.translateZ(this.movingZ);

      this.movingZ = 0;
    }

    if (this.movingX !== 0) {
      cameraObjectNotation.translateX(this.movingX);

      this.movingX = 0;
    }

    if (cameraObjectNotation.position.z + this.movingZ < this.zDownLimit || cameraObjectNotation.position.z + this.movingZ > this.zUpLimit) {
      return false;
    }

    if (cameraObjectNotation.position.x + this.movingX < this.xDownLimit || cameraObjectNotation.position.x + this.movingX > this.xUpLimit) {
      return false;
    }

    this.x = cameraObjectNotation.position.x;
    this.z = cameraObjectNotation.position.z;


    this._ctx.invokeCallback(
      id,
      [this.x, this.z]
    );
  }

  onKeyDown(event) {
    if (event.keyCode === 38 || event.keyCode === 87) {
      this.moveForward();
    }
    else if (event.keyCode === 40 || event.keyCode === 83) {
      this.moveBackward();
    }
    else if (event.keyCode === 37 || event.keyCode === 65) {
      this.moveLeft();
    }
    else if (event.keyCode === 39 || event.keyCode === 68) {
      this.moveRight();
    }
  }

  moveForward() {
    this.movingZ = this.movingSpeed;
  }

  moveBackward() {
    this.movingZ = -this.movingSpeed;
  }

  moveLeft() {
    this.movingX = this.movingSpeed;
  }

  moveRight() {
    this.movingX = -this.movingSpeed;
  }
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
