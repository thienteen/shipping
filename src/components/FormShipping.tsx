import { mockShippingOrder } from "../utils/mock_shipping";
import FormSectionCard from "./FormSectionCard";
import FormField from "./FormField";
import Avatar from "./Avatar";

const FormShipping = () => {
  const data = mockShippingOrder;
  const formatCurrency = (value: number) =>
    value.toLocaleString("vi-VN", { style: "currency", currency: "VND" });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:py-8">
        {/* Page header */}
        <header className="mb-6 sm:mb-8">
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Shipping Information
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Review shipping and order details before dispatching with carrier.
          </p>
        </header>

        <form
          className="space-y-5 sm:space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            // Placeholder submit
          }}
        >
          {/* Order info */}
          <FormSectionCard title="Order Information">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
              <Avatar path="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQD_IUPlepxVhM0lGJ1nU5s2tcmSJXZf-SkA&s" />
              <FormField label="Order ID" value={data.order_id} />
            </div>
          </FormSectionCard>

          {/* Sender / Receiver */}
          <div className="grid gap-5 sm:grid-cols-2">
            <FormSectionCard title="Sender Information">
              <div className="space-y-4">
                <FormField label="Name" value={data.sender.name} />
                <FormField label="Phone" value={data.sender.phone} />
                <FormField label="Address" value={data.sender.address} />
                <div className="grid gap-4 sm:grid-cols-3">
                  <FormField label="City" value={data.sender.city} />
                  <FormField label="District" value={data.sender.district} />
                  <FormField label="Ward" value={data.sender.ward} />
                </div>
              </div>
            </FormSectionCard>

            <FormSectionCard title="Receiver Information">
              <div className="space-y-4">
                <FormField label="Name" value={data.receiver.name} />
                <FormField label="Phone" value={data.receiver.phone} />
                <FormField label="Address" value={data.receiver.address} />
                <div className="grid gap-4 sm:grid-cols-3">
                  <FormField label="City" value={data.receiver.city} />
                  <FormField label="District" value={data.receiver.district} />
                  <FormField label="Ward" value={data.receiver.ward} />
                </div>
              </div>
            </FormSectionCard>
          </div>

          {/* Package + Payment */}
          <div className="grid gap-5 lg:grid-cols-2">
            <FormSectionCard title="Package Information">
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-4">
                  <FormField label="Weight (kg)" value={data.package.weight} />
                  <FormField label="Length (cm)" value={data.package.length} />
                  <FormField label="Width (cm)" value={data.package.width} />
                  <FormField label="Height (cm)" value={data.package.height} />
                </div>
                <FormField
                  label="Declared Value"
                  value={formatCurrency(data.package.value)}
                />
                <FormField
                  label="Description"
                  value={data.package.description}
                />
              </div>
            </FormSectionCard>

            <FormSectionCard title="Payment Information">
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    label="Shipping Fee"
                    value={formatCurrency(data.payment.shipping_fee)}
                  />
                  <FormField
                    label="COD Amount"
                    value={formatCurrency(data.payment.cod_amount)}
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    label="Insurance Fee"
                    value={formatCurrency(data.payment.insurance_fee)}
                  />
                  <FormField
                    label="Payment Method"
                    value={data.payment.payment_method}
                  />
                </div>
              </div>
            </FormSectionCard>
          </div>

          {/* Delivery */}
          <FormSectionCard title="Delivery Information">
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-3">
                <FormField
                  label="Service Type"
                  value={data.delivery.service_type}
                />
                <FormField
                  label="Carrier Code"
                  value={data.delivery.carrier_code}
                />
                <FormField
                  label="Estimated Pickup Time"
                  value={data.delivery.estimated_pickup_time}
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  label="Estimated Delivery Time"
                  value={data.delivery.estimated_delivery_time}
                />
                <FormField
                  label="Instructions"
                  value={data.delivery.instructions}
                />
              </div>
            </div>
          </FormSectionCard>

          {/* Items */}
          <FormSectionCard title="Items">
            <div className="space-y-3">
              {data.items.map((item, index) => (
                <div
                  key={item.product_id}
                  className="flex flex-col gap-3 rounded-xl bg-gray-50 p-4 ring-1 ring-gray-100 sm:flex-row sm:items-start sm:justify-between"
                >
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-white px-2 py-0.5 text-xs font-semibold text-gray-700 ring-1 ring-gray-200">
                        Item {index + 1}
                      </span>
                      <p className="text-sm font-semibold text-gray-900">
                        {item.product_name}
                      </p>
                    </div>
                    <div className="grid gap-3 text-sm text-gray-700 sm:grid-cols-3">
                      <FormField label="Product ID" value={item.product_id} />
                      <FormField label="SKU" value={item.product_sku} />
                      <FormField label="Quantity" value={item.quantity} />
                    </div>
                  </div>
                  <div className="w-full max-w-xs space-y-2 text-sm text-gray-700 sm:text-right">
                    <FormField
                      label="Unit Price"
                      value={formatCurrency(item.unit_price)}
                    />
                    <FormField
                      label="Total Price"
                      value={
                        <span className="font-semibold text-[#f53d2d]">
                          {formatCurrency(item.total_price)}
                        </span>
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </FormSectionCard>

          {/* Submit button */}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-[#f53d2d] px-6 py-2.5 text-sm   shadow-sm transition hover:bg-[#e33424] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f53d2d] focus-visible:ring-offset-1 disabled:opacity-50 text-gray-700 font-medium"
              onClick={() => {
                // Placeholder click handler
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormShipping;
