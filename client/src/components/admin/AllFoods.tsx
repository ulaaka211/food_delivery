"use client";

import { Button, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { CreateNewFood } from "./CreateNewFood";
import { CardModel } from "..";
import { useFood } from "../../provider/FoodProvider";

type AllFoodsProps = {
  selectedCategory: string;
};

export const AllFoods = (props: AllFoodsProps) => {
  const { foods } = useFood();
  const [open, setOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [editFoodId, setEditFoodId] = useState("");
  const [editFoodName, setEditFoodName] = useState("");
  const [editPrice, setEditPrice] = useState(0);
  const [editCategory, setEditCategory] = useState("");
  const [editFoodImg, setEditFoodImg] = useState("");
  const [editIngredients, setEditIngredients] = useState("");
  const [editDiscount, setEditDiscount] = useState(0);

  return (
    <Stack width={"77.5%"} height={"100%"} pb={"3%"}>
      <Stack width={"100%"} paddingY={4} paddingLeft={6} bgcolor={"#F7F7F8"}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography fontSize={22} fontWeight={700}>
            {props.selectedCategory ? props.selectedCategory : "All Foods "}
          </Typography>
          <Button
            variant="text"
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
      </Stack>
      <Stack
        borderRadius={2}
        width={"100%"}
        overflow={"scroll"}
        paddingLeft={6}
        gap={6}
        bgcolor={"#F7F7F8"}
      >
        <Grid container spacing={3}>
          {foods
            .filter((item) => item.category.includes(props.selectedCategory))
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
      </Stack>
    </Stack>
  );
};
