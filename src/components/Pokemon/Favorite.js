import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Favorite(props) {
  const { id } = props;

  const addFavorite = () => {
    console.log("add to favorite", id);
  };
  return (
    <Icon
      name="heart"
      color="#fff"
      size={20}
      style={{ marginRight: 20 }}
      onPress={() => addFavorite()}
    />
  );
}
