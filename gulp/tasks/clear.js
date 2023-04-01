// Plugins import

import { deleteAsync } from 'del';

// Paths import

import { buildFolder } from '../config/path.js';

// Task

const clear = async () => {
  return await deleteAsync([buildFolder]);
} 

export default clear;
