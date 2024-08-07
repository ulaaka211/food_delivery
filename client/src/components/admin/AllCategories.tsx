"use client";

import { Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import { CreateNewCategory } from "./CreateNewCategory";
import { useFood } from "../../provider/FoodProvider";
import { EditCategory } from "..";

type AllCategoriesProps = {
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
};

export const AllCategories = (props: AllCategoriesProps) => {
  const { categories } = useFood();
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [categoryName, setCategoryName] = useState("");

  const isSelected = (category: string) => {
    if (category == props.selectedCategory) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Stack width={"22.5%"}>
      <Stack
        width={"100%"}
        paddingTop={3}
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
                onClick={() => {
                  props.setSelectedCategory(item.foodCategory);
                  setCategoryName(item.foodCategory);
                }}
                border={1}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                width={"15vw"}
                borderRadius={1}
                paddingY={1}
                paddingX={2}
                position={"relative"}
                bgcolor={
                  props.selectedCategory == item.foodCategory
                    ? "primary.main"
                    : "common.white"
                }
                color={
                  props.selectedCategory == item.foodCategory
                    ? "common.white"
                    : "common.black"
                }
                sx={{
                  cursor: "pointer",
                }}
              >
                <Typography
                  key={item.foodCategory}
                  fontSize={18}
                  fontWeight={600}
                >
                  {item.foodCategory}
                </Typography>
                <MoreVertIcon
                  onClick={() => {
                    setEditOpen((prev) => !prev);
                  }}
                />
                {isSelected(item.foodCategory) && editOpen && (
                  <EditCategory categoryName={categoryName} />
                )}
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
