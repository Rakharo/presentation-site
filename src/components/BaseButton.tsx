import { Button } from "@mui/material";

export default function BaseButton({ onClick, children, ...props }) {
  return (
    <Button variant="contained" onClick={onClick} {...props}>
      {children}
    </Button>
  );
}