import { SyntheticEvent, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import FactCMS from "./FactCMS";
import { Facts } from "@/data/Facts";

type CMSTabsProps = {
  facts: Facts[];
  authToken: string;
};

export default function CMSTabs(props: CMSTabsProps) {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="standard"
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="Category Tabs"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Facts" {...a11yProps(0)} />
        <Tab label="Questions" {...a11yProps(1)} />
        <Tab label="Events" {...a11yProps(2)} />
        <Tab label="Recycling Services (House)" {...a11yProps(3)} />
        <Tab label="Recycling Services (Flat)" {...a11yProps(4)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <FactCMS authToken={props.authToken} facts={props.facts} />
      </TabPanel>

      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>

      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>

      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>

      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

interface TabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ width: "100%" }}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
