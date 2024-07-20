import { useState } from "react";
import Select from "react-select";
import TableAddUser from "../Tabel/TableAddUser";
const UserForm = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "Admin", label: "Admin" },
    { value: "super admin", label: "super admin" },
    { value: "empolyee", label: "empolyee" },
  ];

  return (
    <>
      <div className="  bg-white p-6 rounded-lg shadow-lg">
        <form>
          {/* <!-- Row 1 --> */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="User ID *"
              required
              className="w-full px-3 py-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* <!-- Row 2 --> */}
          <div className="mb-4 flex space-x-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="First Name *"
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1">
              <input
                type="text"
                placeholder="First Name *"
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          {/* <!-- Row 3 --> */}
          <div className="mb-4 flex space-x-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Email ID *"
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1">
              <input
                type="text"
                placeholder="Mobile No"
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1">
              {" "}
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                placeholder="Select Role Type"
              />
            </div>
          </div>
          {/* <!-- Row 4 --> */}
          <div className="mb-4 flex space-x-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Username *"
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1">
              <input
                type="text"
                placeholder="Password*"
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1">
              <input
                type="text"
                placeholder="Confirm Password*"
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <TableAddUser />
          </div>

          <div className="w-full flex justify-end ">
            <button
              type="submit"
              className=" px-4 py-0 bg-[#0095FF] text-white text-[12px] font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add User
            </button>
            <button className=" px-3 py-1  text-[#8F9BB3] text-[12px] font-semibold rounded-xl focus:outline-none ">
              cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserForm;
