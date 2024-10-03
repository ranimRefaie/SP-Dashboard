import { useSidebar } from "../Context/Context";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Navbar } from "../Components/Navbar/Navbar";
import { PieChart } from "@mui/x-charts/PieChart";
import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts/BarChart";
import Stack from "@mui/material/Stack";
import { Gauge } from "@mui/x-charts/Gauge";
export const Analytics = () => {
  const { expanded } = useSidebar();
  return (
    <div className="w-full flex">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <div
          className={`flex flex-col mt-[147px]  ${
            expanded ? "ml-64" : "ml-20"
          }`}
        >
          <div className="w-[94%] mx-auto flex flex-wrap justify-around">
            <div className="bg-[#fff] shadow-sm border border-[#EFEFEF] shadow-customgray flex items-center mb-5">
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: 10, label: "series A" },
                      { id: 1, value: 15, label: "series B" },
                      { id: 2, value: 20, label: "series C" },
                    ],
                  },
                ]}
                width={400}
                height={200}
              />
            </div>

            <div className="bg-[#fff] shadow-sm border border-[#EFEFEF] shadow-customgray flex items-center mb-5">
              <BarChart
                xAxis={[
                  {
                    scaleType: "band",
                    data: ["group A", "group B", "group C"],
                  },
                ]}
                series={[
                  { data: [4, 3, 5] },
                  { data: [1, 6, 3] },
                  { data: [2, 5, 6] },
                ]}
                width={500}
                height={300}
              />
            </div>

            <div className="bg-[#fff] shadow-sm border border-[#EFEFEF] shadow-customgray flex items-center  mb-5">
              <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                  {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                  },
                ]}
                width={500}
                height={300}
              />
            </div>

            <div className="bg-[#fff] shadow-sm border border-[#EFEFEF] shadow-customgray flex items-center  mb-5">
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 1, md: 3 }}
              >
                <Gauge
                  width={200}
                  height={200}
                  value={50}
                  valueMin={10}
                  valueMax={60}
                />
              </Stack>
            </div>

            <div className="bg-[#fff] shadow-sm border border-[#EFEFEF] shadow-customgray flex items-center  mb-5">
              <BarChart
                series={[
                  { data: [4, 2, 5, 4, 1], stack: "A", label: "Series A1" },
                  { data: [2, 8, 1, 3, 1], stack: "A", label: "Series A2" },
                  { data: [14, 6, 5, 8, 9], label: "Series B1" },
                ]}
                barLabel={(item, context) => {
                  if ((item.value ?? 0) > 10) {
                    return "High";
                  }
                  return context.bar.height < 60
                    ? null
                    : item.value?.toString();
                }}
                width={600}
                height={350}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
