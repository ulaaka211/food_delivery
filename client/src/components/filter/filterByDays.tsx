import { Button, Stack } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";

const validationSchema = yup.object({
  date: yup.string(),
});

export const FilterByDays = () => {
  const formik = useFormik({
    initialValues: {
      date: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
  });
  return (
    <Stack direction={"row"} gap={3}>
      <Button
        variant="outlined"
        sx={{
          border: "2px solid",
          borderRadius: "8px",
          "&:hover": {
            border: "2px solid",
          },
          "&:focus": {
            boxShadow: "0 0 0 0.2rem rgba(24, 186, 81,.5)",
            borderRadius: "16px",
          },
        }}
      >
        өдөр
      </Button>
      <Button
        variant="outlined"
        sx={{
          border: "2px solid",
          borderRadius: "8px",
          "&:hover": {
            border: "2px solid",
          },
          "&:focus": {
            boxShadow: "0 0 0 0.2rem rgba(24, 186, 81,.5)",
            borderRadius: "16px",
          },
        }}
      >
        7 хоног
      </Button>
      <Button
        variant="outlined"
        sx={{
          border: "2px solid",
          borderRadius: "8px",
          "&:hover": {
            border: "2px solid",
          },
          "&:focus": {
            boxShadow: "0 0 0 0.2rem rgba(24, 186, 81,.5)",
            borderRadius: "16px",
          },
        }}
      >
        Сар
      </Button>
    </Stack>
  );
};
