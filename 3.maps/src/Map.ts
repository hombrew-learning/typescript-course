import { Mappable } from './Mappable';

export class Map {
  private ref: google.maps.Map;

  constructor(elementId: string) {
    this.ref = new google.maps.Map(document.getElementById(elementId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.ref,
      position: mappable.location,
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.getMarkerContent(),
      });

      infoWindow.open(this.ref, marker);
    });
  }
}
