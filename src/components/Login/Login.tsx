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
            Log In
          </button>
        </form>

      </div>
    </section>
  );
};
export default Login