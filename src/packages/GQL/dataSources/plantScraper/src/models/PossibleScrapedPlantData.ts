export type PossiblePlantDataKeys = {
  [key: string] : any;
}

export interface PossiblePlantData {
  garden_database_id?: string;
  plant_name?: string;
  classification?: string;
  leaf_type?: string;
  leaves?: string;
  best_uses?: string;
  eating_methods?: string[];
  edible_parts?: string;
  earliness?: string;
  containers?: string;
  conservationStatus?: string;
  form?: string;
  plant_habit?: string;
  plant_height?: string;
  plant_spread?: string;
  pollinators?: string[];
  propagation_seeds?: string;
  resistance?: string;
  skin_color?: string;
  size?: string;
  sun_requirements?: string;
  toxicity?: string[];
  underground_structures?: string;
  uses?: string[];
  water_preferences?: string;
  
  // _care
  dynamic_accumulator?: string[];
  enemy_plants?: string[];
  friendly_plants?: string[];
  minimum_cold_hardiness?: string;
  maximum_recommended_zone?: string;
  planting_instructions?: string;
  spacing?: string;
  standard_height?: string;
  standard_width?: string;
  suitable_locations?: string[];
  sunlight?: string;

  // _planting
  before_planting?: string;
  days_to_maturity?: string;
  days_to_germinate?: string;
  determinate?: boolean;
  fertilizer?: string;
  harvesting?: string;
  pests_disease?: string;
  perennial?: boolean;
  planting?: string;
  storing?: string;
  tips?: string;
  watering?: string;
  
  // _flowers
  beard_color?: string;
  bloom_color_classification?: string[];
  bloom_color_description?: string[];
  bloom_season?: string;
  bloom_size?: string;
  color?: string;
  flower_color?: string;
  flower_time?: string;
  flowers?: string;
  flower_form?: string;
  flower_patterns?: string[];
  fragrance?: string[];
  
  // Life _cycle
  growth_mode?: string;
  heredity?: string;
  life_cycle?: string;
  propagation_other_methods?: string;
  
  // Breeding
  ads_code?: string;
  hybridizer?: string;
  parentage?: string;
  ploidy?: string;
  country?: string;
  country_of_origin?: string;
  registered_height?: string;
  seedling_string?: string;
  special_classifications?: string;
  style_arm_color?: string;
  year_introduced?: string;
  year_of_introduction?: string;
  year_of_registration?: string;

  // _fruit
  fruit?: string;
  fruit_size?: string;
  fruit_skin_color?: string;
  fruit_shape?: string;
  fruiting_time?: string;

  /**  Garlic Specific  */
  garlic_type?: string;
  miscellaneous?: string[];
  neck_type?: string;

  // _tulip
  division?: string;

  // _roses
  bud_count?: string;
  ahs_link?: string;
  year_of_registration_or_introduction?: string;
  foliage_type?: string;
  scape_height?: string;
  plant_traits?: string;
  branching?: string;
  rust_resistance_decimalScore?: string;
  bloom_trait?: string;
  bloom_form?: string;
  color_description?: string;
  ahs_awards?: string[];
  awards_and_recognitions?: string[];
  child_plants?: string;
  percentage?: string;
}

export type PossibleRawPlantData = {
  garden_database_id?: string;
  plant_name?: string;
  classification?: string;
  leaf_type?: string;
  leaves?: string;
  best_uses?: string;
  eating_methods?: string[];
  edible_parts?: string;
  earliness?: string;
  containers?: string;
  conservationStatus?: string;
  form?: string;
  plant_habit?: string;
  plant_height?: string;
  plant_spread?: string;
  pollinators?: string[];
  propagation_seeds?: string;
  resistance?: string;
  skin_color?: string;
  size?: string;
  sun_requirements?: string;
  toxicity?: string[];
  underground_structures?: string;
  uses?: string[];
  water_preferences?: string;
  
  // _care
  dynamic_accumulator?: string[];
  enemy_plants?: string[];
  friendly_plants?: string[];
  minimum_cold_hardiness?: string;
  maximum_recommended_zone?: string;
  planting_instructions?: string;
  spacing?: string;
  standard_height?: string;
  standard_width?: string;
  suitable_locations?: string[];
  sunlight?: string;

  // _planting
  before_planting?: string;
  days_to_maturity?: string;
  days_to_germinate?: string;
  determinate?: boolean;
  fertilizer?: string;
  harvesting?: string;
  pests_disease?: string;
  perennial?: boolean;
  planting?: string;
  storing?: string;
  tips?: string;
  watering?: string;
  
  // _flowers
  beard_color?: string;
  bloom_color_classification?: string[];
  bloom_color_description?: string[];
  bloom_season?: string;
  bloom_size?: string;
  color?: string;
  flower_color?: string;
  flower_time?: string;
  flowers?: string;
  flower_form?: string;
  flower_patterns?: string[];
  fragrance?: string[];
  
  // Life _cycle
  growth_mode?: string;
  heredity?: string;
  life_cycle?: string;
  propagation_other_methods?: string;
  
  // Breeding
  ads_code?: string;
  hybridizer?: string;
  parentage?: string;
  ploidy?: string;
  country?: string;
  country_of_origin?: string;
  registered_height?: string;
  seedling_string?: string;
  special_classifications?: string;
  style_arm_color?: string;
  year_introduced?: string;
  year_of_introduction?: string;
  year_of_registration?: string;

  // _fruit
  fruit?: string;
  fruit_size?: string;
  fruit_skin_color?: string;
  fruit_shape?: string;
  fruiting_time?: string;

  /**  Garlic Specific  */
  garlic_type?: string;
  miscellaneous?: string[];
  neck_type?: string;

  // _tulip
  division?: string;

  // _roses
  bud_count?: string;
  ahs_link?: string;
  year_of_registration_or_introduction?: string;
  foliage_type?: string;
  scape_height?: string;
  plant_traits?: string;
  branching?: string;
  rust_resistance_decimalScore?: string;
  bloom_trait?: string;
  bloom_form?: string;
  color_description?: string;
  ahs_awards?: string[];
  awards_and_recognitions?: string[];
  child_plants?: string;
  percentage?: string;
}