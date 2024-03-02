// src/components/component/Map.js
'use client'
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

function Map({ address }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return; // Don't run on the server side
    }

    const loader = new Loader({
      apiKey: "AIzaSyA9eigHhVk_IFTt3gHmIrQYcrh9-xiLu6U", // Replace with your API key
      version: "weekly",
    });

    loader.load().then(() => {
      mapRef.current = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 21.195491, lng: 81.292878 },
        zoom: 20,
      });
      const marker = new window.google.maps.Marker({
        position: { lat: 21.195491, lng: 81.292878 },
        map: mapRef.current,
      });
    });
  }, []); // Empty dependency array means it runs only once on mount

  return (
    <div id="map" style={{ height: "100%", width: "100%" }}></div>
  );
}

export default Map;
