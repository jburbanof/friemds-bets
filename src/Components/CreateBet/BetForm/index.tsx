import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import {
	CustomTextField,
	StepIcon,
	StyledStep,
	StyledStepConnector,
	StyledStepLabel,
	StyledStepper,
} from "../../Workplace";
import BetConditions from "./BetConditions";
import "./BetForm.scss";
import Finalization from "./Finalization";
import { useNavigate } from "react-router-dom";
import Prizes from "./Prizes";

interface PersonsTypes {
	current: string;
	group: string[];
}

const BetForm = () => {
	const steps = [1, 2, 3, 4];
	const navigate = useNavigate();
	const [currentStep, setCurrentStep] = useState(0);
	const [persons, setPersons] = useState<PersonsTypes>({
		current: "",
		group: [],
	});
	const deletePerson = (person: string) => {
		setPersons((prev) => ({
			...prev,
			group: [...prev.group.filter((i) => i !== person)],
		}));
	};
	const stepSwitch = (step: number) => {
		switch (step) {
			case 0:
				return (
					<Fragment>
						<h2>Start adding people to the bet</h2>
						<CustomTextField
							handleChange={(e) =>
								setPersons((prev) => ({
									...prev,
									current: e.target.value,
								}))
							}
							onClick={() => {
								setPersons((prev) => ({
									...prev,
									group: [...prev.group, persons.current],
								}));
								setPersons((prev) => ({
									...prev,
									current: "",
								}));
							}}
							value={persons.current}
							label="Add a pearson"
						/>
						<div className="personsList">
							{persons.group.map((person) => {
								return (
									<div className="personTag">
										<p>{person}</p>
										<div
											style={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
											}}
											onClick={() => deletePerson(person)}
										>
											<CloseIcon
												sx={{
													color: "#F0B531",
													width: 15,
													marginLeft: 1,
													cursor: "pointer",
												}}
											/>
										</div>
									</div>
								);
							})}
						</div>
					</Fragment>
				);
			case 1:
				return <BetConditions persons={persons.group} />;
			case 2:
				return <Finalization />;
			default:
				return <Prizes persons={persons.group} />;
		}
	};
	useEffect(() => {
		console.log(persons);
	}, [persons]);

	return (
		<div className="formContainer">
			<StyledStepper
				style={{
					padding: 15,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
				activeStep={currentStep}
				connector={<StyledStepConnector />}
			>
				{steps.map((label) => (
					<StyledStep style={{ padding: 0 }} key={label}>
						<StyledStepLabel StepIconComponent={StepIcon} />
					</StyledStep>
				))}
			</StyledStepper>
			{stepSwitch(currentStep)}
			<div className="buttons">
				<Button
					variant="contained"
					color="secondary"
					size="small"
					sx={{ width: 80 }}
					onClick={() => {
						navigate("/");
						setCurrentStep(0);
					}}
				>
					Cancel
				</Button>
				<div
					style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
				>
					{currentStep !== 0 ? (
						<Button
							variant="contained"
							color="primary"
							size="small"
							sx={{ width: 80, marginRight: 2 }}
							onClick={() => setCurrentStep((prev) => prev - (prev === 0 ? 0 : 1))}
						>
							Previous
						</Button>
					) : (
						<div></div>
					)}

					<Button
						variant="contained"
						color="primary"
						size="small"
						sx={{ width: 80 }}
						onClick={() => {
							setCurrentStep((prev) => prev + (prev === 3 ? 0 : 1));
							if (currentStep === 3) {
								navigate("/");
							}
						}}
					>
						{currentStep === 3 ? "Create" : "Next"}
					</Button>
				</div>
			</div>
		</div>
	);
};

export default BetForm;
