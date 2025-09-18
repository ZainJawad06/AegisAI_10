"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Brain, MapPin, Clock, CheckCircle, Edit3, Send, FileText, Download } from "lucide-react"
import Link from "next/link"

export default function AnalysisPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(true)
  const [editMode, setEditMode] = useState(false)
  const [showEvidence, setShowEvidence] = useState(false)
  const [analysisResults, setAnalysisResults] = useState({
    incidentType: "Physical Altercation",
    confidence: 92,
    location: "Main Campus Block A, Near Cafeteria",
    dateTime: "2024-01-15T14:30:00",
    perpetratorDescription: "Male, approximately 20-25 years old, wearing blue shirt and jeans",
    victimDescription: "Female, approximately 19-22 years old, wearing white top",
    incidentDescription: "Physical confrontation between two individuals, escalated from verbal argument",
    severity: "High",
    witnesses: "Multiple students present in the area",
    additionalDetails: "Incident occurred during lunch break, high foot traffic area",
    cctvCamera: "Camera-A-Block-01",
    footageTimestamp: "2024-01-15 14:28:45 - 14:35:12",
    videoQuality: "HD 1080p",
  })

  const [editedResults, setEditedResults] = useState(analysisResults)

  useEffect(() => {
    // Simulate AI analysis
    const timer = setTimeout(() => {
      setIsAnalyzing(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleEdit = () => {
    setEditMode(true)
    setEditedResults(analysisResults)
  }

  const handleSave = () => {
    setAnalysisResults(editedResults)
    setEditMode(false)
  }

  const handleSubmitToAdmin = () => {
    // Generate reference number and redirect to final page
    const referenceNumber = `REVA-${Date.now().toString().slice(-6)}`
    window.location.href = `/confirmation?ref=${referenceNumber}`
  }

  const handleProvideEvidence = () => {
    setShowEvidence(true)
  }

  if (isAnalyzing) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center">
        <Card className="p-8 bg-white/80 backdrop-blur-sm border-amber-200 rounded-2xl shadow-lg text-center max-w-md">
          <div className="animate-spin w-16 h-16 border-4 border-amber-200 border-t-amber-600 rounded-full mx-auto mb-6"></div>
          <h2 className="text-xl font-semibold text-amber-900 mb-2">AI Analyzing CCTV Footage</h2>
          <p className="text-amber-700">
            Extracting incident details, identifying individuals, and determining timeline...
          </p>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link href="/report">
              <Button
                variant="ghost"
                size="sm"
                className="text-amber-700 hover:text-amber-900 hover:bg-amber-100 rounded-xl"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Report
              </Button>
            </Link>
            <div>
              <h1 className="text-xl font-bold text-amber-900">AI Analysis Results</h1>
              <p className="text-sm text-amber-700">Review and verify the extracted information</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Analysis Status */}
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-amber-200 rounded-2xl shadow-lg mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Brain className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-amber-900">CCTV Analysis Complete</h3>
                  <p className="text-amber-700">
                    AI confidence: {analysisResults.confidence}% | Camera: {analysisResults.cctvCamera}
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">
                  <CheckCircle className="mr-1 h-3 w-3" />
                  Processed
                </Badge>
                <Button
                  onClick={handleProvideEvidence}
                  variant="outline"
                  size="sm"
                  className="text-blue-700 border-blue-300 hover:bg-blue-50 rounded-xl bg-transparent"
                >
                  <FileText className="mr-1 h-4 w-4" />
                  Provide Evidence
                </Button>
              </div>
            </div>
          </Card>

          {showEvidence && (
            <Card className="p-6 bg-blue-50 border-blue-200 rounded-2xl shadow-lg mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                Evidence Package
              </h3>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4">
                    <h4 className="font-medium text-blue-900 mb-2">CCTV Footage</h4>
                    <p className="text-sm text-blue-700 mb-3">Original footage: {analysisResults.footageTimestamp}</p>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                      <Download className="mr-1 h-4 w-4" />
                      Download Video
                    </Button>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <h4 className="font-medium text-blue-900 mb-2">Analysis Report</h4>
                    <p className="text-sm text-blue-700 mb-3">Detailed AI analysis with timestamps</p>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                      <Download className="mr-1 h-4 w-4" />
                      Download Report
                    </Button>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-medium text-blue-900 mb-2">Reference Number</h4>
                  <p className="text-sm text-blue-700">
                    Use this reference for any follow-up:{" "}
                    <span className="font-mono bg-blue-100 px-2 py-1 rounded">
                      REVA-{Date.now().toString().slice(-6)}
                    </span>
                  </p>
                </div>
              </div>
            </Card>
          )}

          {/* Analysis Results */}
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-amber-200 rounded-2xl shadow-lg mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-amber-900">Extracted Information</h3>
              {!editMode && (
                <Button
                  onClick={handleEdit}
                  variant="outline"
                  size="sm"
                  className="text-amber-700 border-amber-300 hover:bg-amber-50 rounded-xl bg-transparent"
                >
                  <Edit3 className="mr-1 h-4 w-4" />
                  Edit Details
                </Button>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Incident Type */}
              <div>
                <Label className="text-amber-800 mb-2 block">Incident Type</Label>
                {editMode ? (
                  <Select
                    value={editedResults.incidentType}
                    onValueChange={(value) => setEditedResults({ ...editedResults, incidentType: value })}
                  >
                    <SelectTrigger className="bg-white/80 border-amber-300 rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Physical Altercation">Physical Altercation</SelectItem>
                      <SelectItem value="Verbal Harassment">Verbal Harassment</SelectItem>
                      <SelectItem value="Theft">Theft</SelectItem>
                      <SelectItem value="Vandalism">Vandalism</SelectItem>
                      <SelectItem value="Suspicious Activity">Suspicious Activity</SelectItem>
                      <SelectItem value="Medical Emergency">Medical Emergency</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                ) : (
                  <div className="p-3 bg-amber-50 rounded-xl">
                    <Badge variant="secondary" className="bg-red-100 text-red-800 border-red-300">
                      {analysisResults.incidentType}
                    </Badge>
                  </div>
                )}
              </div>

              {/* Severity */}
              <div>
                <Label className="text-amber-800 mb-2 block">Severity Level</Label>
                {editMode ? (
                  <Select
                    value={editedResults.severity}
                    onValueChange={(value) => setEditedResults({ ...editedResults, severity: value })}
                  >
                    <SelectTrigger className="bg-white/80 border-amber-300 rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Low">Low</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="High">High</SelectItem>
                      <SelectItem value="Critical">Critical</SelectItem>
                    </SelectContent>
                  </Select>
                ) : (
                  <div className="p-3 bg-amber-50 rounded-xl">
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-300">
                      {analysisResults.severity}
                    </Badge>
                  </div>
                )}
              </div>

              {/* Location */}
              <div>
                <Label className="text-amber-800 mb-2 block flex items-center">
                  <MapPin className="mr-1 h-4 w-4" />
                  Location
                </Label>
                {editMode ? (
                  <Input
                    value={editedResults.location}
                    onChange={(e) => setEditedResults({ ...editedResults, location: e.target.value })}
                    className="bg-white/80 border-amber-300 rounded-xl"
                  />
                ) : (
                  <div className="p-3 bg-amber-50 rounded-xl text-amber-900">{analysisResults.location}</div>
                )}
              </div>

              {/* Date & Time */}
              <div>
                <Label className="text-amber-800 mb-2 block flex items-center">
                  <Clock className="mr-1 h-4 w-4" />
                  Date & Time
                </Label>
                {editMode ? (
                  <Input
                    type="datetime-local"
                    value={editedResults.dateTime}
                    onChange={(e) => setEditedResults({ ...editedResults, dateTime: e.target.value })}
                    className="bg-white/80 border-amber-300 rounded-xl"
                  />
                ) : (
                  <div className="p-3 bg-amber-50 rounded-xl text-amber-900">
                    {new Date(analysisResults.dateTime).toLocaleString()}
                  </div>
                )}
              </div>
            </div>

            {/* Descriptions */}
            <div className="mt-6 space-y-4">
              <div>
                <Label className="text-amber-800 mb-2 block">Perpetrator Description</Label>
                {editMode ? (
                  <Textarea
                    value={editedResults.perpetratorDescription}
                    onChange={(e) => setEditedResults({ ...editedResults, perpetratorDescription: e.target.value })}
                    className="bg-white/80 border-amber-300 rounded-xl"
                  />
                ) : (
                  <div className="p-3 bg-amber-50 rounded-xl text-amber-900">
                    {analysisResults.perpetratorDescription}
                  </div>
                )}
              </div>

              <div>
                <Label className="text-amber-800 mb-2 block">Incident Description</Label>
                {editMode ? (
                  <Textarea
                    value={editedResults.incidentDescription}
                    onChange={(e) => setEditedResults({ ...editedResults, incidentDescription: e.target.value })}
                    className="bg-white/80 border-amber-300 rounded-xl"
                  />
                ) : (
                  <div className="p-3 bg-amber-50 rounded-xl text-amber-900">{analysisResults.incidentDescription}</div>
                )}
              </div>
            </div>

            {editMode && (
              <div className="flex space-x-3 mt-6">
                <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700 text-white rounded-xl">
                  <CheckCircle className="mr-1 h-4 w-4" />
                  Save Changes
                </Button>
                <Button
                  onClick={() => setEditMode(false)}
                  variant="outline"
                  className="border-amber-300 text-amber-700 hover:bg-amber-50 rounded-xl"
                >
                  Cancel
                </Button>
              </div>
            )}
          </Card>

          {/* Submit to Admin */}
          <div className="text-center">
            <Button
              onClick={handleSubmitToAdmin}
              size="lg"
              className="w-full max-w-md h-14 text-lg font-semibold bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-xl rounded-2xl transition-all duration-200 hover:scale-105"
            >
              <Send className="mr-2 h-5 w-5" />
              Submit to Admin Portal
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
