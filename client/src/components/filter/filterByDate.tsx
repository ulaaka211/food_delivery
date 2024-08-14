import { Button, Stack } from "@mui/material";
import { DateInput } from "../custom components/DateInput";
import * as yup from "yup";
import { useFormik } from "formik";
import { useFood } from "@/provider/FoodProvider";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const validationSchema = yup.object({
  startDate: yup.string(),
  endDate: yup.string(),
});

export const FilterByDate = () => {
  const { filterByDate } = useFood();
  const searchParams = useSearchParams();

  useEffect(() => {
    const startDate = searchParams.get("startDate");
    const endDate = searchParams.get("endDate");

    if (startDate && endDate) {
      formik.setValues({ startDate, endDate });
      filterByDate(startDate, endDate);
    }
  }, [searchParams]);

  const updateUrlParams = (startDate: string, endDate: string) => {
    const params = new URLSearchParams();
    if (startDate) params.set("startDate", startDate);
    if (endDate) params.set("endDate", endDate);

    window.history.replaceState(null, "", `?${params.toString()}`);
  };

  const formik = useFormik({
    initialValues: {
      startDate: "",
      endDate: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      filterByDate(values.startDate, values.endDate);
      console.log(values.startDate, values.endDate);

      updateUrlParams(values.startDate, values.endDate);
    },
  });

  return (
    <Stack direction={"row"} gap={2}>
      <DateInput
        type="date"
        name="startDate"
        onChange={formik.handleChange}
        value={formik.values.startDate}
      />
      <DateInput
        type="date"
        name="endDate"
        onChange={formik.handleChange}
        value={formik.values.endDate}
      />
      <Button
        variant="outlined"
        sx={{
          border: "2px solid",
          "&:hover": {
            border: "2px solid",
          },
        }}
        onClick={() => {
          formik.handleSubmit();
        }}
      >
        хайх
      </Button>
    </Stack>
  );
};
