import React from "react";
import Dropdown from "./profileSubMenu";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  IconButton,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import { useState } from "react";

export const Profile = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div
      style={{
        position: "relative",
      }}
    >

      <Avatar
        margin="0"
        src="https://bit.ly/broken-link"
        size="sm"
        mt="1.2rem"
        onMouseEnter={() => {
          setDropdown(!dropdown);
        }}
      />
      {/* </button> */}
      {dropdown ? <Dropdown setDropdown={setDropdown} /> : ""}
    </div>
  );
};


