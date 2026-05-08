import React, { useState } from "react";
import { EmpModel } from "../../models/EmpModel";

interface Props {
  emps: EmpModel[];
  scannedBadgeNo: string;
  setScannedBadgeNo: React.Dispatch<React.SetStateAction<string>>;
  loggedInEmp: EmpModel | undefined;
  setLoggedInEmp: React.Dispatch<React.SetStateAction<EmpModel | undefined>>;
  handleBadgeSubmit: (e: React.FormEvent) => void;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

const Login = ({
  emps, 
  scannedBadgeNo, 
  setScannedBadgeNo, 
  loggedInEmp,
  setLoggedInEmp,
  handleBadgeSubmit, 
  error, 
  setError}: Props) => {

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Toolroom Operation
          </h1>
          <p className="text-gray-500 mt-2">
            Scan your employee badge to continue.
          </p>
        </div>

        <form onSubmit={handleBadgeSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Badge Number
            </label>
            <input
              autoFocus
              type="text"
              value={scannedBadgeNo}
              onChange={(e) => {
                setScannedBadgeNo(e.target.value);
                setError("");
              }}
              className="w-full rounded-lg border px-4 py-3 text-xl tracking-wide"
              placeholder="Scan badge..."
            />
          </div>

          {error && (
            <div className="rounded-lg bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium py-3"
          >
            Login
          </button>
        </form>

        {/* {loggedInEmp && !error && (
          <div className="mt-8 border-t pt-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Welcome, {loggedInEmp.firstName} {loggedInEmp.lastName}
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Badge: {loggedInEmp.badgeNo}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              <button className="rounded-lg bg-green-600 hover:bg-green-700 text-white py-3">
                Issue Tool
              </button>

              <button className="rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white py-3">
                Return Tool
              </button>
            </div>
          </div>
        )} */}
      </div>
    </section>
  );
};
export default Login