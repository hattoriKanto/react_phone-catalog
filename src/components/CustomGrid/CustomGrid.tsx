import { Box, Container, useMediaQuery } from "@mui/material"
import { ReactNode } from "react"
import theme from "../../pages/themes"

type Props = {
  children: ReactNode
}

export const CustomGrid: React.FC<Props> = ({ children }) => {
  const { sm, lg } = theme.breakpoints.values;

  const isDesktop = useMediaQuery(theme.breakpoints.up(lg)); // 1200px and up
  const isTablet = useMediaQuery(theme.breakpoints.between(sm, lg)); // 640px to 1199px
  const isMobile = useMediaQuery(theme.breakpoints.down(sm)); // up to 639px

  interface GridProps {
    gridTemplateColumns: string;
  }

  const getGridProps = (): GridProps => {
    switch (true) {
      case isDesktop:
        return {
          gridTemplateColumns: 'repeat(4, 1fr)'
        };
      case isTablet:
        return {
          gridTemplateColumns: 'repeat(2, 1fr)'
        };
      case isMobile:
        return {
          gridTemplateColumns: "1fr"
        };
      default:
        return {
          gridTemplateColumns: 'repeat(4, 1fr)'
        };
    }
  };

  return (
    <Box sx={{
      width: 0,
      margin: '0 auto',
      display: "grid",
      justifyContent: "center",
      placeItems: 'center',
      columnGap: "16px",
      rowGap: '40px',
    }} {...getGridProps()}>
      {children}
    </Box>
  )
}
