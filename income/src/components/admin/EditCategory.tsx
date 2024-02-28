import { Modal, Stack, Typography } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export const EditCategory = () => {
  return (
    <Stack position={"absolute"} zIndex={1} right={"-51%"} top={"-60%"}>
      <Stack
        width={"screen"}
        height={"screen"}
        position={"fixed"}
        bgcolor={"#00000080"}
      ></Stack>
      <Stack
        bgcolor={"white"}
        width={"fit-content"}
        borderRadius={2}
        boxShadow={1}
      >
        <Stack p={1.5} gap={2} direction={"row"}>
          <EditOutlinedIcon
            sx={{
              color: "#000",
            }}
          />
          <Typography fontSize={14} color={"#000"}>
            Edit name
          </Typography>
        </Stack>
        <Stack p={1.5} gap={2} direction={"row"}>
          <DeleteOutlineOutlinedIcon
            sx={{
              color: "red",
            }}
          />
          <Typography color={"red"} fontSize={14}>
            Delete Category
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
