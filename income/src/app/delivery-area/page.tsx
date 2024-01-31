"use client";

import { Container, Divider, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import { useState } from "react";

export default function delivery() {
  const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey="AIzaSyBAdenS5wzqAaY7Tnxlig46zOi01XCI4cE">
      <Stack paddingBottom={4} paddingTop={14}>
        <Container maxWidth="xl">
          <Stack height={"100vh"} spacing={6}>
            <Stack height={"80vh"}>
              <Map
                zoom={9}
                center={{
                  lat: 47.9221,
                  lng: 106.9155,
                }}
              >
                <AdvancedMarker
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  {open && (
                    <InfoWindow>
                      <Typography fontSize={14} fontWeight={400}>
                        Zailuu hu
                      </Typography>{" "}
                    </InfoWindow>
                  )}
                  <Pin background={"primary.main"} glyphColor={"grey"} />
                </AdvancedMarker>
              </Map>
              {/* <GoogleMapsEmbed
                apiKey="AIzaSyBAdenS5wzqAaY7Tnxlig46zOi01XCI4cE"
                height={"80vh"}
                width={"100%"}
                mode="place"
                q="Brooklyn+Bridge,New+York,NY"
              ></GoogleMapsEmbed> */}
            </Stack>

            <Stack width={"100%"}>
              <Stack spacing={1} direction={"row"} alignItems={"center"}>
                <Image src="/Star 1.svg" alt="" width={32} height={32} />
                <Typography fontSize={22} fontWeight={700}>
                  Хүргэлтийн бүс дэх хаягууд
                </Typography>
              </Stack>
              <Stack spacing={3} direction={"row"} width={"100%"}>
                <Stack padding={3} width={"50%"}>
                  <Typography paddingY={2} fontSize={20} fontWeight={590}>
                    А бүс
                  </Typography>
                  <Divider
                    sx={{
                      borderColor: "primary.main",
                      marginBottom: "16px",
                    }}
                  />
                  <Grid container spacing={2} width={"50%"}>
                    {new Array(12).fill(0).map((_, index) => (
                      <Grid key={index} item xs={6} spacing={2}>
                        <Typography fontSize={16} fontWeight={400}>
                          Нархан хотхон
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Stack>

                <Stack padding={3} width={"50%"}>
                  <Typography paddingY={2} fontSize={20} fontWeight={590}>
                    Б бүс
                  </Typography>
                  <Divider
                    sx={{
                      borderColor: "primary.main",
                      marginBottom: "16px",
                    }}
                  />
                  <Grid container spacing={2} width={"50%"}>
                    {new Array(12).fill(0).map((_, index) => (
                      <Grid key={index} item xs={6}>
                        <Typography fontSize={16} fontWeight={400}>
                          26-р байр
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </APIProvider>
  );
}
