export interface Location{
    locationID: string,
    locationName: string,
    locationSortOrder: number,
    locationType: number,
    locationTransport: number,
    locationHospital: number,
    locationUnit: number,
    locationForMothers: number,
    locationActive: number,
    prepLocation: number,
    visibleToUsers: number,
    locationBarcode: string,
    createdBy: string,
    updatedBy: string,
    created_at: string,
    updated_at: string
}

export const LocationHeaders = [
    "locationID",
    "locationName",
    "locationSortOrder",
    "locationType",
    "locationTransport",
    "locationHospital",
    "locationUnit",
    "locationForMothers",
    "locationActive",
    "prepLocation",
    "visibleToUsers",
    "locationBarcode",
    "createdBy",
    "updatedBy",
    "created_at",
    "updated_at"
]