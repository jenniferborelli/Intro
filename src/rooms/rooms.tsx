import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  CardActionArea,
  List,
  ListSubheader,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  DraftsIcon,
  SendIcon,
  handleClick,
  InboxIcon,
  open,
  ExpandLess,
  ExpandMore,
} from "@mui/material";

export default function RoomCard() {
  return (
    <Card sx={{ marginTop: 4 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/200x200/?kitchen"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Nested List Items
              </ListSubheader>
            }
          >
            <ListItemButton>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary="Sent mail" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Starred" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
