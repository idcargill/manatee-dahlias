import { ObjectId } from "mongodb"
import { LocationDetails } from "../models/plantModels"

export const mockLocationDetails: LocationDetails = {
  gardenID: new ObjectId("gardenId"),
  coordinates: [20, 50],
  polygon: [10.5, 11.6, 5.3],
  locationDescription: "Garden by the fence",
  length: 8,
  width: 3,
  area: 24
}

