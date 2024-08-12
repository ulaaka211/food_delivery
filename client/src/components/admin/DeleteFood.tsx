"use client";

import { Stack, Typography } from "@mui/material";
import { Modal } from "@mui/material";
import { useFood } from "../../provider/FoodProvider";

type SignOutProps = {
  dltFood: boolean;
  handleDeleteFood: () => void;
  editFoodId: string;
};

export const DeleteFood = ({
  dltFood,
  editFoodId,
  handleDeleteFood,
}: SignOutProps) => {
  const { deleteFood } = useFood();

  return (
    <Modal
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      open={dltFood}
      onClose={() => {
        handleDeleteFood();
      }}
    >
      <Stack bgcolor={"#fff"} borderRadius={4}>
        <Typography
          p={5}
          color={"#171717"}
          fontSize={20}
          fontWeight={600}
          width={1}
          textAlign={"center"}
        >
          Устгахдаа итгэлтэй байна уу?
        </Typography>
        <Stack flexDirection={"row"} gap={0.3} overflow={"hidden"}>
          <Typography
            onClick={() => {
              deleteFood(editFoodId);
            }}
            width={0.6}
            bgcolor={"#18BA5133"}
            textAlign={"center"}
            fontSize={20}
            fontWeight={600}
            padding={"20px"}
            sx={{
              "&:hover": {
                backgroundColor: "#18BA51",
                color: "common.white",
              },
              borderBottomLeftRadius: "16px",
            }}
          >
            Тийм
          </Typography>

          <Typography
            onClick={() => {
              handleDeleteFood();
            }}
            width={0.6}
            bgcolor={"#18BA5133"}
            textAlign={"center"}
            fontSize={20}
            fontWeight={600}
            padding={"20px"}
            sx={{
              "&:hover": {
                backgroundColor: "#18BA51",
                color: "common.white",
              },
              borderBottomRightRadius: "16px",
            }}
          >
            Үгүй
          </Typography>
        </Stack>
      </Stack>
    </Modal>
  );
};
