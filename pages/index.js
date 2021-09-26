import React from "react";
import MyWonderfulComponent from "./../components/MyWonderfulComponent";

const index = ({ data }) => {
  return (
    <MyWonderfulComponent
      id="id"
      options="options"
      count="count"
      color="color"
      data={data}
    >
      <p>I'm text from a component</p>
    </MyWonderfulComponent>
  );
};

export default index;

export async function getStaticProps() {
  const data = "Hello from SSR!"; //Здесь должен быть запрос..?
  return { props: { data } };
}
