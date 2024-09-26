<script setup>
import { ref } from "vue";
const crumbs = [{ name: "Home", link: "/" }, { name: " Acocunt" }];

const invoices = ref([
  // Example data
  {
    name: "John Doe",
    invoiceNumber: "12345",
    qty: 10,
    total: "$100",
    date: "2024-06-14",
    status: "Paid",
    action: "View",
  },
  {
    name: "Jane Smith",
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
          <p>Welcome! <span class="text-primary">Mustak Ahmed</span></p>
        </div>
      </div>
      <div class="grid md:grid-cols-12 grid-cols-1 gap-6">
        <div class="md:col-span-4 col-span-12">
          <!-- profile sider bar -->
             <AccountMenu/>
        </div>
        <div class="md:col-span-8 col-span-12">
           <div class="relative overflow-x-auto">
             <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-[#7D8184]">
                <tr>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider"
                  >
                    SL
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider"
                  >
                    Invoice#
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider"
                  >
                    Qty
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider"
                  >
                    Total
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider"
                  >
                    Date
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr class="odd:bg-white even:bg-gray-50 border-0" v-for="(invoice, index) in invoices" :key="index">
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    {{ index + 1 }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ invoice.name }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ invoice.invoiceNumber }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ invoice.qty }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ invoice.total }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ invoice.date }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ invoice.status }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ invoice.action }}
                  </td>
                </tr>
              </tbody>
            </table>
            <pagination/>
           </div>
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