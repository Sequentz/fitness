"use client";

import React from "react";

export default function Leeftijd() {
  const geboortedatum = new Date("1999-05-15"); // Pas jaar aan
  const vandaag = new Date();

  let leeftijd = vandaag.getFullYear() - geboortedatum.getFullYear();
  const maandDiff = vandaag.getMonth() - geboortedatum.getMonth();
  const dagDiff = vandaag.getDate() - geboortedatum.getDate();

  if (maandDiff < 0 || (maandDiff === 0 && dagDiff < 0)) {
    leeftijd--;
  }

  return <span>{leeftijd}</span>;
}
