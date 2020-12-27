export interface Orphanage {

  id: string;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  openingHours: string;
  openOnWeekends: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type OrphanageFormData = Omit<Orphanage, "id" | "createdAt" | "updatedAt">;
