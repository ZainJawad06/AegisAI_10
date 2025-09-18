"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, Camera, MapPin, Clock, AlertTriangle, Eye, Search, Upload, Play } from "lucide-react"
import Link from "next/link"

export default function ReportPage() {
  const [isAnonymous, setIsAnonymous] = useState(true)
  const [cctvStep, setCctvStep] = useState<"search" | "found" | "analyzing">("search")
  const [searchParams, setSearchParams] = useState({
    location: "",
    dateTime: "",
    cameraId: "",
  })
  const [manualInput, setManualInput] = useState({
    location: "",
    dateTime: "",
    description: "",
  })
  const [foundSMVVideo, setFoundSMVVideo] = useState(false)

  const searchCCTVFootage = () => {
    const isSMVIncident =
      searchParams.location.toLowerCase().includes("smv") && searchParams.dateTime.includes("2025-09-14")

    if (isSMVIncident) {
      setFoundSMVVideo(true)
    }

    setCctvStep("found")
    // Simulate finding footage after search
    setTimeout(() => {
      setCctvStep("analyzing")
    }, 2000)
  }

  const handleSubmit = () => {
    // Redirect to AI analysis page
    window.location.href = "/analysis"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button
                variant="ghost"
                size="sm"
                className="text-amber-700 hover:text-amber-900 hover:bg-amber-100 rounded-xl"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div>
              <h1 className="text-xl font-bold text-amber-900">Report Incident</h1>
              <p className="text-sm text-amber-700">REVA University Emergency System</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Anonymous Toggle */}
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-amber-200 rounded-2xl shadow-lg mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-amber-900 mb-2">Reporting Preference</h3>
                <p className="text-amber-700">Choose whether to report anonymously or provide your details</p>
              </div>
              <div className="flex items-center space-x-3">
                <Label htmlFor="anonymous-mode" className="text-amber-800">
                  Anonymous
                </Label>
                <Switch id="anonymous-mode" checked={isAnonymous} onCheckedChange={setIsAnonymous} />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white/80 backdrop-blur-sm border-amber-200 rounded-2xl shadow-lg mb-8">
            <h3 className="text-lg font-semibold text-amber-900 mb-4 flex items-center">
              <Eye className="mr-2 h-5 w-5" />
              CCTV Footage Retrieval
            </h3>

            {cctvStep === "search" && (
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <p className="font-medium text-blue-900 mb-2">Search for CCTV Footage</p>
                  <p className="text-sm text-blue-700">
                    Provide incident details to locate relevant CCTV footage from our security system.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="search-location" className="text-amber-800 mb-2 block flex items-center">
                      <MapPin className="mr-1 h-4 w-4" />
                      Incident Location
                    </Label>
                    <Input
                      id="search-location"
                      placeholder="e.g., SMV incident location, Main Campus Block A"
                      value={searchParams.location}
                      onChange={(e) => setSearchParams({ ...searchParams, location: e.target.value })}
                      className="bg-white/80 border-amber-300 rounded-xl"
                    />
                  </div>

                  <div>
                    <Label htmlFor="search-datetime" className="text-amber-800 mb-2 block flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      Approximate Time
                    </Label>
                    <Input
                      id="search-datetime"
                      type="datetime-local"
                      value={searchParams.dateTime}
                      onChange={(e) => setSearchParams({ ...searchParams, dateTime: e.target.value })}
                      className="bg-white/80 border-amber-300 rounded-xl"
                    />
                  </div>
                </div>

                <Button
                  onClick={searchCCTVFootage}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-xl"
                  disabled={!searchParams.location || !searchParams.dateTime}
                >
                  <Search className="mr-2 h-4 w-4" />
                  Search CCTV Footage
                </Button>
              </div>
            )}

            {cctvStep === "found" && (
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="font-medium text-green-900">CCTV Footage Found</p>
                      <p className="text-sm text-green-700">
                        {foundSMVVideo
                          ? "Located SMV incident footage from Camera ID: CAM-SMV-205"
                          : `Located relevant footage from Camera ID: CAM-A-101 at ${searchParams.location}`}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 rounded-xl p-4">
                  <h4 className="font-medium text-amber-900 mb-3">Retrieved Footage</h4>
                  {foundSMVVideo ? (
                    <div className="bg-gray-900 rounded-lg aspect-video relative overflow-hidden">
                      <video className="w-full h-full object-cover" controls poster="/cctv-security-camera-footage-preview.jpg">
                        <source src="/placeholder-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        CAM-SMV-205 | 14-09-2025 | SMV Incident Location
                      </div>
                      <div className="absolute bottom-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded flex items-center">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-1 animate-pulse"></div>
                        LIVE FOOTAGE
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center">
                      <div className="text-center text-white">
                        <Camera className="h-12 w-12 mx-auto mb-2 opacity-60" />
                        <p className="text-sm opacity-80">CCTV Footage Retrieved</p>
                        <p className="text-xs opacity-60">Camera: CAM-A-101 | {searchParams.location}</p>
                        <p className="text-xs opacity-60">Time: {searchParams.dateTime}</p>
                      </div>
                    </div>
                  )}
                  <p className="text-sm text-amber-700 mt-2">
                    {foundSMVVideo
                      ? "SMV incident footage loaded - preparing for AI analysis..."
                      : "Preparing footage for AI analysis..."}
                  </p>
                </div>
              </div>
            )}

            {cctvStep === "analyzing" && (
              <div className="space-y-4">
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                    <div>
                      <p className="font-medium text-purple-900">AI Analysis Ready</p>
                      <p className="text-sm text-purple-700">
                        {foundSMVVideo
                          ? "SMV incident footage loaded and ready for AI analysis"
                          : "CCTV footage loaded and ready for AI incident analysis"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 rounded-xl p-4">
                  {foundSMVVideo ? (
                    <div className="bg-gray-900 rounded-lg aspect-video relative overflow-hidden">
                      <video className="w-full h-full object-cover" controls poster="/cctv-security-camera-footage-preview.jpg">
                        <source src="/placeholder-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        CAM-SMV-205 | 14-09-2025 | SMV Incident Location
                      </div>
                      <div className="absolute bottom-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded flex items-center">
                        <Play className="w-3 h-3 mr-1" />
                        READY FOR ANALYSIS
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center">
                      <div className="text-center text-white">
                        <Upload className="h-12 w-12 mx-auto mb-2 opacity-60" />
                        <p className="text-sm opacity-80">Footage Loaded for Analysis</p>
                        <p className="text-xs opacity-60">Ready for AI processing</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </Card>

          {/* Manual Input Section - only show when footage is ready */}
          {cctvStep === "analyzing" && (
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-amber-200 rounded-2xl shadow-lg mb-8">
              <h3 className="text-lg font-semibold text-amber-900 mb-4 flex items-center">
                <AlertTriangle className="mr-2 h-5 w-5" />
                Manual Information Override
              </h3>
              <p className="text-amber-700 mb-6">
                If AI analysis doesn't capture the correct information, you can manually provide or correct details:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="location" className="text-amber-800 mb-2 block flex items-center">
                    <MapPin className="mr-1 h-4 w-4" />
                    Location Override
                  </Label>
                  <Input
                    id="location"
                    placeholder={foundSMVVideo ? "SMV incident location" : "e.g., Main Campus Block A, Room 101"}
                    value={manualInput.location}
                    onChange={(e) => setManualInput({ ...manualInput, location: e.target.value })}
                    className="bg-white/80 border-amber-300 rounded-xl"
                  />
                </div>

                <div>
                  <Label htmlFor="datetime" className="text-amber-800 mb-2 block flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    Date & Time Override
                  </Label>
                  <Input
                    id="datetime"
                    type="datetime-local"
                    value={manualInput.dateTime}
                    onChange={(e) => setManualInput({ ...manualInput, dateTime: e.target.value })}
                    className="bg-white/80 border-amber-300 rounded-xl"
                  />
                </div>
              </div>

              <div className="mt-6">
                <Label htmlFor="description" className="text-amber-800 mb-2 block">
                  Additional Description
                </Label>
                <Textarea
                  id="description"
                  placeholder="Provide additional context or correct any details that AI might miss..."
                  value={manualInput.description}
                  onChange={(e) => setManualInput({ ...manualInput, description: e.target.value })}
                  className="bg-white/80 border-amber-300 rounded-xl min-h-32"
                />
              </div>
            </Card>
          )}

          {/* Submit Button - only show when footage is ready */}
          {cctvStep === "analyzing" && (
            <div className="text-center">
              <Button
                onClick={handleSubmit}
                size="lg"
                className="w-full max-w-md h-14 text-lg font-semibold bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-xl rounded-2xl transition-all duration-200 hover:scale-105"
              >
                <AlertTriangle className="mr-2 h-5 w-5" />
                Start AI Analysis of CCTV Footage
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
