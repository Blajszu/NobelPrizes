import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { NobelPrizeSubset, Language } from '../Types';
import AppTheme from '../Theme';
import { yearTranslate, CategoryTranslate, DateTranslate, PrizeTranslate, FullCategoryTranslate } from '../Translation';

interface PrizeDate {
    value: string
}
interface PrizeAmount {
  value: number
}

interface Props{
  nobelData: NobelPrizeSubset[],
  language: Language
}

export default function DataTable({ nobelData, language }: Props) {

    const columns: GridColDef[] = [
      { 
        field: 'year', 
        headerName: yearTranslate[language].toUpperCase(), 
        type: 'number', 
        width: 100, 
        sortable: false,
        disableColumnMenu: true,
        description: 'This column is not sortable.',
    },
    { field: 'category', headerName: CategoryTranslate[language].toUpperCase(), type: 'text', width: 200 },
    { 
      field: 'date', 
      headerName: DateTranslate[language].toUpperCase(), 
      type: 'text', 
      width: 130,
      valueGetter: (params:PrizeDate): string => {
        if(!params.value) {
          return "no data"
        }
          const [year, month, day] = params.value.split('-').map(Number);
          const date = new Date(year, month - 1, day);
  
          const options: Intl.DateTimeFormatOptions = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          };
        
          return date.toLocaleDateString(undefined, options);
      }
  },
    {
      field: 'prize',
      headerName: PrizeTranslate[language].toUpperCase(),
      type: 'text',
      width: 130,
      headerAlign: "left",
      valueGetter: (params:PrizeAmount): string => {
        if(!params.value) {
          return "no data"
        }
        const StrPrizeAmount = params.value.toLocaleString().replace(".","");
  
        return StrPrizeAmount
    }
    },
    {
      field: 'fullName',
      type: 'text',
      headerName: FullCategoryTranslate[language].toUpperCase(),
      description: 'This column is not sortable.',
      sortable: false,
      disableColumnMenu: true,
      width: 300
    },
  ];

  const rows = [
    nobelData.map((value, index) => {
      return ({id: index, year: value.awardYear, category: value.category[language], date: value.dateAwarded, prize: value.prizeAmount, fullName: value.fullCategoryName[language]})})
  ]

  console.log(rows[0])

  return (
    <AppTheme>
      <div style={{ height: "100%", width: '100%' }}>
        <DataGrid
          rows={rows[0]}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
        />
      </div>
    </AppTheme>  
  );
}