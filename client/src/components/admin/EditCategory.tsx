"use client";

import { Button, Modal, Stack, Typography } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { UpdateCategory } from "./UpdateCategory";
import { useState } from "react";
import { DeleteCategory } from "./DeleteCategory";

export const EditCategory = ({ categoryName }: { categoryName: string }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  return (
    <Stack position={"absolute"} zIndex={1} right={"-74%"} top={"-60%"}>
      <Stack
        bgcolor={"white"}
        width={"fit-content"}
        borderRadius={2}
        boxShadow={1}
      >
        <Button
          onClick={() => {
            setOpenEdit(true);
          }}
          sx={{
            padding: "12px",
            gap: "16px",
            justifyContent: "flex-start",
          }}
        >
          <EditOutlinedIcon
            sx={{
              color: "#000",
            }}
          />
          <Typography fontSize={14} color={"#000"}>
            Edit name
          </Typography>
        </Button>
        <UpdateCategory
          openEdit={openEdit}
          handleEditClose={() => setOpenEdit(false)}
          categoryName={categoryName}
        />
        <Button
          onClick={() => {
            setOpenDelete(true);
          }}
          sx={{
            padding: "12px",
            gap: "16px",
          }}
        >
          <DeleteOutlineOutlinedIcon
            sx={{
              color: "red",
            }}
          />
          <Typography color={"red"} fontSize={14}>
            Delete Category
          </Typography>
        </Button>
        <DeleteCategory
          openDelete={openDelete}
          handleDeleteCategory={() => setOpenDelete(false)}
          categoryName={categoryName}
        />
      </Stack>
    </Stack>
  );
};
