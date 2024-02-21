"use client";

import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import { CreateNewCategory } from "./CreateNewCategory";

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

export const AddCategory = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [open, setOpen] = useState(false);

  return (
    <Stack width={"27.5vw"}>
      <Stack
        width={"100%"}
        paddingTop={3}
        paddingRight={2}
        bgcolor={"#fff"}
        alignItems={"flex-end"}
      >
        <Stack gap={1} width={"58.5%"}>
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
              <Typography
                onClick={() => {
                  setOpen(true);
                }}
                color={"#D6D8DB"}
                fontSize={18}
                fontWeight={600}
              >
                Create new category
              </Typography>
              <CreateNewCategory
                open={open}
                handleClose={() => {
                  setOpen(false);
                }}
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
