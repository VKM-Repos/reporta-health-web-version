// App.js
import React, { useState } from "react";



function App(props) {
    if(!props.visible) return null
  return (
    <div className="fixed bg-white  w-full h-full">
        Report facility
    </div>
  );
}

export default App;
