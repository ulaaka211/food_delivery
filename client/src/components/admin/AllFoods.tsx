"use client";

import { Button, Grid, Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CreateNewFood } from "./CreateNewFood";
import { CardModel, DateFilter } from "..";
import { useFood } from "../../provider/FoodProvider";
import Image from "next/image";
import { SingleOrder } from "../order, orderhistory n address/SingleOrder";

type AllFoodsProps = {
  selectedCategory: string;
  selectedOrder: string;
  setSelectedOrder: Dispatch<SetStateAction<string>>;
  tab: boolean;
  setTab: Dispatch<SetStateAction<boolean>>;
  click: boolean;
};

export const AllFoods = (props: AllFoodsProps) => {
  const { foods, allOrders } = useFood();
  const [open, setOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [editFoodId, setEditFoodId] = useState("");
  const [editFoodName, setEditFoodName] = useState("");
  const [editPrice, setEditPrice] = useState(0);
  const [editCategory, setEditCategory] = useState("");
  const [editFoodImg, setEditFoodImg] = useState("");
  const [editIngredients, setEditIngredients] = useState("");
  const [editDiscount, setEditDiscount] = useState(0);
  const { selectedOrder, setSelectedOrder, click } = props;

  return (
    <Stack width={"77.5%"} height={"100%"} pb={"3%"}>
      <Stack
        width={"100%"}
        paddingTop={4.5}
        paddingBottom={props.tab ? 4.5 : 9}
        paddingLeft={6}
        bgcolor={"#F7F7F8"}
        gap={4}
      >
        {props.tab && (
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography fontSize={22} fontWeight={700}>
              {props.selectedCategory ? props.selectedCategory : "All Foods"}
            </Typography>
            <Button
              variant="contained"
              onClick={() => {
                setOpen(true);
              }}
              sx={{
                color: "common.white",
                padding: "8px",
                bgcolor: "primary.main",
                borderRadius: "8px",
              }}
            >
              Add new food
            </Button>
            <CreateNewFood
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
              open={open}
              handleClose={() => setOpen(false)}
            />
          </Stack>
        )}
        {props.tab && <DateFilter />}
      </Stack>
      <Stack
        borderRadius={2}
        width={"100%"}
        overflow={"scroll"}
        paddingLeft={6}
        gap={6}
        bgcolor={"#F7F7F8"}
      >
        {props.tab ? (
          foods.length > 0 ? (
            <Grid container spacing={3}>
              {foods
                .filter((item) =>
                  props.selectedCategory === "All foods"
                    ? true
                    : item.category.includes(props.selectedCategory)
                )
                .map((item, index) => (
                  <Grid key={index} item xs={12} md={3}>
                    <CardModel
                      _id={item._id ?? ""}
                      foodName={item.foodName}
                      price={item.price}
                      category={item.category}
                      foodImg={item.foodImg}
                      discount={item.discount}
                      ingredients={item.ingredients}
                      editFoodId={editFoodId}
                      setEditFoodId={setEditFoodId}
                      editFoodName={editFoodName}
                      setEditFoodName={setEditFoodName}
                      editPrice={editPrice}
                      setEditPrice={setEditPrice}
                      editCategory={editCategory}
                      setEditCategory={setEditCategory}
                      editFoodImg={editFoodImg}
                      setEditFoodImg={setEditFoodImg}
                      editDiscount={editDiscount}
                      setEditDiscount={setEditDiscount}
                      editIngredients={editIngredients}
                      setEditInredients={setEditIngredients}
                    />
                  </Grid>
                ))}
            </Grid>
          ) : (
            <Stack
              height={"70vh"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                spacing={4}
              >
                <Image src="/NotFound.svg" width={133} height={133} alt="" />
                <Typography fontSize={14} fontWeight={400}>
                  Уучлаарай илэрц олдсонгүй...
                </Typography>
              </Stack>
            </Stack>
          )
        ) : allOrders && click ? (
          <SingleOrder
            selectedOrder={selectedOrder}
            setSelectedOrder={setSelectedOrder}
          />
        ) : (
          <Stack
            height={"70vh"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Stack justifyContent={"center"} alignItems={"center"} spacing={4}>
              <Image src="/NotFound.svg" width={133} height={133} alt="" />
              <Typography fontSize={14} fontWeight={400}>
                Уучлаарай илэрц олдсонгүй...
              </Typography>
            </Stack>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};
