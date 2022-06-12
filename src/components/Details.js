import React from "react";
import { data } from "./data";
import { useParams } from "react-router-dom";
import { Box, Button, styled, Typography } from "@mui/material";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import FollowTheSignsIcon from "@mui/icons-material/FollowTheSigns";
import { useState, useEffect } from "react";

const Image = styled("img")({
  width: "230px",
});

const ImageBorder = styled(Box)`
  border: 1px solid #bdc3c7;
  padding: 10px;
`;

const Container = styled(Box)`
  display: flex;
  margin: 20px 180px 145px 180px;
  padding-left: 20px;
`;
const Text = styled(Typography)`
  padding-left: 50px;
  padding-top: 10px;
`;

const SubBtn = styled(Box)`
  display: flex;
  margin-top: 200px;
  margin-left: 50px;
`;
const FollowBtn = styled(Button)`
  margin: 15px 0 0 100px;
`;

const Btn = styled(Box)`
  margin: 0px 0 0 40px;
`;

const Details = () => {
  const [countSub, setCountSub] = useState(0);
  const [countFoll, setCountFoll] = useState(0);

  useEffect(() => {});

  const productId = useParams();
  const productDetails = data.filter((x) => x.id == productId.id);
  const product = productDetails[0];
  console.log(product);

  return (
    <>
      <Container>
        <ImageBorder>
          <Box>
            <Image src={product.url} alt='img' />
            <Typography>{product.title}</Typography>
          </Box>
        </ImageBorder>
        <Box>
          <Text>{product.thumbnailUrl}</Text>

          <SubBtn>
            <Btn>
              <Typography>{countSub} Subs</Typography>
              <Button
                variant="contained"
                onClick={() => setCountSub(countSub + 1)}
              >
                <SubscriptionsIcon />
              </Button>
            </Btn>

            <FollowBtn>
              <Box style={{ marginLeft: 10 }}>
                <Typography >{countFoll} Follows</Typography>
              </Box>

              <Button
                variant="contained"
                onClick={() => setCountFoll(countFoll + 1)}
              >
                <FollowTheSignsIcon />
              </Button>
            </FollowBtn>
          </SubBtn>
        </Box>
      </Container>
    </>
  );
};

export default Details;
