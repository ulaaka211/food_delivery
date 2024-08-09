"use client";

import { Stack, Typography } from "@mui/material";
import { Modal } from "@mui/material";
import { useFood } from "../../provider/FoodProvider";

type SignOutProps = {
  openDelete: boolean;
  handleDeleteCategory: () => void;
  categoryName: string;
};

export const DeleteCategory = ({
  openDelete,
  handleDeleteCategory,
  categoryName,
}: SignOutProps) => {
  const { deleteCategory } = useFood();

  return (
    <Modal
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      open={openDelete}
      onClose={() => {
        handleDeleteCategory();
      }}
    >
      <Stack bgcolor={"#fff"} borderRadius={4}>
        <Typography
          p={5}
          color={"#171717"}
          fontSize={20}
          fontWeight={600}
          textAlign={"center"}
        >
          Устгахдаа итгэлтэй байна уу?
        </Typography>
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          gap={0.2}
          overflow={"hidden"}
        >
          <Typography
            onClick={() => {
              deleteCategory(categoryName);
            }}
            width={0.5}
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
              handleDeleteCategory();
            }}
            width={0.5}
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
