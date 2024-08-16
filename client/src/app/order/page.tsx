"use client";

import {
  Completed,
  CustomInput,
  CustomInputSelect,
  InProgress,
} from "@/components";
import { useFood } from "@/provider/FoodProvider";

import { useFormik } from "formik";
import * as yup from "yup";
import {
  Backdrop,
  Button,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/provider/AuthenticationProvider";

const districts = [
  "Баянзүрх дүүрэг",
  "Баянгол дүүрэг",
  "Чингэлтэй дүүрэг",
  "Сүхбаатар дүүрэг",
  "Хан-Уул дүүрэг",
  "Сонгинохайрхан дүүрэг",
];

const khoroos = [
  "1-р хороо",
  "2-р хороо",
  "3-р хороо",
  "4-р хороо",
  "5-р хороо",
  "6-р хороо",
  "7-р хороо",
];
const bairs = [
  "Нархан хотхон",
  "26-р байр",
  "Хоймор хотхон",
  "45-р байр",
  "Зайсан хотхон",
];

const numberFormatter = new Intl.NumberFormat("en-US", {
  style: "decimal",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const validationSchema = yup.object({
  district: yup.string().required("Дүүрэг оруулах шаардлагатай"),
  khoroo: yup.string().required("Хороо оруулах шаардлагатай"),
  bair: yup.string().required("Байр оруулах шаардлагатай"),
  additional: yup.string(),
  phone: yup
    .string()
    .matches(/^\d{8}$/, "Утасны дугаар нь яг 8 оронтой байх ёстой")
    .required("Утасны дугаар оруулах шаардлагатай"),
});

export default function Order() {
  const { createOrder, basket, setBasket } = useFood();
  const { isLoggedIn, refresh } = useAuth();
  const [checkBox, setCheckBox] = useState(false);
  const router = useRouter();
  const [orderLoading, setOrderLoading] = useState(true);
  const [index, setIndex] = useState(1);

  const tatolPrice = basket.reduce((sum, currentValue) => {
    return (
      sum +
      currentValue.price *
        currentValue.foodCount *
        (1 - 0.01 * (currentValue.discount || 0))
    );
  }, 0);

  const formik = useFormik({
    initialValues: {
      district: "",
      khoroo: "",
      bair: "",
      additional: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await setIndex(index + 1);
      createOrder(
        {
          district: values.district,
          khoroo: values.khoroo,
          bair: values.bair,
          additional: values.additional,
          phone: values.phone,
          paymentMethod: !checkBox ? "Бэлнээр" : "Картаар",
        },
        basket
      );
      formik.resetForm();
      setBasket([]);
    },
  });

  const isValid =
    Boolean(formik.values.khoroo) &&
    Boolean(formik.values.bair) &&
    Boolean(formik.values.district) &&
    Boolean(formik.values.phone);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOrderLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [index]);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/");
    }
  }, [refresh]);

  return (
    <Stack width={"100vw"} height={"100vh"}>
      <Container maxWidth="xl">
        {orderLoading ? (
          <Backdrop
            open={orderLoading}
            sx={{
              bgcolor: "white",
              zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
          >
            <CircularProgress
              sx={{
                color: "primary.main",
              }}
            />
          </Backdrop>
        ) : (
          <Stack
            height={"100%"}
            width={"100%"}
            direction={"row"}
            justifyContent={"space-around"}
            alignItems={"center"}
            paddingTop={"1%"}
          >
            <Stack
              minHeight={"592px"}
              height={"100%"}
              maxWidth={"432px"}
              width={"100%"}
              gap={"25px"}
            >
              {isValid ? (
                <Completed
                  step="Алхам 1"
                  addressInfo="Хаягийн мэдээлэл оруулах"
                  status="Болсон"
                />
              ) : (
                <InProgress
                  step="Алхам 1"
                  addressInfo="Хаягийн мэдээлэл оруулах"
                  status="Хүлээгдэж байна"
                />
              )}

              <Stack
                padding={3}
                gap={5}
                maxWidth={"432px"}
                width={"100%"}
                borderRadius={2}
                boxShadow={3}
              >
                <Stack gap={2}>
                  <Typography fontSize={18} fontWeight={400}>
                    Хаяг аа оруулна уу
                  </Typography>
                  <Stack gap={2}>
                    <CustomInputSelect
                      name="district"
                      label="Дүүрэг"
                      defaultValue="Дүүрэг сонгоно уу"
                      option={districts}
                      value={formik.values.district}
                      error={
                        formik.touched.district &&
                        Boolean(formik.errors.district)
                      }
                      helperText={
                        formik.touched.district && formik.errors.district
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <CustomInputSelect
                      name="khoroo"
                      label="Хороо"
                      defaultValue="Дүүрэг сонгоно уу"
                      option={khoroos}
                      value={formik.values.khoroo}
                      error={
                        formik.touched.khoroo && Boolean(formik.errors.khoroo)
                      }
                      helperText={formik.touched.khoroo && formik.errors.khoroo}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <CustomInputSelect
                      name="bair"
                      label="Байр"
                      defaultValue="Дүүрэг сонгоно уу"
                      option={bairs}
                      value={formik.values.bair}
                      error={formik.touched.bair && Boolean(formik.errors.bair)}
                      helperText={formik.touched.bair && formik.errors.bair}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </Stack>
                </Stack>
                <Stack gap={4}>
                  <CustomInput
                    name="additional"
                    label="Нэмэлт мэдээлэл"
                    placeholder="Орц, давхар, орцны код ..."
                    onChange={formik.handleChange}
                    value={formik.values.additional}
                    error={
                      formik.touched.additional &&
                      Boolean(formik.errors.additional)
                    }
                    helperText={
                      formik.touched.additional && formik.errors.additional
                    }
                    onBlur={formik.handleBlur}
                  />
                  <CustomInput
                    name="phone"
                    label="Утасны дугаар*"
                    placeholder="Утасны дугаараа оруулна уу"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                  />
                  <Stack>
                    <Typography fontSize={14} fontWeight={400}>
                      Төлбөр төлөх
                    </Typography>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        gap={"10px"}
                      >
                        <Stack
                          onClick={() => {
                            setCheckBox(false);
                          }}
                        >
                          {checkBox ? (
                            <CheckBoxOutlineBlankIcon />
                          ) : (
                            <CheckBoxIcon />
                          )}
                        </Stack>
                        <Typography
                          color="#8B8E95"
                          fontSize={16}
                          fontWeight={400}
                        >
                          Бэлнээр
                        </Typography>
                      </Stack>

                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={"10px"}
                      >
                        <Stack
                          onClick={() => {
                            setCheckBox(true);
                          }}
                        >
                          {!checkBox ? (
                            <CheckBoxOutlineBlankIcon />
                          ) : (
                            <CheckBoxIcon />
                          )}
                        </Stack>
                        <Typography
                          color="#8B8E95"
                          fontSize={16}
                          fontWeight={400}
                        >
                          Картаар
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack
              minHeight={"600px"}
              height={"100%"}
              maxWidth={"432px"}
              width={"100%"}
              gap={"25px"}
            >
              {basket.length > 0 ? (
                <Completed
                  step="Алхам 2"
                  addressInfo="Хоолны мэдээлэл оруулах"
                  status="Болсон"
                />
              ) : (
                <InProgress
                  step="Алхам 2"
                  addressInfo="Хоолны мэдээлэл оруулах"
                  status="Хүлээгдэж байна"
                />
              )}

              <Stack
                maxWidth={"432px"}
                minHeight={"592px"}
                boxShadow={3}
                padding={3}
                borderRadius={2}
                height={"100%"}
                width={"100%"}
                justifyContent={"space-between"}
              >
                <Stack overflow={"scroll"} maxHeight={"550px"}>
                  {Boolean(basket) &&
                    basket.map((item, index) => (
                      <Stack borderBottom={1} key={index}>
                        <Stack
                          paddingY={1}
                          gap={2}
                          height={"100%"}
                          width={"100%"}
                          direction={"row"}
                          alignItems={"center"}
                        >
                          <Stack
                            position="relative"
                            borderRadius={2}
                            overflow={"hidden"}
                            width={"100%"}
                            height={"100%"}
                          >
                            <Image
                              src={item.foodImg}
                              alt=""
                              fill
                              objectFit="cover"
                            />
                          </Stack>
                          <Stack width={"50%"}>
                            <Stack
                              direction={"row"}
                              width={"100%"}
                              justifyContent={"space-between"}
                            >
                              <Stack>
                                <Typography fontSize={18} fontWeight={600}>
                                  {item.foodName}
                                </Typography>
                                <Stack gap={1} direction={"row"}>
                                  <Typography
                                    color={"primary.main"}
                                    fontSize={18}
                                    fontWeight={600}
                                  >
                                    {Boolean(item.discount)
                                      ? numberFormatter.format(
                                          item.price *
                                            (1 - item.discount * 0.01)
                                        ) + "₮"
                                      : numberFormatter.format(item.price) +
                                        "₮"}
                                  </Typography>
                                  <Typography
                                    color={"common.black"}
                                    fontSize={18}
                                    fontWeight={600}
                                    sx={{
                                      textDecorationLine: "line-through",
                                    }}
                                  >
                                    {Boolean(item.discount) &&
                                      numberFormatter.format(item.price) + "₮"}
                                  </Typography>
                                </Stack>
                              </Stack>
                              <Stack
                                onClick={() => {
                                  const newBasket = basket.filter(
                                    (element) => element.foodId !== item.foodId
                                  );
                                  setBasket(newBasket);
                                }}
                              >
                                <CloseOutlinedIcon />
                              </Stack>
                            </Stack>
                            <Typography
                              padding={1}
                              color={"#767676"}
                              noWrap
                              maxWidth={500}
                              textOverflow={"ellipsis"}
                              sx={{
                                lineClamp: "1",
                              }}
                            >
                              {item.ingredients}
                            </Typography>
                            <Stack
                              spacing={2.5}
                              direction={"row"}
                              justifyContent={"start"}
                              alignItems={"center"}
                            >
                              <Stack
                                width={"45px"}
                                height={"40px"}
                                borderRadius={"10px"}
                                bgcolor={"#18BA51"}
                                color={"#fff"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                onClick={() => {
                                  setBasket((prev) => {
                                    const clone = [...prev];
                                    return clone.map((element) => {
                                      if (element.foodId === item.foodId) {
                                        if (element.foodCount > 1) {
                                          element.foodCount--;
                                        }
                                      }
                                      return element;
                                    });
                                  });
                                }}
                              >
                                <RemoveOutlinedIcon />
                              </Stack>
                              <Stack paddingX={"30px"} paddingY={1}>
                                <Typography fontSize={24} fontWeight={500}>
                                  {item.foodCount}
                                </Typography>
                              </Stack>
                              <Stack
                                width={"45px"}
                                height={"40px"}
                                borderRadius={"10px"}
                                bgcolor={"#18BA51"}
                                color={"#fff"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                onClick={() => {
                                  setBasket((prev) => {
                                    const clone = [...prev];
                                    return clone.map((element) => {
                                      if (element.foodId === item.foodId)
                                        return {
                                          ...element,
                                          foodCount: element.foodCount + 1,
                                        };
                                      return element;
                                    });
                                  });
                                }}
                              >
                                <AddOutlinedIcon />
                              </Stack>
                            </Stack>
                          </Stack>
                        </Stack>
                      </Stack>
                    ))}
                </Stack>
                <Stack gap={5}>
                  <Stack direction={"row"} alignItems={"center"}>
                    <Stack width={"50%"}>
                      <Typography
                        color={"#5E6166"}
                        fontSize={18}
                        fontWeight={400}
                      >
                        Нийт төлөх дүн
                      </Typography>
                      <Typography
                        color={"#121316"}
                        fontSize={18}
                        fontWeight={700}
                      >
                        {numberFormatter.format(tatolPrice)}
                      </Typography>
                    </Stack>

                    <Button
                      onClick={() => {
                        if (basket.length === 0) {
                          alert("Сагс хоосон байна");
                        } else {
                          formik.handleSubmit();
                          router.push("/order-history");
                        }
                      }}
                      disabled={!isValid}
                      variant="contained"
                      disableElevation
                      sx={{
                        py: "14.5px",
                        bgcolor: "#18BA51",
                        width: "50%",
                      }}
                    >
                      Захиалах
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        )}
      </Container>
    </Stack>
  );
}
