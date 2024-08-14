import { useFood } from "@/provider/FoodProvider";
import { Button, Stack } from "@mui/material";

export const FilterByDays = () => {
  const { filterByDay, filterByWeek, filterByMonts } = useFood();

  const handleDayFilter = () => {
    const today = new Date();
    const day = today.toISOString().split("T")[0];
    console.log(day);

    filterByDay(day);
  };

  const handleWeekFilter = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();

    const startOfWeek = new Date(today);
    startOfWeek.setDate(
      today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1)
    );

    const week = startOfWeek.toISOString().split("T")[0];
    console.log(week);

    filterByWeek(week);
  };

  const handleMonthFilter = () => {
    const today = new Date();
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const month = startOfMonth.toISOString().split("T")[0];
    console.log(month);

    filterByMonts(month);
  };

  return (
    <Stack direction={"row"} gap={3}>
      <Button
        onClick={handleDayFilter}
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
        onClick={handleWeekFilter}
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
        onClick={handleMonthFilter}
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
