
import { ObjectId } from 'mongodb';
import { Seedling } from '../models/seedlingModels';
import { SeedPackage, SeedPackageInput, StoreMerchant } from '../models/seedsModels';
import { PestReport, ReportTypes } from '../models/reportsModel';
import {
  DEFAULT_LOCATION,
  PlantFromSeedlingBuilder,
  PlantBuilder,
  PlantFromSeedBuilder,
  PlantInfoBuilder,
} from '../Builders/plantBuilder';

import {
  PlantInfo,
  PlantInput,
  PlantType,
  CreatePlantInput,
  CreateSeedlingFromSeedPayload,
  CreatePlantFromSeedlingPayload,
  PlantPayload,
  GardenFamily,
  PlantFamily,
  SUN_LIGHT,
} from '../models/plantModels';
import { assert } from 'console';
import { setDefaultResultOrder } from 'dns';
import { SeedPackageBuilder } from '../Builders/seedPackageBuilder';

const mockPlantId = new ObjectId;
const mockStorMerchangeId = new ObjectId;
const mockSeedPackageId = new ObjectId;
const mockSeedlingId = new ObjectId;
const mockPestReportId = new ObjectId;

export const mockPlantInfo:PlantInfo = {
  plantName: 'Frank',
  gardenFamily: GardenFamily.BEANS,
  plantFamily: 'plantFamily',
  daysToGerminate: 10,
  daysToMaturity: 60,
  spacing: '2 inches',
  sunlight: SUN_LIGHT.FULL_SUN,
  standardWidth: 10,
  standardHeight: 20,
  perennial: true,
  plantingInstructions: "Don't mess it up",
  friendlyPlants: ["cucumbers", "peas"],
  enemyPlants: ["All Tom's Plants"]
}

export const mockStorMerchant: StoreMerchant = {
  _id: mockStorMerchangeId,
  name: 'Walts',
  address: {
    street: '123 Main St',
    city: 'Seattle',
    state: 'WA',
  },
  phoneNumber: '123-456-7890',
  email: 'Walts@plantTHIS!.com',
}

export const mockSeedPackage: SeedPackage = {
  _id: mockSeedPackageId,
  plantName: 'Frank the Seedling',
  plantType: PlantType.VEGETABLE,
  plantInfo: mockPlantInfo,
  qty: 30,
  coverage: '100 sqft',
  purchaseCost: 5.95,
  seedMerchant: mockStorMerchant,
  seedPurveyor: 'Territorial',
  datePurchased: new Date('2020-5-15'),
  dateExpires: new Date('2024-05-15'),
  dateLastModified: new Date('2021-1-1'),
  note: "Purchased on a whim because I can't help myself"
}

export const mockPestReport: PestReport = {
  _id: mockPestReportId,
  airTemp: 55,
  soilTemp: 52,
  reportType: ReportTypes.pest,
  pests: ['Slugs'],
  treatments: ['Liquid death', 'Slug and snail death'],
  note: 'I will kill them all',
}

export const mockSeedling: Seedling = {
  seedlingID: mockSeedlingId,
  seedPackage: mockSeedPackage,
  qtyStarted: 10,
  qtySprouted: 5,
  qtyTransplanted: 2,
  startedIndoors: true,
  dateSeedlingStarted: new Date('2022-4-15'),
  dateSprouted: new Date('2022-4-20'),
  transplantDate: new Date('2022-6-15'),
  totalDaysHardenedOff: 5,
  plantInfo: mockPlantInfo,
  reports: [mockPestReport],
}

describe('PlantFromSeedlingBuilder', () => {
  it('Function should be defined', () => {
    expect(PlantFromSeedlingBuilder).toBeDefined();
  });

  it('Should return a new plant object with seedling info', () => {
    const input = {};
    const result = PlantFromSeedlingBuilder(mockSeedling, input);
    expect(result.seedLife).toEqual(mockSeedling);
    expect(result.plantInfo).toBeDefined();
    expect(result.plantName).toBe('unknown');
  });

  it('Should return a plant with defaults and seed info', () => {
    const input: PlantInput = {
      plantInfo: {
        plantName: 'Frank from info'
      }
    };
    const result = PlantFromSeedlingBuilder(mockSeedling, input); 
    expect(result.plantName).toBe('Frank from info');
  })
});


describe('PlantFromSeedBuilder', () => {
  it('Should be defined', () => {
    expect(PlantFromSeedBuilder).toBeDefined();
  });

  it('Should return a plant payload', () => {
    const input = {
      qty: 3
    };
    const result = PlantFromSeedBuilder(mockSeedPackage, input);
    expect(result.seedLife).toBeDefined();
    expect(result.qty).toBe(3);
    expect(result.seedLife.seedPackage.coverage).toEqual(mockSeedPackage.coverage);
  });
});



describe('PlantBuilder', () => {
  const plantInputMock = {
    plantName: 'Frank'
  }

  it('PlantBuilder should be defined', () => {
    expect(PlantBuilder).toBeDefined();
  });

  it('PlantBuilder should take in a new plant input', () => {
    const mockPlantInput: PlantInput = {
      plantName: 'Frank',
      gardenFamily:GardenFamily.PEAS,
    }
    const result = PlantBuilder(mockPlantInput);
  });
  
  it('PlantBuilder should return plant name', () => {
    const mockPlantInput: PlantInput = {
      gardenFamily: GardenFamily.PEAS,
      plantInfo: {
        plantName: "Frank"
      }
    }
    const result = PlantBuilder(mockPlantInput);
    expect(result.plantName).toBe('Frank')
  });

  it('Should return unknown if no plant name provided', () => {
    const mock: PlantInput = {
      gardenFamily: GardenFamily.PEAS
    }
    const result = PlantBuilder(mock);
    expect(result.plantName).toEqual('unknown')
  })

  it('Should return garden family', () => {
    const mock: PlantInput = {
      gardenFamily: GardenFamily.PEAS
    }
    const result:any = PlantBuilder(mock);
    expect(result.plantInfo.gardenFamily).toBe('peas');
  })

  it('Should default to 12 days to germinate', () => {
    const mock:PlantInput = {
      plantName :'jo',
    }
    const result = PlantBuilder(mock);
    expect(result?.plantInfo?.daysToGerminate).toBe(12);
  });

  it('PlantBuilder should return default values', () => {
    const result = PlantBuilder(plantInputMock);
    expect(result.isFromSeed).toBe(false);
    expect(result.isPlanted).toBe(false);
    expect(result.dateGardenPlanted).toBe('');
    expect(result.dateSeedStarted).toBe('');
    expect(result.qty).toBe(1);
    expect(result.isPlantCollection).toBe(false);
    expect(result.location).toBeUndefined();
    expect(result.seedLife).toEqual({});
    expect(result.firstFruit).toBeUndefined();
    expect(result.lastFruit).toBeUndefined();
    expect(result.dateModified).toBeInstanceOf(Date);
  });

  it('PlantBuilder plantInfo should have default values', () => {
    const result = PlantBuilder(plantInputMock);
    const { plantInfo } = result;
    expect(plantInfo.plantName).toBe('Frank');
    expect(plantInfo.plantFamily).toBe(PlantFamily.NONE);
    expect(plantInfo.gardenFamily).toBe('NO_LABEL');
    expect(plantInfo.daysToGerminate).toBe(12);
    expect(plantInfo.daysToMaturity).toBe(60);
    expect(plantInfo.perennial).toBe(false);
    expect(plantInfo.sunlight).toBe(SUN_LIGHT.FULL_SUN);
    expect(plantInfo.spacing).toBeUndefined();
    expect(plantInfo.plantingInstructions).toBeUndefined();
    expect(plantInfo.standardHeight).toBeUndefined();
    expect(plantInfo.standardWidth).toBeUndefined();
    expect(plantInfo.friendlyPlants).toBeUndefined();
    expect(plantInfo.enemyPlants).toBeUndefined();
  });

  it('Should capture new date', () => {
    const input = {
      dateGardenPlanted: new Date('2022-5-5')
    };
    const result = PlantBuilder(input);
    expect(result.dateGardenPlanted).toBeInstanceOf(Date);
  });
  
  it('Should load garden family', () => {
    const input = {
      gardenFamily: GardenFamily.BEANS
    }
    const result = PlantBuilder(input);
    expect(result.plantInfo.gardenFamily).toBe('beans');
  });

  it('Should load garden family from plant info', () => {
    const input = {
      plantInfo: {
        gardenFamily: GardenFamily.PEAS
      }
    }
    const result = PlantBuilder(input);
    expect(result.plantInfo.gardenFamily).toBe('peas');
  });

  it('Should load plantCollection', () => {
    const input = {
      qty: 5
    };
    const result = PlantBuilder(input);
    expect(result.qty).toBe(5);
    expect(result.isPlantCollection).toBe(true);
  })
});

describe('PlantInfoBuilder', () => {
  it('Should build a plantInfo object', () => {
    const input = {
        spacing: '2 inches',
        plantingInstructions: "Don't mess up",
        friendlyPlants: ['cucumbers'],
        enemyPlants: ['Tom\s garden'],
        standardHeight: 3,
        standardWidth: 4
    };

    const expected = {
      plantName: 'unknown',
      gardenFamily: GardenFamily.NO_LABEL,
      plantFamily: PlantFamily.NONE,
      perennial: false,
      daysToGerminate: 12,
      daysToMaturity: 60,
      friendlyPlants: ['cucumbers'],
      enemyPlants: ['Tom\s garden'],
      plantingInstructions: "Don't mess up",
      spacing: '2 inches',
      sunlight: SUN_LIGHT.FULL_SUN,
      standardHeight: 3,
      standardWidth: 4

    }

    const result = PlantInfoBuilder(input);
    expect(result.spacing).toBe('2 inches');
    expect(result).toStrictEqual(expected)
  })
})