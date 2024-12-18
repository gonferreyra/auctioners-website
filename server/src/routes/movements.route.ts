import { Router } from 'express';
import * as controllers from '../controllers/movement.controller';

const movementRoutes = Router();

movementRoutes.get('', controllers.getMovementsHandler);

export default movementRoutes;
