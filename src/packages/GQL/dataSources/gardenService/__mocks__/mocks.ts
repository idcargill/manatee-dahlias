import { ObjectId } from 'mongodb';
import { Fertilizer, SoilComposition } from '../models/soilModels';



import {
  SeedPackage,
  StoreMerchant,
} from '../models/seedsModels';

// change name to SeedMerchant
export const mockStoreMerchant: StoreMerchant = {
  name: "Walts",
  phoneNumber: "123-456-7890",
  email: "Walts@plantThis.com",
  address: {
    street: "123 main st",
    city: "Seattle",
    state: "WA"
  },
}

export const mockFertilizer: Fertilizer = {
  id: new ObjectId('fertilizerID'),
  fertilizerName: "Rainy day",
  type: "granular",
  producer: "Walts",
  supplier: mockStoreMerchant,
  nitrogen_N: 10,
  phosphorus_P: 5,
  potassium_K: 3,
  cost: 14,
  amount: 5,
}

export const mockSoilComposition: SoilComposition = {
  K: 'Potassium',
  N: 'Nitrogen',
  P: 'Phosphorus',
  organicMatter: 'lots',
  note: 'dirt'
}