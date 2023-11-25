import { Button, Stack } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { yearTranslate, searchTranslate } from '../Translation';
import { useEffect, useState } from 'react';
import { Prize } from "../Types";
import AppTheme from "../Theme";

export default function YearSelect() {
  const [year, setYear] = useState('');
  const navigate = useNavigate();
  const lang = (window.location.href).split("/")[3];

  const [YearsFetched, setYearFetched] = useState<string[] | null>(null)

  const handleChange = (event: SelectChangeEvent) => {
    setYear(event.target.value as string);
  };

  const handleSubmit = () => {
    navigate(`/${lang}/nagrody/${year}`)
  }

  useEffect(() => {
    async function fetchUniqueAwardYears() {
      try {
        const response = await fetch('https://api.nobelprize.org/2.1/nobelPrizes');
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();

        const uniqueAwardYearsSet = new Set<string>(data.nobelPrizes.map((prize:Prize) => prize.awardYear));
    
        setYearFetched(Array.from( uniqueAwardYearsSet ));
 
      } catch (error) {
        console.error('Error fetching data:', error);
        return [];
      }
    }
    
    fetchUniqueAwardYears();
  }, [])

  return (
    <AppTheme>
      <Stack direction="column" sx={{ alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>

        <InputLabel id="yearSelectLabel">{yearTranslate[lang as keyof typeof yearTranslate]}</InputLabel>
        
        <Select
          fullWidth
          labelId="yearSelectLabel"
          id="yearSelect"
          value={year}
          label="Year"
          onChange={handleChange}
          sx = {{color: "#fff", marginBottom:"20px"}}
        >
          {YearsFetched?.map((year, index) => (
            <MenuItem key={index} value={year}><span>{year}</span></MenuItem>
          ))}
        </Select>
        <Button id="searchButton" fullWidth variant="contained" size="large" disabled={year === ''} onClick={handleSubmit}>
            {searchTranslate[lang as keyof typeof searchTranslate]}
        </Button>
      </Stack>
    </AppTheme>
  );
}