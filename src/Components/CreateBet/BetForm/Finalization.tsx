import { Checkbox, FormControlLabel } from "@mui/material";
import React, { useState } from "react";
import { Fragment } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Finalization = () => {
	const [endingType, setEndingType] = useState(false);
	const [startDate, setStartDate] = useState(new Date());

	return (
		<Fragment>
			<h2>How the bet is ending?</h2>
			<FormControlLabel
				control={
					<Checkbox
						onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
							setEndingType(e.target.checked)
						}
					/>
				}
				label="Set ending date"
			/>
			{endingType ? (
				<DatePicker
					selected={startDate}
					onChange={(date: Date) => setStartDate(date)}
					popperPlacement="bottom"
					
				/>
			) : (
				<textarea name="" className="textarea" cols={50} rows={5}></textarea>
			)}
		</Fragment>
	);
};

export default Finalization;
