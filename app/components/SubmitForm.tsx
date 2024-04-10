"use client";
import React, { useEffect, useState } from "react";

function SubmitForm() {
  const [showTable, setShowTable] = useState(false);
  const [parameters, setParameters] = useState(
    window.location.search.split("?")[1]
  );
  useEffect(() => {
    if (window !== undefined) {
      setParameters(window.location.search.split("?")[1]);
    }
  }, []);
  const handleTableData = () => {
    if (window !== undefined) {
      setParameters(window.location.search.split("?")[1]);
    }
    setShowTable(true);
  };
  return (
    <>
      <button
        className="bg-gradient-to-r from-primary to-secondary flex items-center rounded-lg gap-1 text-white text-sm font-bold py-3 w-full justify-center mt-3"
        onClick={handleTableData}
      >
        Submit
      </button>
      {showTable && (
        <div className="relative overflow-x-auto mt-4">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-white uppercase bg-secondary">
              <tr>
                <th scope="col" className="px-6 py-3">
                  key
                </th>
                <th scope="col" className="px-6 py-3">
                  value
                </th>
              </tr>
            </thead>
            <tbody>
              {parameters &&
                parameters.split("&").map((param) => {
                  return (
                    <tr className="bg-white border-b" key={param.split("=")[0]}>
                      <th scope="row" className="px-6 py-4 font-medium">
                        {decodeURIComponent(param.split("=")[0])}
                      </th>
                      <td className="px-6 py-4">
                        {decodeURIComponent(
                          param.split("=")[1].split("%20").join(" ")
                        )}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default SubmitForm;
