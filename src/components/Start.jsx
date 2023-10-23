import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import * as ReactBootstrap from "react-bootstrap";

const Start = () => {
  return (
    <div className="all">
      <div>
        <Button className="startLoginButton" variant="warning">
          <Link className="link2" to={`/dogbreeds/login`}>
            {" "}
            LOGIN{" "}
          </Link>
        </Button>
        <Button className="startRegisterButton" variant="warning">
          <Link className="link2" to={`/dogbreeds/register`}>
            {" "}
            REGISTER{" "}
          </Link>
        </Button>
      </div>
      <div className="headerBckgrnd">
        <h1 className="header">Dog Breeds</h1>
        <hr className="line" />
      </div>
    </div>
  );
};

export default Start;
