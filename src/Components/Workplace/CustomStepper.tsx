import { Step, StepLabel, Stepper, styled } from "@mui/material";
import React from "react";

export const StyledStepper = styled(Stepper)({
	/* "& div": {
		"& div": {
			boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.82",
		},
	}, */
	root: {
		width: "min-content",
		padding: "5px 15px 15px",
		margin: "0 auto",
		backgroundColor: "transparent",
	},
	alternativeLabel: {
		padding: "5px 0 15px",
		margin: 0,
	},
});

export const StyledStep = styled(Step)({
	root: {
		padding: 0,
	},
	alternativeLabel: {
		width: 140,
	},
});

export const StyledStepLabel = styled(StepLabel)({
	"& span": {
		padding: 0,
	},
	completed: {
		color: "black",
	},
	active: { color: "blue" },
	iconContainer: {
		padding: 0,
	},
	alternativeLabel: {
		padding: 0,
		fontSize: 10,
		"& .MuiStepLabel-labelContainer": {
			marginTop: -8,
		},
	},
});

export const StyledStepConnector = () => {
	return (
		<div
			style={{
				width: 50,
				height: 2,
				backgroundColor: "black",
			}}
		/>
	);
};
/* styled(StepConnector)({
	active: {
		"& .css-z7uhs0-MuiStepConnector-line": {
			borderColor: "black",
		},
	},
	completed: {
		"& .css-z7uhs0-MuiStepConnector-line": {
			borderColor: "black",
		},
	},
	line: {
		borderColor: "black",
		borderTopWidth: 2,
		borderRadius: 1,
		width: 40,
	},
	alternativeLabel: {
		top: 9,
		left: "calc(-50% + 12px)",
		right: "calc(50% + 13px)",
		"& .MuiStepConnector-line": {
			width: "unset",
			borderTopWidth: 7,
			borderRadius: 1,
			boxShadow: "inset 0 3px 3px rgba(0,0,0,0.05)",
		},
	},
}); */
export const StepIcon = (props: {
	active: boolean;
	completed: boolean;
	icon: any;
}) => {
	const { active, completed, icon } = props;

	return (
		<div
			style={
				active || completed
					? {
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							width: 25,
							height: 25,
							borderRadius: "50%",
							color: "#F0B531",
							backgroundColor: "black",
					  }
					: {
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							width: 25,
							height: 25,
							borderRadius: "50%",
							color: "black",
							backgroundColor: "transparent",
							boxShadow: "inset 0px 0px 0px 1px black",
					  }
			}
		>
			<h4>{icon}</h4>
		</div>
	);
};
