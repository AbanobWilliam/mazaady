"use client";
import { option } from "../ts/option";
import Properity from "./Properity";

function SubProperities({ properties }: { properties: option[] }) {
  return properties.map((properity: any) => {
    return properity.options.length > 0 && <Properity properity={properity} />;
  });
}

export default SubProperities;
