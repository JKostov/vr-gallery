import { Vector3, Quaternion } from 'three';

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


export default class KeyboardCameraController {
  movingX = 0;
  movingZ = 0;

  constructor(xDownLimit = -100, xUpLimit = 100, zDownLimit = -100, zUpLimit = 100, movingSpeed = 0.2) {
    this.xDownLimit = xDownLimit;
    this.xUpLimit = xUpLimit;
    this.zDownLimit = zDownLimit;
    this.zUpLimit = zUpLimit;
    this.movingSpeed = movingSpeed;

    document.addEventListener('keydown', (event) => this.onKeyDown(event));
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
    this.movingZ = -this.movingSpeed;
  }

  moveBackward() {
    this.movingZ = this.movingSpeed;
  }

  moveLeft() {
    this.movingX = -this.movingSpeed;
  }

  moveRight() {
    this.movingX = this.movingSpeed;
  }

  fillCameraProperties(positionArray, rotationArray) {
    if (this.movingZ === 0 && this.movingX === 0) {
      return false;
    }

    const quaternion = new Quaternion(rotationArray[0], rotationArray[1], rotationArray[2], rotationArray[3]);
    const position = new Vector3(positionArray[0], positionArray[1], positionArray[2]);

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

    positionArray[0] = cameraObjectNotation.position.x;
    positionArray[2] = cameraObjectNotation.position.z;

    return true;
  }
}
