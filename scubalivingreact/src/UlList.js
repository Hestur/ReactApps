import React from "react";
import ListItemHome from "./ListItemHome";
import ListItemUdstyr from "./ListItemUdstyr";
import ListItemRejser from "./ListItemRejser";
import ListItemKurser from "./ListItemKurser";
import ListItemKontakt from "./ListItemKontakt";
import ListItemOmOs from "./ListItemOmOs";

class UlList extends React.Component {
  render() {
    return (
      <ul className="ul">
        <ListItemHome />
        <ListItemUdstyr />
        <ListItemRejser />
        <ListItemKurser />
        <ListItemKontakt />
        <ListItemOmOs />
      </ul>
    );
  }
}

export default UlList;
