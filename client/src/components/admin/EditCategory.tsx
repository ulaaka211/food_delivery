"use client";

import { Button, Modal, Stack, Typography } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { UpdateCategory } from "./UpdateCategory";
import { Dispatch, SetStateAction, useState } from "react";
import { DeleteCategory } from "./DeleteCategory";

type editCategoryProps = {
  _id: string;
  categoryName: string;
  editCategoryId: string;
  setEditCategoryId: Dispatch<SetStateAction<string>>;
};

export const EditCategory = (props: editCategoryProps) => {
  const { _id, categoryName, editCategoryId, setEditCategoryId } = props;
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  return (
    <Stack position={"absolute"} zIndex={10} right={"-70%"} top={0}>
      <Stack
        bgcolor={"white"}
        width={"fit-content"}
        borderRadius={2}
        boxShadow={1}
      >
        <Button
          onClick={() => {
            setEditCategoryId(_id);
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
          editCategoryId={editCategoryId}
          categoryName={categoryName}
        />
        <Button
          onClick={() => {
            setEditCategoryId(_id);
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
          editCategoryId={editCategoryId}
        />
      </Stack>
    </Stack>
  );
};
