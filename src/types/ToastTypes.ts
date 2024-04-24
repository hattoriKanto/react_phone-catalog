import { TransitionProps } from '@mui/material/transitions';

export type Transition = React.ComponentType<
  TransitionProps & {
    children: React.ReactElement<
      React.ReactNode,
      string | React.JSXElementConstructor<React.ReactNode>
    >;
  }
>;

export type isToastOpen = {
  open: boolean;
  Transition: Transition;
  message: string;
  status: 'warning' | 'success' | null;
};
