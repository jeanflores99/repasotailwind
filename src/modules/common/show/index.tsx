import React from "react";
import { NextComponentType } from "next";
interface IProps {
  children: any;
  condition: boolean;
  df?: any;
}

export const Index = ({ children, condition, df }: IProps) =>
  condition ? children : df || null;
