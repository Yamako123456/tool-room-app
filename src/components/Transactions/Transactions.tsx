import React, { useMemo, useState } from 'react'
import { TransactionModel } from '../../models/Transaction/TransactionModel'
import { TranRecordsState } from '../../types/transactionTypes';

interface Props {
  tranRecords: TranRecordsState;
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
      let filteredList: TransactionModel[] = tranRecords.records;

      if (daysBack !== -1) { // If Not { label: "All", days: -1 },
        const startDate = new Date();
        startDate.setHours(0, 0, 0, 0);
        startDate.setDate(today.getDate() - daysBack );

        filteredList = tranRecords.records.filter(
          tran => tran.tranDate >= startDate
        );
        return filteredList;
      } else {
        return tranRecords.records;
      }
    }, [tranRecords, daysBack]
  );

  if (!filteredTrans) return null;

  return (
    <section className='min-h-screen bg-gray-50 px-6, py-8'>
      <div className='max-w-6xl mx-auto space-y-6'>
        <div className='flex flex-col sm:items-center sm:justify-between gap-4 bg-white rounded-2xl shadow-sm border border-gray-100 p-6'>
          <div>
            <h1 className='text-2xl font-bold text-gray-900'>
              Transactions
            </h1>
            <p className='text-sm text-gray-900'>
              Showing {filteredTrans?.length} transaction record(s).
            </p>
          </div>
          <div>
            <label className='block text-sm font-medium mb-1'>
              Show
            </label>
            <select
              value={daysBack}
              onChange={(e) => setDaysBack(Number(e.target.value))}
              className='rounded-md border px-3 py-2'
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
        
        <div className='bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden'>
          <table className='w-full text-sm'>
            <thead className='bg-gray-100 text-gray-700'>
              <tr>
                <th className='px-4 py-3 text-right'>Tran Id</th>
                <th className='px-4 py-3 text-left'>Date</th>
                <th className='px-4 py-3 text-left'>Type</th>
                <th className='px-4 py-3 text-left'>Item</th>
                <th className='px-4 py-3 text-left'>Bin</th>
                <th className='px-4 py-3 text-left'>Employee</th>
                <th className='px-4 py-3 text-right'>Qty</th>
                {/* <th className='px-4 py-3 text-left'>Notes</th> */}
              </tr>
            </thead>
            <tbody>
              {filteredTrans.length > 0 ? (
                filteredTrans.map(tran => { return (
                  <tr
                    key={tran.tranId} 
                    className='border-t hover:bg-gray-50'
                    >
                    <td className='px-4 py-3 text-right'>{tran.tranId}</td>
                    <td className='px-4 py-3'>{new Date(tran.tranDate).toLocaleString()}</td>
                    <td className='px-4 py-3'>{tran.tranType}</td>
                    <td className='px-4 py-3'>{tran.itemCode}</td>
                    <td className='px-4 py-3'>{tran.binCode}</td>
                    <td className='px-4 py-3'>{tran.empCode}</td>
                    <td className='px-4 py-3 text-right'>{tran.qty}</td>
                    {/* <td className='px-4 py-3'>{tran.notes}</td> */}
                  </tr>
                )})
              ) : (
                <tr>
                  <td colSpan={7} className='px-4 py-10 text-center text-gray-500'>
                    No transactions to show for the selected period.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>

  )
}

export default Transactions