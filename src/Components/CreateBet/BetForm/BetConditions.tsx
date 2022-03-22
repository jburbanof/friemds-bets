import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Fragment } from "react";

interface propsTypes {
	persons: string[];
}

const BetConditions = ({ persons }: propsTypes) => {
	const [personConditions, setPersonConditions] = useState(false);

	return (
		<Fragment>
			<h2>Set bet conditions</h2>
			<FormControlLabel
				control={
					<Checkbox
						onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
							setPersonConditions(e.target.checked)
						}
					/>
				}
				label="Set conditions per person"
			/>
			<div className="conditions">
				{personConditions ? (
					persons.map((person) => {
						return (
							<div className="personCondition">
								<h4>{person} condition</h4>
								<textarea name="" className="textarea" cols={50} rows={4}></textarea>
							</div>
						);
					})
				) : (
					<textarea name="" className="textarea" cols={50} rows={5}></textarea>
				)}
			</div>
		</Fragment>
	);
};

export default BetConditions;
