import { Button, IconButton } from "@mui/material";
import React, { Fragment } from "react";
import "./BetsContainer.scss";
import HelpIcon from "@mui/icons-material/Help";
import BetCard from "./BetCard";
import { useNavigate } from "react-router-dom";

const BetsContainer = () => {
	const navigate = useNavigate();

	return (
		<Fragment>
			<nav className="nav">
				<h1>Friends bets</h1>
				<div>
					<IconButton onClick={() => {}}>
						<HelpIcon sx={{ color: "black" }} />
					</IconButton>
					<Button
						variant="contained"
						color="primary"
						onClick={() => navigate("/create-bet")}
					>
						Create new bet
					</Button>
				</div>
			</nav>
			<main className="betsContainer">
				<BetCard />
				<BetCard />
				<BetCard />
				<BetCard />
				<BetCard />
				<BetCard />
				<BetCard />
				<BetCard />
				<BetCard />
				<BetCard />
			</main>
		</Fragment>
	);
};

export default BetsContainer;
