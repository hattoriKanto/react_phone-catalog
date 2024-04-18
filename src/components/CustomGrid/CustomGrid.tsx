import { Box, useMediaQuery } from "@mui/material"
import { ReactNode } from "react"
import { customBreakpoints } from "../../theme/breakpoints.config"
import { useTheme } from '@mui/material/styles';

type Props = {
  children: ReactNode
}

export const CustomGrid: React.FC<Props> = ({ children }) => {
  const { sm, md, lg } = customBreakpoints.values;
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up(lg)); // 1200px and up
  const isLaptop = useMediaQuery(theme.breakpoints.between(md, lg)); // 640px to 1199px
  const isTablet = useMediaQuery(theme.breakpoints.between(sm, md)); // 640px to 1199px
  const isMobile = useMediaQuery(theme.breakpoints.down(sm)); // up to 639p
  interface GridProps {
    gridTemplateColumns: string;
  }

  const getGridProps = (): GridProps => {
    switch (true) {
      case isDesktop:
        return {
          gridTemplateColumns: 'repeat(4, 1fr)'
        };
      case isLaptop:
        return {
          gridTemplateColumns: 'repeat(3, 1fr)'
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
