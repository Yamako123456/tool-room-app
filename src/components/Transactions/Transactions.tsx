import React, { useMemo, useState } from 'react'
import { TransactionModel } from '../../models/Transaction/TransactionModel'

interface Props {
  tranRecords: TransactionModel[];
}

const dateRangeOptions = [ //Dropdown list options
  { label: "Today", days: 0 },
  { label: "Last 7 days", days: 7 },
  { label: "Last 30 days", days: 30 },
  { label: "Last 90 days", days: 90 },
  { label: "All", days: -1 },
];

const Transactions = ({tranRecords}: Props) => {

  const [daysBack, setDaysBack] = useState<number>(0);

  const filteredTrans = useMemo(
    () => {
      const today = new Date();
      let list: TransactionModel[] = tranRecords;

      if (daysBack !== -1) { // If Not { label: "All", days: -1 },
        const startDate = new Date();
        startDate.setHours(0, 0, 0, 0);
        startDate.setDate(today.getDate() - daysBack );

        list = tranRecords.filter(
          tran => tran.tranDate >= startDate
        );
        return list;
      }
    }, [tranRecords, daysBack]
  );

  return (
    <section>
      <div>
        <div className='flex'>
          <div>
            <h1>
              Transactions
            </h1>
            <p>
              Showing {filteredTrans?.length} transaction record(s).
            </p>
          </div>
          <div>
            <label>
              Show
            </label>
            <select
              value={daysBack}
            >
              {dateRangeOptions.map( option =>
                <option 
                  key={option.label} 
                  value={option.days}
                >
                  {option.label}
                </option>  
              )}
            </select>
          </div>
        </div>

      </div>
    </section>

  )
}

export default Transactions