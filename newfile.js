// Energy consumption visualization across platforms
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

const EnergyChart = () => {
  const data = [
    {
      name: 'Desktop Web',
      total: 45,
      content: 13.5, // 30%
      htmlCss: 11.25, // 25%
      javascript: 20.25, // 45%
      label: '45Wh Total'
    },
    {
      name: 'Mobile Web', 
      total: 135,
      content: 40.5, // 30%
      htmlCss: 33.75, // 25%
      javascript: 60.75, // 45%
      label: '135Wh Total'
    },
    {
      name: 'Desktop App',
      total: 30,
      content: 7.5, // 25%
      htmlCss: 10.5, // 35%
      javascript: 12, // 40%
      label: '30Wh Total' 
    },
    {
      name: 'Mobile App',
      total: 90,
      content: 22.5, // 25%
      htmlCss: 31.5, // 35%
      javascript: 36, // 40%
      label: '90Wh Total'
    }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const total = payload.reduce((sum, item) => sum + item.value, 0);
      return (
        <div className="bg-white p-4 border border-gray-200 rounded shadow">
          <p className="font-medium text-lg mb-2">{label}</p>
          {payload.map((item, index) => (
            <p key={index} style={{ color: item.color }}>
              {`${item.name}: ${item.value}Wh (${Math.round(item.value/total * 100)}%)`}
            </p>
          ))}
          <p className="mt-2 font-medium">{`Total: ${total}Wh`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Chart Component */}
      <div className="h-[500px] w-full p-4 bg-white rounded-lg shadow">
        <h2 className="text-center text-xl font-semibold mb-4">Energy Consumption by Component and Platform</h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 60, bottom: 40 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name">
              <Label value="Platform Type" position="bottom" offset={20} />
            </XAxis>
            <YAxis>
              <Label value="Energy Consumption (Wh)" angle={-90} position="left" offset={40} />
            </YAxis>
            <Tooltip content={<CustomTooltip />} />
            <Legend verticalAlign="top" height={36} />
            <Bar dataKey="content" stackId="a" fill="#ffc658" name="Content/API Data" />
            <Bar dataKey="htmlCss" stackId="a" fill="#8884d8" name="HTML/CSS" />
            <Bar dataKey="javascript" stackId="a" fill="#82ca9d" name="JavaScript" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Methodology & Info Section */}
      <div className="space-y-4 p-4 bg-white rounded-lg shadow">
        <h3 className="font-semibold">Energy Calculation</h3>
        <p>E = Data Transfer × Energy/MB × Component %</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Desktop: 0.2 Wh/MB</li>
          <li>Mobile: 0.6 Wh/MB</li>
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <h4 className="font-medium">Desktop</h4>
            <ul className="list-disc pl-5">
              <li>Stable connection</li>
              <li>Larger JS frameworks</li>
              <li>Better caching</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Mobile</h4>
            <ul className="list-disc pl-5">
              <li>Variable connection</li>
              <li>Higher energy cost</li>
              <li>Optimized frameworks</li>
            </ul>
          </div>
        </div>

        <h3 className="font-semibold mt-4">Sources</h3>
        <ul className="space-y-2">
          <li>Energy: The Shift Project (2023)</li>
          <li>Components: HTTP Archive (2024)</li>
          <li>Mobile: Ericsson Mobility Report (2023)</li>
        </ul>
      </div>
    </div>
  );
};

export default EnergyChart;
