import { Router } from "express";
import itemsRouter from "./items.routes";
import locationsRouter from "./locations.routes";
import userRoutes from "./users.routes";
import sessionsRouter from "./sessions.routes";

const routes = Router();

routes.use('/items', itemsRouter);
routes.use('/locations', locationsRouter);
routes.use('/users', userRoutes);
routes.use('/sessions', sessionsRouter);

export default routes;