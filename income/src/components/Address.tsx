"use client";

import { Checkbox, Stack, Typography } from "@mui/material";
import { CustomInput } from ".";
import { CustomInputSelect } from ".";
import { Container } from "@mui/material";

export const Address = () => {
  return (
    <Stack width={"100vw"}>
      <Container maxWidth="xl">
        <Stack
          padding={3}
          gap={5}
          maxWidth={"432px"}
          width={"100%"}
          borderRadius={2}
          border={1}
        >
          <Stack gap={2}>
            <Typography fontSize={14} fontWeight={400}>
              Хаяг аа оруулна уу
            </Typography>
            <Stack gap={2}>
              <CustomInputSelect placeholder="Дүүрэг сонгоно уу" />
              <CustomInputSelect placeholder="Хороо сонгоно уу" />
              <CustomInputSelect placeholder="Байр, гудамж сонгоно уу" />
            </Stack>
          </Stack>
          <Stack gap={4}>
            <CustomInput
              label="Нэмэлт мэдээлэл"
              placeholder="Орц, давхар, орцны код ..."
            />
            <CustomInput
              label="Утасны дугаар*"
              placeholder="Утасны дугаараа оруулна уу"
            />
            <Stack>
              <Typography fontSize={14} fontWeight={400}>
                Төлбөр төлөх{" "}
              </Typography>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Stack direction={"row"} alignItems={"center"} gap={"10px"}>
                  <Checkbox
                    sx={{
                      "&.Mui-checked": {
                        color: "black !important",
                      },
                    }}
                  />
                  <Typography color="#8B8E95" fontSize={16} fontWeight={400}>
                    Бэлнээр
                  </Typography>
                </Stack>

                <Stack direction={"row"} alignItems={"center"} spacing={"10px"}>
                  <Checkbox
                    sx={{
                      "&.Mui-checked": {
                        color: "black !important",
                      },
                    }}
                  />
                  <Typography color="#8B8E95" fontSize={16} fontWeight={400}>
                    Картаар
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
