"use client";

import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { foodParams, useAuth } from "../../provider/AuthenticationProvider";
import { useState } from "react";
import { OrderDetail } from "..";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { UpdateFood } from "../admin/UpdateFood";
import { DeleteFood } from "../admin/DeleteFood";
import { useFood } from "../../provider/FoodProvider";

export const CardModel = (props: foodParams) => {
  const [foodName, setFoodName] = useState("");
  const [deleteFoodName, setDeleteFoodName] = useState("");
  const [open, setOpen] = useState(false);
  const [dltFood, setDltFood] = useState(false);
  const [update, setUpdate] = useState(false);
  const { isAdmin } = useAuth();
  const [foodInfo, setFoodInfo] = useState({});

  return (
    <Stack>
      <Stack
        onClick={() => {
          setOpen(true);
        }}
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
            <Image src={props.foodImg} alt="" fill objectFit="cover" />
          </Stack>
          {Boolean(props.discount) && (
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
              {props.discount}%
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
                  setUpdate(true);
                  const foodDetails = {
                    foodName: props.foodName,
                    price: props.price,
                    foodImg: props.foodImg,
                    ingredients: props.ingredients,
                    discount: props.discount,
                    category: props.category,
                  };
                  setFoodInfo(foodDetails);
                  setFoodName(props.foodName);
                  console.log(setFoodInfo);
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
                // foodInfo={foodInfo}
                foodName={foodName}
                update={update}
                handleUpdateClose={() => setUpdate(false)}
              />
              <Button
                className="editBtn"
                onClick={(e) => {
                  e.stopPropagation();
                  setDltFood(true);
                  setDeleteFoodName(props.foodName);
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
                dltFood={dltFood}
                handleDeleteFood={() => setDltFood(false)}
                deleteFoodName={deleteFoodName}
              />
            </Stack>
          )}
        </Stack>
        <Stack>
          <Typography fontSize={20} fontWeight={590}>
            {props.foodName}
          </Typography>
          <Stack direction={"row"} spacing={1.9}>
            <Typography color={"#18BA51"} fontSize={18} fontWeight={590}>
              {Boolean(props.discount)
                ? props.price * (1 - props.discount * 0.01)
                : props.price}
            </Typography>
            <Typography
              sx={{
                textDecorationLine: "line-through",
              }}
              fontSize={18}
              fontWeight={590}
            >
              {Boolean(props.discount) && props.price}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <OrderDetail
        open={open}
        handleClose={() => {
          setOpen(false);
        }}
        foodParams={props}
      />
    </Stack>
  );
};
