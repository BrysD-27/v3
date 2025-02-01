import React from "react";
import PropTypes from "prop-types";
import {
  IconGitHub,
  IconInstagram,
  IconLinkedin,
  IconExternal,
} from "@/components/icons";

const Icon = ({ name }) => {
  switch (name) {
    case "GitHub":
      return <IconGitHub />;
    case "Instagram":
      return <IconInstagram />;
    case "Linkedin":
      return <IconLinkedin />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
