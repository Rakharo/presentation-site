// MessageForm.tsx
import React, { useState, FormEvent } from "react";
import { TextField, FormHelperText, FormLabel, Grid, InputAdornment } from "@mui/material";
import { z } from "zod";
import FormSkeleton from "../BaseForm";
import { formatPhone } from "@/utils/formatter";
import { Email, Person, Phone } from "@mui/icons-material";

// Schema Zod
const messageSchema = z.object({
  email: z.string().min(1, "E-mail é obrigatório"),
  message: z.string().min(1, "Mensagem é obrigatória"),
  name: z.string().min(1, "Nome é obrigatório"),
  phone: z.string().optional(),
});

type MessageFormData = z.infer<typeof messageSchema>;

interface MessageFormProps {
  onSend: (data: MessageFormData) => void;
  submitLabel?: string;
}

const MessageForm: React.FC<MessageFormProps> = ({
  onSend,
  submitLabel = "Enviar mensagem",
}) => {
  const [form, setForm] = useState<MessageFormData>({
    email: "",
    message: "",
    name: "",
    phone: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof MessageFormData, string>>
  >({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let newValue = value;

    // Aplica a máscara apenas no campo phone
    if (name === "phone") {
      newValue = formatPhone(value);
    }

    setForm((prev) => ({
      ...prev,
      [name]: newValue,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = messageSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof MessageFormData, string>> = {};
      result.error.errors.forEach((err: any) => {
        const field = err.path[0] as keyof MessageFormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    onSend(form);
    setForm({ email: "", message: "", name: "", phone: "" });
  };

  return (
    <FormSkeleton onSubmit={handleSubmit} submitLabel={submitLabel}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 4 }}>
          <TextField
            label="Nome"
            name="name"
            placeholder="Digite seu nome"
            fullWidth
            required
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Person />
                  </InputAdornment>
                ),
              },
            }}
            value={form.name}
            onChange={handleChange}
            error={!!errors.name}
          />
          <FormHelperText error={!!errors.name}>
            {errors.name}
          </FormHelperText>
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <TextField
            label="E-mail"
            name="email"
            placeholder="Digite seu e-mail"
            fullWidth
            required
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              },
            }}
            value={form.email}
            onChange={handleChange}
            error={!!errors.email}
          />
          <FormHelperText error={!!errors.email}>
            {errors.email}
          </FormHelperText>
        </Grid>

        <Grid size={{ xs: 12, sm: 4 }}>
          <TextField
            label="Telefone"
            name="phone"
            placeholder="Digite seu telefone"
            fullWidth
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Phone />
                  </InputAdornment>
                ),
              },
            }}
            value={form.phone}
            onChange={handleChange}
            error={!!errors.phone}
          />
          <FormHelperText error={!!errors.phone}>{errors.phone}</FormHelperText>
        </Grid>

        <Grid size={12}>
          <TextField
            label="Mensagem"
            name="message"
            placeholder="Escreva sua mensagem aqui!"
            fullWidth
            required
            value={form.message}
            onChange={handleChange}
            error={!!errors.message}
            multiline
            minRows={4}
          />
          <FormHelperText error={!!errors.message}>
            {errors.message}
          </FormHelperText>
        </Grid>
      </Grid>
    </FormSkeleton>
  );
};

export default MessageForm;
