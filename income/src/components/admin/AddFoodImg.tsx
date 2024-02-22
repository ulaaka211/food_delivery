"use client";

import { Button, Container, Stack, TextField, Modal } from "@mui/material";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { useAuth } from "../provider/AuthenticationProvider";

type AddFoodImgProps = {
  imageUrl: string;
  setImageUrl: Dispatch<SetStateAction<string>>;

  open: boolean;
  handleClose: () => void;
};

export const AddFoodImg = (props: AddFoodImgProps) => {
  const { open, handleClose, imageUrl, setImageUrl } = props;
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setSelectedFile(event.target.files[0]);
  };

  const handleImageUpload = async () => {
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("file", selectedFile);
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/daeadzt2k/upload?upload_preset=g8m2bqqj",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        console.log(data);
        setImageUrl(data.secure_url);
      } catch (error) {
        console.error("Image upload error:", error);
      }
    }
  };
  return (
    <Modal
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={open}
      onClose={() => {
        handleClose();
      }}
    >
      <Stack bgcolor={"#fff"}>
        <Container>
          <Stack py={8} alignItems="center">
            <Stack gap={3} width={400}>
              <TextField
                type="file"
                onChange={handleImageChange}
                variant="outlined"
              />
              <Button onClick={handleImageUpload} variant="contained">
                Upload
              </Button>
              {imageUrl && (
                <Stack width="100%" position="relative">
                  <img
                    src={imageUrl}
                    alt="Uploaded"
                    width={"100%"}
                    height={"100%"}
                  />
                </Stack>
              )}
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </Modal>
  );
};
