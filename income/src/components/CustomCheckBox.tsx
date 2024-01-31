import Checkbox from "@mui/material/Checkbox";
import { Stack } from "@mui/material";
import { ReactNode } from "react";

type CustomCheckBoxProps = {
  icon?: ReactNode;
  checkedIcon?: ReactNode;
};

export const CustomCheckBox = (props: CustomCheckBoxProps) => {
  const { icon = "defualtChecked", checkedIcon = "defualtChecked" } = props;

  return (
    <Stack>
      {/* <Checkbox
        icon={<CloudQueueIcon />}
        checkedIcon={
          <CloudIcon
            sx={{
              color: "black",
            }}
          />
        }
      /> */}
      <Checkbox icon={icon} checkedIcon={checkedIcon} />
    </Stack>
  );
};
