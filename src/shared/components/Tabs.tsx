import React from 'react';

import { Tabs, Tab, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

function TabsComponent() {
  const { i18n } = useTranslation();
  const [value, setValue] = React.useState(i18n.language || 'kz');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    i18n.changeLanguage(newValue);
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
      style={{ backgroundColor: 'white', marginLeft: 10 }}
    >
      <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto">
        <Tab label="Қазақ тілі" value="kz" sx={{ minWidth: '120px' }} />
        <Tab label="Русский язык" value="ru" sx={{ minWidth: '120px' }} />
      </Tabs>
    </Box>
  );
}

export default TabsComponent;
