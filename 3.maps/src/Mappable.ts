export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  getMarkerContent(): string;
}
