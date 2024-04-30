"use client";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material/styles";

import { RouterLink } from "@/routes/components";

import Image from "./image";
import TextMaxLine from "./text-max-line";
import Carousel, {
  useCarousel,
  CarouselDots,
  CarouselArrows,
} from "./carousel";
import { paths } from "@/routes/paths";

// ----------------------------------------------------------------------

export default function MenuProducts({
  productsProps,
  displayProduct = 8,
  sx,
}) {
  const theme = useTheme();
  const products = productsProps
    ? productsProps
    : [
        {
          coverUrl: "assets/images/z_product/product_1.png",
        },
        {
          coverUrl: "assets/images/z_product/product_2.png",
        },
        {
          coverUrl: "assets/images/z_product/product_3.png",
        },
        {
          coverUrl: "assets/images/z_product/product_4.png",
        },
        {
          coverUrl: "assets/images/z_product/product_5.png",
        },
        {
          coverUrl: "assets/images/z_product/product_6.png",
        },
      ];
  const carousel = useCarousel({
    slidesToShow: displayProduct,
    slidesToScroll: displayProduct,
    ...CarouselDots({
      sx: { mt: 3 },
    }),
  });

  return (
    <>
      <h1>My carousel</h1>
      <Box sx={{ position: "relative", pt: 2, ...sx }}>
        <CarouselArrows
          filled
          onNext={carousel.onNext}
          onPrev={carousel.onPrev}
          leftButtonProps={{
            size: "small",
            sx: { top: "calc(50% - 36px)", left: -8 },
          }}
          rightButtonProps={{
            size: "small",
            sx: { top: "calc(50% - 36px)", right: -8 },
          }}
        >
          <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
            {products.map((product, index) => (
              <Link
                key={index + 1}
                component={RouterLink}
                href={paths.home.projects}
                color="inherit"
                underline="none"
                // sx={{
                //   px: 1,
                //   display: "block",
                //   transition: theme.transitions.create("all"),
                //   "&:hover": {
                //     color: "primary.main",
                //   },
                // }}
              >
                <Image
                  alt={product.coverUrl}
                  src={product.coverUrl}
                  ratio="1/1"
                  disabledEffect
                  sx={{ borderRadius: 1, mb: 1 }}
                />

                <TextMaxLine
                  variant="caption"
                  sx={{ fontWeight: "fontWeightSemiBold" }}
                >
                  name of product
                </TextMaxLine>
              </Link>
            ))}
          </Carousel>
        </CarouselArrows>
      </Box>
    </>
  );
}

MenuProducts.propTypes = {
  displayProduct: PropTypes.number,
  products: PropTypes.array,
  sx: PropTypes.object,
};
