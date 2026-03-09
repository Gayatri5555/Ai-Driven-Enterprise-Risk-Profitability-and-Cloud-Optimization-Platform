const CloudUsage = require("./cloudUsageModel");

async function insertCloudData() {

  const cloudData = new CloudUsage({
    project_name: "Banking Mobile App",
    cloud_provider: "AWS",
    storage_used_gb: 400,
    compute_hours: 600,
    monthly_cloud_cost: 2500,
    network_usage_gb: 150
  });

  await cloudData.save();

  console.log("Cloud usage data stored successfully");
}

insertCloudData();
