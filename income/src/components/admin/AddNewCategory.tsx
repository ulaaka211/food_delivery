"use client";

import { Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import { CreateNewCategory } from "./CreateNewCategory";
import { useAuth } from "../provider/AuthenticationProvider";
import { useRouter } from "next/navigation";

export const AddNewCategory = () => {
  const { categories } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <Stack width={"24.3%"}>
      <Stack
        width={"100%"}
        paddingTop={3}
        paddingRight={2}
        bgcolor={"#fff"}
        alignItems={"flex-start"}
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
            {categories.map((item) => (
              <Stack
                onClick={() => {}}
                sx={{}}
                border={1}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                width={"15vw"}
                borderRadius={1}
                paddingY={1}
                paddingX={2}
              >
                <Typography
                  key={item.foodCategory}
                  fontSize={18}
                  fontWeight={600}
                >
                  {item.foodCategory}
                </Typography>
                <MoreVertIcon />
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
              onClick={() => {
                setOpen(true);
              }}
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
  );
};
