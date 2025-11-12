import React, { ReactNode, FormEvent } from "react";
import {
  Box,
  Button,
  FormControl,
  FormGroup,
  FormControlProps,
} from "@mui/material";

interface FormSkeletonProps extends React.ComponentProps<"form"> {
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
  submitLabel?: string;
  formControlProps?: FormControlProps;
}

const FormSkeleton: React.FC<FormSkeletonProps> = ({
  onSubmit,
  children,
  submitLabel = "Enviar",
  formControlProps = {},
  ...props
}) => (
  <Box
    component="form"
    onSubmit={(e) => {
      e.preventDefault();
      onSubmit && onSubmit(e);
    }}
    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    maxWidth={'40%'}
    {...props}
  >
    <FormControl component="fieldset" {...formControlProps}>
      <FormGroup>{children}</FormGroup>
    </FormControl>
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      <Button type="submit" variant="contained" size="large">
        {submitLabel}
      </Button>
    </Box>
  </Box>
);

export default FormSkeleton;
