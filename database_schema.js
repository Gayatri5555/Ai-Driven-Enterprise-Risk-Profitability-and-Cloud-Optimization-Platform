// MongoDB Schema for AI Project Risk Platform

const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  project_name: String,
  client_name: String,
  domain: String,
  budget: Number,
  expected_timeline_months: Number,
  team_size: Number,
  tech_stack: [String],
  cloud_provider: String,
  project_manager: String,
  start_date: Date
});

const HistoricalProjectSchema = new mongoose.Schema({
  project_name: String,
  domain: String,
  budget: Number,
  actual_cost: Number,
  estimated_timeline: Number,
  actual_timeline: Number,
  team_size: Number,
  technologies_used: [String],
  delay_occurred: Boolean,
  cost_overrun: Boolean,
  final_profit: Number,
  risk_level: String
});

const CloudUsageSchema = new mongoose.Schema({
  project_name: String,
  cloud_provider: String,
  storage_used_gb: Number,
  compute_hours: Number,
  monthly_cloud_cost: Number,
  network_usage_gb: Number
});

const AIReportSchema = new mongoose.Schema({
  project_name: String,
  risk_score: Number,
  profitability_score: Number,
  delay_probability: Number,
  cost_overrun_probability: Number,
  predicted_risk_level: String,
  predicted_profit: Number,
  ai_suggestions: [String]
});

module.exports = {
  Project: mongoose.model("Project", ProjectSchema),
  HistoricalProject: mongoose.model("HistoricalProject", HistoricalProjectSchema),
  CloudUsage: mongoose.model("CloudUsage", CloudUsageSchema),
  AIReport: mongoose.model("AIReport", AIReportSchema)
};
