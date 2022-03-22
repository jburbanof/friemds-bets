import React from "react";
import { IconButton, Paper } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { formatName } from "../Workplace/UtilityFunctions";
const BetCard = () => {
	const dataPlaceHolder = {
		generalCondition: true,
		generalPrize: false,
		endingDate: "",
		players: [
			{
				name: "daniela",
				condition: "",
				prize: "",
			},
			{
				name: "julian",
				condition: "",
				prize: "",
			},
			{
				name: "jhon",
				condition: "",
				prize: "",
			},
			{
				name: "jhon",
				condition: "",
				prize: "",
			},
		],
	};
	return (
		<Paper className="betCard" elevation={6}>
			<div className="playersList">
				<h3>Players</h3>
				<ul>
					{dataPlaceHolder.players.map((player) => {
						return (
							<li>
								{formatName(player.name)}
								<IconButton onClick={() => {}} sx={{ marginLeft: 2 }}>
									<VisibilityIcon sx={{ color: "#f0b531", width: 20, height: 20 }} />
								</IconButton>
								<IconButton onClick={() => {}}>
									<EmojiEventsIcon sx={{ color: "#f0b531", width: 20, height: 20 }} />
								</IconButton>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="actions">
				<h3>Actions</h3>
				<div>
					<IconButton onClick={() => {}}>
						<EditIcon sx={{ color: "#f0b531", width: 20, height: 20 }} />
					</IconButton>
					<IconButton onClick={() => {}}>
						<DeleteOutlineIcon sx={{ width: 20, height: 20 }} color={"secondary"} />
					</IconButton>
				</div>
				<h3>Bet data</h3>
				<div>
					<IconButton onClick={() => {}} >
						<VisibilityIcon sx={{ color: "#f0b531", width: 20, height: 20 }} />
					</IconButton>
					<IconButton onClick={() => {}}>
						<EmojiEventsIcon sx={{ color: "#f0b531", width: 20, height: 20 }} />
					</IconButton>
				</div>
			</div>
		</Paper>
	);
};

export default BetCard;
