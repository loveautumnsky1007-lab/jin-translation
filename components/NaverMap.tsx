"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    naver: any;
  }
}

type NaverMapProps = {
  lat: number;
  lng: number;
  title?: string;
};

export default function NaverMap({
  lat,
  lng,
  title = "국제자문번역행정사사무소",
}: NaverMapProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current || !window.naver?.maps) return;

    const location = new window.naver.maps.LatLng(lat, lng);

    const map = new window.naver.maps.Map(mapRef.current, {
      center: location,
      zoom: 17,
      zoomControl: true,
      zoomControlOptions: {
        position: window.naver.maps.Position.TOP_RIGHT,
      },
    });

    const marker = new window.naver.maps.Marker({
      position: location,
      map,
      title,
    });

    const infoWindow = new window.naver.maps.InfoWindow({
      content: `
        <div style="padding:10px 14px; font-size:14px; line-height:1.5;">
          <strong>${title}</strong><br/>
          경기도 성남시 분당구 황새울로351번길 10, 401-B12
        </div>
      `,
    });

    window.naver.maps.Event.addListener(marker, "click", () => {
      if (infoWindow.getMap()) {
        infoWindow.close();
      } else {
        infoWindow.open(map, marker);
      }
    });
  }, [lat, lng, title]);

  return <div ref={mapRef} className="h-[260px] w-full sm:h-[320px] lg:h-[400px]" />;
}