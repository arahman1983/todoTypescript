import * as React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import * as animationData from "../assets/404page.json";
import {LangsContext} from '../context/langsContext'


export function UnFoundPage() {
  const {stringLocal} = React.useContext(LangsContext)

  return (
    <div>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
        height={600}
        width={600}
      />
      <div className="w-50 mx-auto flex">
        <Link
          to="/"
          className="bg-white hover:bg-teal-100 text-teal-500 py-2 px-4 mx-auto border border-teal-400 rounded shadow"
        >
          {stringLocal.goHome}
        </Link>
      </div>
    </div>
  );
}
