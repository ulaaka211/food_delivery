"use client";

import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useAuth } from "../../provider/AuthenticationProvider";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { UpdateFood } from "../admin/UpdateFood";
import { DeleteFood } from "../admin/DeleteFood";
import { useFood } from "@/provider/FoodProvider";

type CardModelProps = {
  _id: string;
  foodName: string;
  price: number;
  foodImg: string;
  category: string;
  ingredients: string;
  discount: number;
  editFoodId: string;
  setEditFoodId: Dispatch<SetStateAction<string>>;
  editFoodName: string;
  setEditFoodName: Dispatch<SetStateAction<string>>;
  editPrice: number;
  setEditPrice: Dispatch<SetStateAction<number>>;
  editDiscount: number;
  setEditDiscount: Dispatch<SetStateAction<number>>;
  editIngredients: string;
  setEditInredients: Dispatch<SetStateAction<string>>;
  editFoodImg: string;
  setEditFoodImg: Dispatch<SetStateAction<string>>;
  editCategory: string;
  setEditCategory: Dispatch<SetStateAction<string>>;
};

export const CardModel = (props: CardModelProps) => {
  const {
    _id,
    foodName,
    price,
    foodImg,
    category,
    ingredients,
    discount,
    editFoodId,
    setEditFoodId,
    editFoodName,
    setEditFoodName,
    editPrice,
    setEditPrice,
    editDiscount,
    setEditDiscount,
    editIngredients,
    setEditInredients,
    editFoodImg,
    setEditFoodImg,
    editCategory,
    setEditCategory,
  } = props;

  const [dltFood, setDltFood] = useState(false);
  const [update, setUpdate] = useState(false);
  const { isAdmin } = useAuth();
  const { numberFormatter } = useFood();

  return (
    <Stack>
      <Stack
        spacing={1.75}
        sx={{
          "&:hover .editBtn": {
            display: "flex",
            zIndex: 10,
          },
        }}
      >
        <Stack position={"relative"}>
          <Stack
            position={"relative"}
            width={"100%"}
            pt="66.6%"
            top={0}
            left={0}
            overflow={"hidden"}
            borderRadius={3}
          >
            <Image src={foodImg} alt="" fill objectFit="cover" />
          </Stack>
          {Boolean(discount) && (
            <Typography
              top={10}
              right={10}
              position={"absolute"}
              zIndex={1}
              width={"fit-content"}
              paddingY={0.5}
              paddingX={2}
              color={"#fff"}
              bgcolor={"#18BA51"}
              border={1}
              borderRadius={16}
              borderColor={"#fff"}
              fontSize={18}
              fontWeight={600}
            >
              {discount}%
            </Typography>
          )}
          {isAdmin && (
            <Stack
              direction={"row"}
              justifyContent={"center"}
              position={"absolute"}
              zIndex={40}
              gap={1}
              sx={{
                transform: "translate(50%)",
                top: "44%",
                right: "50%",
              }}
            >
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  setEditFoodId(_id);
                  setEditFoodName(foodName);
                  setEditFoodImg(foodImg);
                  setEditPrice(price);
                  setEditDiscount(discount);
                  setEditInredients(ingredients);
                  setEditCategory(category);
                  setUpdate(true);
                }}
                className="editBtn"
                sx={{
                  zIndex: 20,
                  display: "none",
                  paddingY: "8px",
                  paddingX: "16px",
                  width: "fit-content",
                  color: "#000",
                  bgcolor: "#fff",
                  borderRadius: "16px",
                  fontSize: "12px",
                  fontWeight: 600,
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: "#e5e5e5",
                  },
                }}
              >
                Edit
              </Button>
              <UpdateFood
                editFoodId={editFoodId}
                editFoodName={editFoodName}
                editPrice={editPrice}
                editCategory={editCategory}
                editFoodImg={editFoodImg}
                editDiscount={editDiscount}
                editIngredients={editIngredients}
                update={update}
                setEditFoodName={setEditFoodName}
                setEditPrice={setEditPrice}
                setEditCategory={setEditCategory}
                setEditFoodImg={setEditFoodImg}
                setEditDiscount={setEditDiscount}
                setEditInredients={setEditInredients}
                handleUpdateClose={() => setUpdate(false)}
              />
              <Button
                className="editBtn"
                onClick={(e) => {
                  e.stopPropagation();
                  setDltFood(true);
                  setEditFoodId(_id);
                }}
                sx={{
                  zIndex: 20,
                  display: "none",
                  width: "fit-content",
                  color: "#000",
                  bgcolor: "#fff",
                  borderRadius: "16px",
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: "#e5e5e5",
                  },
                }}
              >
                <DeleteOutlineOutlinedIcon
                  sx={{
                    color: "red",
                  }}
                />
              </Button>
              <DeleteFood
                editFoodId={editFoodId}
                dltFood={dltFood}
                handleDeleteFood={() => setDltFood(false)}
              />
            </Stack>
          )}
        </Stack>
        <Stack>
          <Typography fontSize={20} fontWeight={590}>
            {foodName}
          </Typography>
          <Stack direction={"row"} spacing={1.9}>
            <Typography color={"#18BA51"} fontSize={18} fontWeight={590}>
              {Boolean(discount)
                ? numberFormatter.format(price * (1 - discount * 0.01)) + "₮"
                : numberFormatter.format(price) + "₮"}
            </Typography>
            <Typography
              sx={{
                textDecorationLine: "line-through",
              }}
              fontSize={18}
              fontWeight={590}
            >
              {Boolean(numberFormatter.format(discount)) &&
                numberFormatter.format(price) + "₮"}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
