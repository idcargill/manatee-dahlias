/* eslint-disable react/display-name */
import React, { useCallback, useMemo, memo, FormEvent, useState, ChangeEvent } from 'react';
import {
  SeedPackageInput,
  GardenFamily,
  SunLight,
  PlantType,
} from '../../../schema/generatedGQL/graphql';

// eslint-disable-next-line react/display-name
const Label = memo(({ title }: { title: string }) => (
  <div className="bg-cDark text-white w-36">{title}</div>
));

const GARDEN_FAMILY_OPTIONS = Object.keys(GardenFamily);
const SUNLIGHT_OPTIONS = Object.values(SunLight);

// eslint-disable-next-line react/display-name
const InputText = (
  { placeHolder, name, value, onChange }:
    {
      placeHolder: string,
      name: string,
      value: string,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    }) => {
  console.log('input text value:', value);
  return (
    <input
      className="bg-cGray p-2 m-1 w-48"
      type="text"
      onChange={onChange}
      name={name}
      value={value}
      defaultValue={value}
      placeholder={placeHolder} />
  );
};

// eslint-disable-next-line react/display-name
const InputNumer = memo((
  { placeholder, name, onChange }:
    {
      placeholder: string,
      name: string,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    }) => (
  <>
    <input
      name={name}
      placeholder={placeholder}
      type="number"
      min={0}
      step={1}
      onChange={onChange}
    />
  </>
));

const SelectionDropdown = ({ name, options, placeholder, value, onSelect }:
  {
    name: string,
    options: string[],
    placeholder?: string,
    value: string | number,
    onSelect:
    (e: ChangeEvent<HTMLSelectElement>) => void
  }
) => (
  <>
    <select
      className="bg-cGray p-2 m-1 w-48"
      name={name}
      value={value}
      onChange={onSelect}
    >
      <option value="">{placeholder}</option>
      {options.map((opt, idx) => (
        <option key={idx} value={opt.toLowerCase()}>{opt}</option>
      ))}
    </select>
  </>
);

const DefaultPlantFormValues: SeedPackageInput = {
  plantName: '',
  plantType: PlantType['Vegetable'],
  gardenFamily: GardenFamily['Beans'],
  sunlight: SunLight['FullSun'],
  determinate: true,
  perennial: false,
  qty: 0,
};

const PlantInputForm = () => {
  const [seedData, setSeedData] = useState<SeedPackageInput>(DefaultPlantFormValues);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    console.log('change', name, value);
    setSeedData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(seedData);
    setSeedData(DefaultPlantFormValues);
  };

  const onGardenFamilySelect = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.currentTarget;
    setSeedData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handeSunlight = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.currentTarget;
    setSeedData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleQuantityInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof SeedPackageInput
  ) => {
    const { value } = e.target;
    setSeedData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Label title="Plant Name" />
        <InputText
          value={seedData.plantName}
          onChange={handleChange}
          placeHolder="Plant name ex: patio sun golds"
          name="plantName"
        />

        <Label title="Garden Family" />
        <SelectionDropdown
          name="gardenFamily"
          value={(seedData?.gardenFamily as string)}
          options={GARDEN_FAMILY_OPTIONS}
          onSelect={onGardenFamilySelect}
        />

        <Label title="Sun Light" />
        <SelectionDropdown
          name="sunLight"
          value={(seedData?.plantInfo?.sunlight as string)}
          options={SUNLIGHT_OPTIONS}
          onSelect={handeSunlight}
        />


        {/* plant type PlantType */}

        {/* gty number  */}
        <Label title="quantity" />
        <InputNumer
          name="quantity"
          placeholder="how many??"
          onChange={useCallback((e) => handleQuantityInput(e, 'qty'), [])}
        />


        {/* plant family PlantFamily*/}


        {/* coverage number  */}

        {/* plantInfo : PlantInfo  */}


        {/* puchaseCost number  */}

        {/* seedMerchant  Store MerchangeInput */}

        {/* seedPurveyor : String */}

        {/* date purchased : Date  */}

        {/* date Expires : Date  */}

        {/* note: string  */}

        <button type="submit">Submit</button>
      </form>
    </>
  );
};


export default PlantInputForm;
