export type StateStatus = "active" | "inactive";

export interface State {
  id: string;

  name: string;

  code: string;

  totalCities: number;

  totalSchools: number;

  status: StateStatus;

  createdAt: string;
}
