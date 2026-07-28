export type CityStatus = "active" | "inactive";

export interface City {
  id: string;

  name: string;

  stateId: string;

  stateName: string;

  totalSchools: number;

  status: CityStatus;

  createdAt: string;
}
    