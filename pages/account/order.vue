<script setup>
import { ref } from "vue";
const crumbs = [{ name: "Home", link: "/" }, { name: " Acocunt" }];

const invoices = ref([
  // Example data
  {
    name: "Alexa Bliss",
    invoiceNumber: "12345",
    qty: 10,
    total: "$100",
    date: "2024-06-14",
    status: "Paid",
    action: "View",
  },
  {
    name: "Nathan Drake",
    invoiceNumber: "67890",
    qty: 5,
    total: "$50",
    date: "2024-06-15",
    status: "Pending",
    action: "View",
  },
]);
</script>

<template>
  <!-- about us banner -->
  <NuxtLayout name="home">
    <div class="xl:px-36 px-4 mb-20 w-full">
      <div class="flex justify-between items-center py-4">
        <Breadcrumb :crumbs="crumbs" />
        <div>
          <p>Welcome! <span class="text-primary">John Doe</span></p>
        </div>
      </div>
      <div class="grid md:grid-cols-12 grid-cols-1 gap-6">
        <div class="md:col-span-3 col-span-13">
          <!-- profile sider bar -->
             <AccountMenu/>
        </div>
        <div class="md:col-span-9 col-span-13">
          <h2 class="text-lg border-l-4 pl-4 border-red-500 text-primary font-semibold mb-4">
              All Orders
            </h2>
           <div class="relative overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-[#7D8184]">
                <tr>
                  <th
                    class="px-2 py-1 md:px-4 md:py-2 text-left text-[10px] md:text-xs font-medium text-gray-100 uppercase tracking-wider">
                    SL</th>
                  <th
                    class="px-2 py-1 md:px-4 md:py-2 text-left text-[10px] md:text-xs font-medium text-gray-100 uppercase tracking-wider">
                    Name</th>
                  <th
                    class="px-2 py-1 md:px-4 md:py-2 text-left text-[10px] md:text-xs font-medium text-gray-100 uppercase tracking-wider">
                    Invoice#</th>
                  <th
                    class="px-2 py-1 md:px-4 md:py-2 text-left text-[10px] md:text-xs font-medium text-gray-100 uppercase tracking-wider">
                    Qty</th>
                  <th
                    class="px-2 py-1 md:px-4 md:py-2 text-left text-[10px] md:text-xs font-medium text-gray-100 uppercase tracking-wider">
                    Total</th>
                  <th
                    class="px-2 py-1 md:px-4 md:py-2 text-left text-[10px] md:text-xs font-medium text-gray-100 uppercase tracking-wider">
                    Date</th>
                  <th
                    class="px-2 py-1 md:px-4 md:py-2 text-left text-[10px] md:text-xs font-medium text-gray-100 uppercase tracking-wider">
                    Status</th>
                  <th
                    class="px-2 py-1 md:px-4 md:py-2 text-left text-[10px] md:text-xs font-medium text-gray-100 uppercase tracking-wider">
                    Action</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="(invoice, index) in invoices" :key="index" class="odd:bg-white even:bg-gray-50">
                  <td
                    class="px-2 py-1 md:px-4 md:py-2 whitespace-nowrap text-[10px] md:text-sm font-medium text-gray-900">
                    {{ index + 1 }}</td>
                  <td class="px-2 py-1 md:px-4 md:py-2 whitespace-nowrap text-[10px] md:text-sm text-gray-500">{{
                    invoice.name }}</td>
                  <td class="px-2 py-1 md:px-4 md:py-2 whitespace-nowrap text-[10px] md:text-sm text-gray-500">#{{
                    invoice.invoiceNumber }}</td>
                  <td class="px-2 py-1 md:px-4 md:py-2 whitespace-nowrap text-[10px] md:text-sm text-gray-500">{{
                    invoice.qty }}</td>
                  <td class="px-2 py-1 md:px-4 md:py-2 whitespace-nowrap text-[10px] md:text-sm text-gray-500">{{
                    invoice.total }}</td>
                  <td class="px-2 py-1 md:px-4 md:py-2 whitespace-nowrap text-[10px] md:text-sm text-gray-500">{{
                    invoice.date }}</td>
                  <td class="px-2 py-1 md:px-4 md:py-2 whitespace-nowrap text-[10px] md:text-sm text-gray-500">{{
                    invoice.status }}</td>
                  <td class="px-2 py-1 md:px-4 md:py-2 whitespace-nowrap text-[10px] md:text-sm text-gray-500">{{
                    invoice.action }}</td>
                </tr>
              </tbody>
            </table>
           </div>
            <pagination/>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>


<style scoped>
tr, td{
  border: 0;
}
</style>