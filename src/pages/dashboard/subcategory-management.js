import DashboardLayout from "@/components/Layouts/DashboardLayout";

const SubCategoryManagement = () => {
  return (
    <div className="w-full lg:w-6/12 mx-auto lg:my-4 p-2 lg:p-4">
      <div className="container mx-auto ">
        <h2 className="my-4 lg:text-center text-sm font-bold leadi">
          Sub-Category List
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="bg-gray-700 text-white">
              <tr className="text-left">
                <th className="p-3">Sub-Category</th>
                <th className="p-3 text-right">Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-opacity-20">
                <td className="p-3">
                  <p>title</p>
                </td>
                <td className="p-3 text-right">
                  <span className=" py-1 font-semibold">
                    <button className="btn btn-xs">Delete</button>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SubCategoryManagement;

SubCategoryManagement.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
