import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

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
