import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import LinkList from "../components/LinkList";

export default function MainLayout() {
  return (
    <div className="continer">
      <Header />
      <LinkList />
    </div>
  );
}
