import { Stack, Typography } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export const EditCategory = () => {
  return (
    <Stack>
      <Stack p={1.5} gap={2} direction={"row"}>
        <EditOutlinedIcon
          sx={{
            bgcolor: "#fff",
          }}
        />
        <Typography fontSize={14}>Edit name</Typography>
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
  );
};
