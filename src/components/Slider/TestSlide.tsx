import React, { FC } from 'react';
import { Test } from './Slider.styles.tsx';

type Props = {
  children?: React.ReactNode
  backgroundTablet: string
  backgroundMobile: string
}

const TestSlide: FC<Props> = ({ children, backgroundTablet, backgroundMobile }) =>{
  return(
    <Test backgroundTablet={backgroundTablet} backgroundMobile={backgroundMobile}>
      {children}
    </Test>
  )
}

export default TestSlide
