import React from "react";
import Login from "../Login/Login";
import Navbar from "../Navbar/Navbar";
import "./mainpage.scss";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Mainpage() {
  // var map = L.map("map").setView([51.505, -0.09], 13);

  // L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  //   maxZoom: 19,
  //   attribution:
  //     '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  // }).addTo(map);

  return (
    <div>
      <Navbar />
      <div id="map">
        <MapContainer
          center={[39.606, -105.9583]}
          zoom={15}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          <div className="login--placement">
            <Login />
          </div>
        </MapContainer>
      </div>
    </div>
  );
}
