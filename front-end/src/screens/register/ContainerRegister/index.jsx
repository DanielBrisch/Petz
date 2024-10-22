import {
  Box,
  Typography,
  TextField,
  MenuItem,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Checkbox,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import InputLabel from "../inputLabel";
import colors from "../../../theme/colors";
import axios from "axios";

export default function ContainerRegister() {
  const genres = [
    { value: "Masculino", label: "Masculino" },
    { value: "Feminino", label: "Feminino" },
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sex, setSex] = useState("");
  const [birth, setBirth] = useState("");
  const [CPF, setCPF] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const label = { inputProps: { "aria-label": "Checkbox" } };

  const onClickRegister = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3000/user/cadastrar`,
        {
          nome: name,
          email: email,
          telefone: phone,
          sexo: sex,
          data_nascimento: birth,
          cpf: CPF,
          senha: password,
        }
      );
      if (response["status"] == 200) {
        console.log("teste");
      } else {
        throw new Error("Bad Request, status code:", response["status"]);
      }
    } catch (error) {
      console.log(error);
      setError(error["message"]);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: colors.cardBackground,
        width: "25%",
        height: "90%",
        p: "2em",
        borderRadius: "8px",
        boxShadow: 3,
      }}
    >
      <Typography
        sx={{
          fontSize: "1.5rem",
          fontWeight: "700",
          color: colors.textPrimary,
        }}
      >
        Crie sua conta
      </Typography>
      <Box sx={{ p: "1.5em", pb: 0, pt: 0, display: "grid", gap: "1rem" }}>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          sx={{ borderBottom: `1.5px solid ${colors.gray}`, pb: "1em" }}
        >
          <FormControlLabel
            value="Fisica"
            control={<Radio />}
            label="Pessoa Física"
          />
          <FormControlLabel
            value="Juridica"
            control={<Radio />}
            label="Pessoa Jurídica"
          />
        </RadioGroup>
        <InputLabel
          label={"Nome e sobrenome"}
          placeholder={"Digite seu nome"}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <InputLabel
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          label={"E-mail"}
          placeholder={"Digite seu e-mail"}
        />
        <InputLabel
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          label={"Celular"}
          placeholder={"Digite seu celular"}
        />
        <Box>
          <Typography sx={{ color: colors.textPrimary }}>Sexo</Typography>
          <TextField
            onChange={(event) => setSex(event.target.value)}
            value={sex}
            fullWidth
            select
            variant="outlined"
          >
            {genres.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <InputLabel
          value={birth}
          onChange={(event) => setBirth(event.target.value)}
          label={"Data de nascimento"}
          placeholder={"Digite sua data de nascimento"}
        />
        <InputLabel label={"CPF"} placeholder={"Digite seu CPF"} />
        <Box sx={{ display: "flex" }}>
          <PasswordInput
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            label={"Senha"}
            showPassword={showPassword}
            handleClickShowPassword={handleClickShowPassword}
          />
          <div style={{ width: "1.5em" }}></div>
          <PasswordInput
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            label={"Confirmar senha"}
            showPassword={showConfirmPassword}
            handleClickShowPassword={handleClickShowConfirmPassword}
          />
        </Box>
        <PasswordRequirements />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Checkbox {...label} defaultChecked />
          <Typography>
            Concordo com os <a href="#">termos e condições</a>
          </Typography>
        </Box>
        <Button
          variant="contained"
          fullWidth
          onClick={onClickRegister}
          sx={{ backgroundColor: colors.primary, height: "3em" }}
        >
          Cadastrar
        </Button>
      </Box>
    </Box>
  );
}

function PasswordInput({ label, showPassword, handleClickShowPassword }) {
  return (
    <Box>
      <Typography sx={{ color: colors.textPrimary }}>{label}</Typography>
      <OutlinedInput
        fullWidth
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={handleClickShowPassword} edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </Box>
  );
}

function PasswordRequirements() {
  return (
    <Box sx={{ mt: 2 }}>
      <Typography sx={{ fontSize: "1rem", color: colors.textSecondary }}>
        A senha deve atender aos seguintes requisitos:
      </Typography>
      <Box sx={{ display: "flex", gap: 4, mt: 1 }}>
        <Box>
          <Typography>• Mínimo 8 caracteres</Typography>
          <Typography>• Letra maiúscula</Typography>
        </Box>
        <Box>
          <Typography>• Letra minúscula</Typography>
          <Typography>• Números</Typography>
        </Box>
      </Box>
    </Box>
  );
}
