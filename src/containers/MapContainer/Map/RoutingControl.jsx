import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

const redIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

const greenIcon = new L.Icon({
  iconUrl: 'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

const blueIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

const createRoutineMachineLayer = ({ points }) => {
  const instance = L.Routing.control({
    waypoints: points,
    lineOptions: {
      styles: [
        {
          color: "blue",
          opacity: 0.6,
          weight: 4
        },
      ],
    },
    pointMarkerStyle: {
      color: 'black',
    },
    language: 'ru',
    createMarker: (i, wp, nWps) => {
      if (i === 0) {
        return L.marker(wp.latLng, {icon: redIcon });
      }
      if (i === nWps - 1) {
        return L.marker(wp.latLng, {icon: greenIcon });
      }
      return L.marker(wp.latLng, {icon: blueIcon });
    },
    itineraryClassName: 'markerS',
    addWaypoints: false,
    draggableWaypoints: false,
    fitSelectedRoutes: false,
    showAlternatives: false,
    collapsible: true,
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
