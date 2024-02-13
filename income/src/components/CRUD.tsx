"use client";

import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";

const tabs = [
  {
    link: "/breakfast",
    label: "Breakfast",
    icon: <MoreVertIcon />,
  },
  {
    link: "/soup",
    label: "Soup",
    icon: <MoreVertIcon />,
  },
  {
    link: "/main-course",
    label: "Main course",
    icon: <MoreVertIcon />,
  },
  {
    link: "/desserts",
    label: "Desserts",
    icon: <MoreVertIcon />,
  },
];

export const CRUD = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <Stack width={"100%"}>
      <Stack gap={1}>
        <Typography fontSize={22} fontWeight={700}>
          Food Menu
        </Typography>
        <Stack
          justifyContent={"space-between"}
          paddingTop={4}
          paddingBottom={10}
          gap={5}
        >
          {tabs.map((item) => (
            <Stack
              onClick={() => {
                setActiveTab(item);
              }}
              sx={{
                bgcolor:
                  item.label === activeTab.label ? "#18BA51" : "common.white",
                color:
                  item.label === activeTab.label
                    ? "common.white"
                    : "common.black",
              }}
              border={1}
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              width={"15vw"}
              borderRadius={1}
              paddingY={1}
              paddingX={2}
            >
              <Typography key={item.label} fontSize={18} fontWeight={600}>
                {item.label}
              </Typography>
              <Typography
                sx={{
                  color:
                    item.icon === activeTab.icon
                      ? "common.white"
                      : "common.black",
                }}
              >
                {item.icon}
              </Typography>
            </Stack>
          ))}
          <Stack
            direction={"row"}
            gap={1}
            border={1}
            width={"15vw"}
            justifyContent={"start"}
            alignItems={"center"}
            borderRadius={1}
            paddingY={1}
            paddingX={2}
          >
            <AddIcon
              sx={{
                color: "#D6D8DB",
              }}
            />
            <Typography color={"#D6D8DB"} fontSize={18} fontWeight={600}>
              Create new category
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
