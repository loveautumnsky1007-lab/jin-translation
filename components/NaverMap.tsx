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
  const initializedRef = useRef(false);

  useEffect(() => {
    let retryId: NodeJS.Timeout;

    const initMap = () => {
      if (!mapRef.current) return;

      if (!window.naver || !window.naver.maps) {
        retryId = setTimeout(initMap, 200);
        return;
      }

      if (initializedRef.current) return;
      initializedRef.current = true;

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
    <div style="padding:10px 14px; font-size:14px; line-height:1.5; cursor:pointer;">
      <a 
        href="https://map.naver.com/p/search/%EA%B5%AD%EC%A0%9C%EC%9E%90%EB%AC%B8%EB%B2%88%EC%97%AD%ED%96%89%EC%A0%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C/place/1786107100"
        target="_blank"
        style="text-decoration:none; color:#2f3a63;"
      >
        <strong>${title}</strong><br/>
        경기도 성남시 분당구 황새울로351번길 10, 401-B12
        <div style="margin-top:6px; font-size:12px; color:#6b7280;">
          클릭 시 네이버 지도 이동 ↗
        </div>
      </a>
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
    };

    initMap();

    return () => {
      if (retryId) clearTimeout(retryId);
    };
  }, [lat, lng, title]);

return   <div 
      ref={mapRef} 
      className="h-full w-full relative overflow-hidden" 
      style={{ isolation: 'isolate' }} // 다른 요소가 위로 올라오는 걸 방지하는 확실한 방법
    />;}