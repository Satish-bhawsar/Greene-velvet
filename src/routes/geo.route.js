import { Router } from "express";
import { getGeoFromLatLng } from "../controllers/geoController";

const geoRouter = Router()

geoRouter.post("/latlng", getGeoFromLatLng);

export default geoRouter;