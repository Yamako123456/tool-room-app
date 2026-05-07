import React from "react";
import { BinModel } from "../../models/BinsModel";
import { SupplierModel } from "../../models/SupplierModel";
import { ItemModel } from "../../models/ItemModel";



interface Props {
  bins: BinModel[];
  items: ItemModel[];
  suppliers: SupplierModel[];
  handleOrderExport: (orders: restockObjType[]) => void;
}

const RestockList = ({ bins, items, suppliers, handleOrderExport }: Props) => {
  
  const itemRows: restockObjType[] = items
    .map((item) => {
      const itemBins = bins.filter(
        (bin) => bin.active && bin.item === item.code
      );

      const totalQty = itemBins.reduce((sum, bin) => sum + bin.qty, 0);
      const totalMin = itemBins.reduce((sum, bin) => sum + bin.min, 0);

      const supplier = suppliers.find(
        (sup) => sup.supCode === item.supCode
      );

      return {
        itemCode: item.code,
        description: item.description1,
        supplierName: supplier?.name ?? "Unknown Supplier",
        supplierCode: item.supCode,

        binsStr: itemBins.map( (bin) => bin.binCode )
          .join(", "),
        totalQty,
        totalMin,
        orderQty: item.orderQty,
        needsRestock: itemBins.length > 0 && totalQty <= totalMin,
        status: totalQty > totalMin ? "IN STOCK" : totalQty === 0 ? "OUT OF STOCK" : "LOW STOCK",
        criticalNumber: totalQty === 0 ? 1 : totalQty < totalMin ? 2 : 3,
        shortage: totalMin - totalQty,
      };
    });
    // .filter((row) => row.needsRestock);
    const needRestock: restockObjType[] = itemRows.filter((ir) => ir.status !== "IN STOCK");
    const sortedRows: restockObjType[] = itemRows.sort((a, b) => a.criticalNumber - b.criticalNumber);

  return (
    <div className="w-full mx-auto px-6 py-6">
      <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Inventory
            </h2>
            <p className="text-sm text-gray-500">
              Total Qty vs Min Qty (All Bins)
              {/* Sum of stocked quantities and minimum quantities of all the bins with each item. */}
            </p>
          </div>
          <div className="flex gap-2">
            <div className="text-sm font-semibold bg-red-100 text-red-700 px-3 py-1 rounded-full">
              {needRestock.length} Items Need Restock
            </div>
            <button 
              onClick={() => handleOrderExport(needRestock)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-semibold"
            >
              Export to CSV / Excel
            </button>
          </div>
        </div>

        {sortedRows.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            No item stocks to display.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
                <tr>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Item</th>
                  <th className="px-6 py-3">Bins</th>
                  <th className="px-6 py-3">Supplier</th>
                  <th className="px-6 py-3 text-right">Qty</th>
                  <th className="px-6 py-3 text-right">Min</th>
                  <th className="px-6 py-3 text-right">Shortage</th>
                  <th className="px-6 py-3 text-right">Set Order Qty</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {sortedRows.map((row) => (
                  <tr key={row.itemCode} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-bold ${
                          row.status === "OUT OF STOCK"
                            ? "bg-red-100 text-red-700"
                            : row.status === "LOW STOCK" ? "bg-yellow-100 text-yellow-700" 
                            : "bg-green-100 text-green-700" 
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <div className="font-semibold text-gray-800">
                        {row.description}
                      </div>
                      <div className="text-xs text-gray-500">
                        {row.itemCode}
                      </div>
                    </td>

                    <td className="px-6 py-4 text-gray-700">
                      {row.binsStr}
                    </td>

                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-800">
                        {row.supplierName}
                      </div>
                      <div className="text-xs text-gray-500">
                        {row.supplierCode}
                      </div>
                    </td>

                    <td className="px-6 py-4 text-right font-semibold text-gray-800">
                      {row.totalQty}
                    </td>

                    <td className="px-6 py-4 text-right text-gray-600">
                      {row.totalMin}
                    </td>

                    <td className="px-6 py-4 text-right text-red-600 font-bold ">
                      {row.shortage >= 0 ? row.shortage : "" }
                    </td>

                    <td className="px-6 py-4 text-right">
                      <span className="bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded-full">
                        {row.orderQty}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestockList