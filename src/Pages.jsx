import React from "react";

export default function Pages(props) {
  const Search = () => {};
  const Page_action = () => {};
  return (
    <div>
      <article>
        <img src="/src/assets/"{props.template}".svg" /> {props.page_name}
      </article>
    </div>
  );
}
