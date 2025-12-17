import React from "react";

const FormField = ({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) => {
  return (
    <div className="space-y-1">
      <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
        {label}
      </p>
      <p className="text-sm font-medium text-gray-900 break-words">{value}</p>
    </div>
  );
};

export default FormField;
