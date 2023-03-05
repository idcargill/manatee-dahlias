import hardinessResolvers from './dataSources/hardinessZoneService/hardinessZoneResolver';
import gardenResolvers from './dataSources/gardenService/gardenResolvers';

const mergedResolvers = [hardinessResolvers, gardenResolvers];

export default mergedResolvers;
