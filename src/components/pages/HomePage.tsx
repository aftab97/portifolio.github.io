import React from "react";
import PP from "../../images/pp.jpg";
export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="top-content">
        <img className="pp" src={PP} />
        <div className="content">
          <h2 className="title">"Passionate Software Developer"</h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            modi similique rem assumenda omnis doloribus sit natus id corrupti
            maiores quasi quis cum quibusdam dolor, tenetur reprehenderit fuga
            itaque at? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Doloremque modi similique rem assumenda omnis doloribus sit natus id
            corrupti maiores quasi quis cum quibusdam dolor, tenetur
            reprehenderit fuga itaque at? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Doloremque modi similique rem
            assumenda omnis doloribus sit natus id corrupti maiores quasi quis
            cum quibusdam dolor, tenetur reprehenderit fuga itaque at?
          </p>
        </div>
      </div>
    </div>
  );
};
