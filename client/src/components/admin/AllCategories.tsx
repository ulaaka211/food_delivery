"use client";

import { Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import { CreateNewCategory } from "./CreateNewCategory";
import { EditCategory, OrderDetail } from "..";
import { useFood } from "@/provider/FoodProvider";
import { OrderHistoryFoods } from "../order, orderhistory n address/OrderDetails";
import { OrderHistory } from "../order, orderhistory n address/OrderHistory";

type AllCategoriesProps = {
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
  selectedOrder: string;
  setSelectedOrder: Dispatch<SetStateAction<string>>;
  tab: boolean;
  setTab: Dispatch<SetStateAction<boolean>>;
  handleClick: () => void;
};

export const AllCategories = (props: AllCategoriesProps) => {
  const { selectedOrder, setSelectedOrder, handleClick } = props;
  const { allOrders, categories } = useFood();
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [editCategoryId, setEditCategoryId] = useState("");

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
        pr={1}
        bgcolor={"#fff"}
        alignItems={"flex-start"}
        maxHeight={"50%"}
      >
        <Stack gap={5} width={"100%"} mt={"2.5%"}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography
              sx={{
                cursor: "pointer",
              }}
              onClick={() => {
                props.setTab(true);
              }}
              fontSize={26}
              fontWeight={700}
              color={props.tab ? "primary.main" : "#D6D8DB"}
            >
              Food Menu
            </Typography>
            <Typography
              sx={{
                cursor: "pointer",
              }}
              onClick={() => {
                props.setTab(false);
              }}
              fontSize={26}
              fontWeight={700}
              color={props.tab ? "#D6D8DB" : "primary.main"}
            >
              Order
            </Typography>
          </Stack>
          {props.tab ? (
            <Stack
              borderRadius={1}
              height={"52%"}
              // overflow={"scroll"}
              width={"100%"}
              gap={4}
            >
              {categories.map((item, index) => (
                <Stack
                  key={index}
                  onClick={() => {
                    props.setSelectedCategory(item.foodCategory);
                    setCategoryName(item.foodCategory);
                  }}
                  border={1}
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  width={"100%"}
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
                    <EditCategory
                      categoryName={categoryName}
                      _id={item._id ?? ""}
                      editCategoryId={editCategoryId}
                      setEditCategoryId={setEditCategoryId}
                    />
                  )}
                </Stack>
              ))}
              <Stack
                direction={"row"}
                gap={1}
                border={1}
                width={"100%"}
                justifyContent={"start"}
                alignItems={"center"}
                borderRadius={1}
                paddingY={1}
                paddingX={2}
                onClick={() => {
                  setOpen(true);
                }}
                sx={{
                  cursor: "pointer",
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
          ) : (
            <Stack
              height={"50%"}
              overflow={"scroll"}
              width={"100%"}
              onClick={handleClick}
            >
              {allOrders.map((item, index) => (
                <OrderHistory
                  key={index}
                  {...item}
                  setSelectedOrder={setSelectedOrder}
                />
              ))}
            </Stack>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};
