import React from "react";
import { NextComponentType } from "next";
interface IProps {
  children: any;
  condition: boolean;
}

export const Index = ({ children, condition }: IProps) => (condition ? children : null);
