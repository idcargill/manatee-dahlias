const hardinessResolvers = {
  Query: {
    getZoneByZipcode: (_: any, args: any, context: any) => {
      const { zipcode } = args;
      return context.ZONE.getHardinessZone.getZoneByZipcode(zipcode);
    },
  },
};

export default hardinessResolvers;
