"use client";

import { SpotifyArtists } from "@/components/SpotifyArtists";
import { SpotifyMusics } from "@/components/SpotifyMusics";
import { Box, Tab, Tabs } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className="w-[70%]"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function Interests() {
  const router = useRouter();
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <Box className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Box>
        <Tabs value={tabIndex} onChange={handleTabChange}>
          <Tab label="Músicas" />
          <Tab label="Artistas" />
        </Tabs>
      </Box>
      <TabPanel value={tabIndex} index={0}>
        <SpotifyMusics />
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        <SpotifyArtists />
      </TabPanel>
    </Box>
  );
}
