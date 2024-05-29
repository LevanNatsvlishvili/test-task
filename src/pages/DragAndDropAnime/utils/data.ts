import { Box } from './types';

export const boxes: Box[] = [
  {
    texturePath: '/images/products/product-1.png',
    shadowTexture: '/images/products/product-1-shadow.png',
    position: [-23, 5, -10],
    animation: {
      rotate: -5,
      x: -15,
      y: 5,
    },
  },
  {
    texturePath: '/images/products/product-2.png',
    shadowTexture: '/images/products/product-2-shadow.png',
    position: [0, 0, 0],
    animation: {
      rotate: 0,
      x: -2.5,
      y: -2.5,
    },
  },
  {
    texturePath: '/images/products/product-3.png',
    shadowTexture: '/images/products/product-3-shadow.png',
    position: [18, -5, 10],
    animation: {
      rotate: -5,
      x: 15,
      y: -5,
    },
  },
];
