import { useParams } from "react-router-dom"
import {welcomeTranslate, textTranslate} from '../Translation.tsx'
import YearSelect from './YearSelect.tsx'
import { FormControl } from "@mui/material";
import Box from '@mui/material/Box';

function Home() {

  const { lang } = useParams<string>();
  
  return (
    <>
      <h1 style={{ margin: 0 }}>{welcomeTranslate[lang as keyof typeof welcomeTranslate]}!</h1>
      <h3>{textTranslate[lang as keyof typeof welcomeTranslate]}</h3>
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <YearSelect />
      </FormControl>
      </Box>
    </>
  )
}

export default Home
