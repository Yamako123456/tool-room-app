import React, { useState } from 'react'
import { BinModel } from '../../models/BinsModel';
import { ItemModel } from '../../models/ItemModel';
import { IssueTranModel } from '../../models/Transaction/IssueTranModel';
import { TransactionModel } from '../../models/Transaction/TransactionModel';
import { NextIssueTranIdType, NextTranIdType } from '../../types/transactionTypes';
import { useNavigate } from 'react-router-dom';
import CardReturnBin from './CardReturnBin/CardReturnBin';

interface Props {
  bins: BinModel[]; 
  setBins: React.Dispatch<React.SetStateAction<BinModel[]>>;
  empCode: string;
  items: ItemModel[];
  issueTranRecords: IssueTranModel[];
  setIssueTranRecords: React.Dispatch<React.SetStateAction<IssueTranModel[]>>;
  nextIssueTranId: NextIssueTranIdType;
  setNextIssueTranId:  React.Dispatch<React.SetStateAction<NextIssueTranIdType>>;
  tranRecords: TransactionModel[];
  setTranRecords: React.Dispatch<React.SetStateAction<TransactionModel[]>>;
  nextTranId: NextTranIdType;
  setNextTranId: React.Dispatch<React.SetStateAction<NextTranIdType>>;
  handleLogOut: () => void;
}

const Return = ({
  bins,
  setBins,
  empCode,
  items,
  issueTranRecords,
  setIssueTranRecords,
  nextIssueTranId,
  setNextIssueTranId,
  tranRecords,
  setTranRecords,
  nextTranId,
  setNextTranId,
  handleLogOut,
}: Props) => {

  const navigate = useNavigate();

  const [selectedReturnBin, setSelectedReturnBin] = useState<BinModel | null>(null);
  const [selectedReturnQty, setSelectedReturnQty] = useState<number>(0);

  const mergedByBin = issueTranRecords
    .filter((rec) => rec.empCode === empCode)
    .reduce((map, rec) => {
      const existing = map.get(rec.binCode);

      if (existing) {
        map.set(rec.binCode, {
          ...existing,
          qty: existing.qty + rec.qty,
        });
      } else {
        map.set(rec.binCode, { ...rec });
      }

      return map;
    }, new Map<string, IssueTranModel>());

  const mergedIssuedRecords = Array.from(mergedByBin.values());
  console.log("mergedIssuedRecords length=", mergedIssuedRecords.length)
  console.log("issueTranRecords length=", issueTranRecords.length)

  return (
    <section id='Return'>
            <div className='relative flex items-center justify-between mb-10'>
        <div className='flex gap-3'>
          <button 
            onClick={handleLogOut}
            className='mt-1, mb-10 lg:mt-0 lg:ml-auto bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded'
          >
            Log Out  
          </button>  
          <button onClick={() => navigate('/main-menu')}
            className='mt-1, mb-10 lg:mt-0 lg:ml-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded'
          >
            Main Menu  
          </button>
        </div>  
        <div className='absolute left-1/2 lg:-translate-x-1/2'>
          <h2 className=' text-2xl font-semibold'>
            Return Items
          </h2>
        </div>
      </div>

      <div className='relative flex items-start flex-wrap gap-6 max-w-auto mx-auto px-10 md:px-6 mb-5'>
        {mergedIssuedRecords.length > 0 ? (
          mergedIssuedRecords.map( (rec) => {
            return <CardReturnBin binCode={rec.binCode} itemCode={rec.itemCode} bins={bins}items={items} returnableQty={rec.qty}
            setSelectedReturnBin={setSelectedReturnBin} setSelectedReturnQty={setSelectedReturnQty} /> 
          })
        ) : (
          <h3 className='my-3 text-xl font-semibold text-center md:text-xl'>
                No Bin to show.
          </h3>
        )}
        
        <div></div>
      </div>
    </section>
  )
}

export default Return