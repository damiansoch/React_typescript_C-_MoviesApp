import React from "react";
import css from "../movies/individualMovie.module.css";

const Loading = () => {
  return (
    <div className={css.div}>
      <img
        src="https://acegif.com/wp-content/uploads/loading-43.gif"
        alt="Loading..."
      />
    </div>
  );
};

export default Loading;
