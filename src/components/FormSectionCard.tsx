import React from "react";

const FormSectionCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <section className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100 sm:p-6">
      <h2 className="mb-4 text-base font-semibold text-gray-900 sm:text-lg">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
};

export default FormSectionCard;
