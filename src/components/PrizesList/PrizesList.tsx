import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DataTable from "./PrizesTable";
import { NobelData, NobelPrizeSubset, Language } from "../Types";
import { resultTranslate, NoDataFoundTranslate } from "../Translation";

function Prizes() {

    const { lang, year } = useParams();
    const [nobelData, setNobelData] = useState<NobelPrizeSubset[] | null>(null)


      useEffect(() => {
        const fetchDataByYear = async (year: string) => {
          try {
            const response = await fetch('https://api.nobelprize.org/2.1/nobelPrizes');
            const data = await response.json();


            const prizesByYear = data.nobelPrizes.filter(
              (prize: NobelData) => (prize.awardYear === year)
            ).map((prize: NobelData) => ({
              dateAwarded: prize.dateAwarded,
              awardYear: prize.awardYear,
              category: prize.category,
              prizeAmount: prize.prizeAmountAdjusted,
              fullCategoryName: prize.categoryFullName
            }));

            setNobelData(prizesByYear)

          } catch (error) {
            console.error("Error fetching Nobel prizes:", error);
            throw error;
          }
        }

        fetchDataByYear(year as string)
    }, [])

    return (
      <>
        <h2>{resultTranslate[lang as keyof typeof resultTranslate] + year}</h2>
        {nobelData && nobelData.length > 0 ? <DataTable nobelData={nobelData} language={lang as Language} /> : <div></div>}
          {nobelData?.length == 0 ? <div>{NoDataFoundTranslate[lang as keyof typeof NoDataFoundTranslate]}</div> : <div></div>}
      </>
    )
  }
  
  export default Prizes
