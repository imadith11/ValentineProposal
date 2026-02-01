import React from "react";
import kisses from "../kisses.gif";

/**
 * Success component displaying a sweet message upon acceptance.
 *
 * @returns {JSX.Element} JSX element representing the Success component.
 */
const Success = () => (
  <div className="App-success">
    {/* Displaying a cute kisses gif */}
    <img className="App-gif" src={kisses} alt="Kisses" />
    {/* Personalized success messages */}
    <p className="App-text-success">
      I love youu :)
    </p>
    <p className="App-text-success">
      I'm glad to have a girl like you, Lisa
    </p>
    {/* Displaying the date of the special moment */}
    <p className="App-text-date">14.02.26</p>
  </div>
);

export default Success;
