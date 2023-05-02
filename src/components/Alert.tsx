import { FC } from "react";

interface Props {
  children?: React.ReactNode;
  alert: {
    message: string;
    hasError: boolean;
  };
}

export const Alert: FC<Props> = ({ alert }) => {
  return <div className="alert alert-danger">{alert.message}</div>;
};
