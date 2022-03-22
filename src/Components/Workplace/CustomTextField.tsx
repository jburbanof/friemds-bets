import React from "react";
import {
	FormControl,
	IconButton,
	Input,
	InputAdornment,
	InputLabel,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

interface propsTypes {
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	value: string;
	label: string;
}

export const CustomTextField = ({
	handleChange,
	onClick,
	value,
	label,
}: propsTypes) => {
	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault();
	};
	return (
		<FormControl
			sx={{
				m: 1,
				width: "25ch",
			}}
			variant="standard"
		>
			<InputLabel
				htmlFor="standard-adornment-password"
				sx={{
					color: "black",
					[`&.Mui-focused`]: {
						color: "black",
						fontWeight: "bold",
					},
				}}
			>
				{label}
			</InputLabel>
			<Input
				id="standard-adornment-password"
				type={"text"}
				value={value}
				onChange={handleChange}
				inputProps={{
					autocomplete: "new-password",
					form: {
						autocomplete: "off",
					},
				}}
				sx={{
					[`&::after`]: {
						borderBottomColor: "black",
					},
				}}
				endAdornment={
					<InputAdornment position="end">
						<IconButton onClick={onClick} onMouseDown={handleMouseDownPassword}>
							<AddCircleOutlineIcon sx={{ color: "black" }} />
						</IconButton>
					</InputAdornment>
				}
			/>
		</FormControl>
	);
};
