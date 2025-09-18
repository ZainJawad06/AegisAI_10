"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Lock, Shield, AlertTriangle, Clock, User, Eye } from "lucide-react"
import Link from "next/link"

export default function AdminPage() {
  const [password, setPassword] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = () => {
    if (password === "REVA") {
      setIsAuthenticated(true)
      setError("")
    } else {
      setError("Invalid password. Access denied.")
    }
  }

  // Mock incident reports data
  const incidents = [
    {
      id: "REVA-123456",
      type: "Physical Altercation",
      severity: "High",
      location: "Main Campus Block A, Near Cafeteria",
      time: "2024-01-15T14:30:00",
      status: "Under Investigation",
      reporter: "Anonymous",
    },
    {
      id: "REVA-123455",
      type: "Verbal Harassment",
      severity: "Medium",
      location: "Library - 2nd Floor",
      time: "2024-01-15T11:15:00",
      status: "Resolved",
      reporter: "Student ID: 2021XXXX",
    },
    {
      id: "REVA-123454",
      type: "Theft",
      severity: "Medium",
      location: "Parking Area B",
      time: "2024-01-14T16:45:00",
      status: "Pending Review",
      reporter: "Anonymous",
    },
  ]

  if (!isAuthenticated) {
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
                <h1 className="text-xl font-bold text-amber-900">Admin Portal</h1>
                <p className="text-sm text-amber-700">REVA University Emergency System</p>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto">
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-amber-200 rounded-2xl shadow-lg">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                  <Lock className="h-8 w-8 text-amber-600" />
                </div>
                <h2 className="text-2xl font-bold text-amber-900 mb-2">Admin Access</h2>
                <p className="text-amber-700">
                  This portal is restricted to authorized REVA University personnel only.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="password" className="text-amber-800 mb-2 block">
                    Admin Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter admin password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-white/80 border-amber-300 rounded-xl"
                    onKeyPress={(e) => e.key === "Enter" && handleLogin()}
                  />
                </div>

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl">
                    <p className="text-red-700 text-sm">{error}</p>
                  </div>
                )}

                <Button
                  onClick={handleLogin}
                  className="w-full h-12 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-xl"
                >
                  <Shield className="mr-2 h-4 w-4" />
                  Access Admin Portal
                </Button>
              </div>

              <div className="mt-6 p-4 bg-amber-50 rounded-xl">
                <p className="text-xs text-amber-700 text-center">
                  Authorized for use by the Office of the President and designated campus security personnel only.
                </p>
              </div>
            </Card>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
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
                <h1 className="text-xl font-bold text-amber-900">Admin Dashboard</h1>
                <p className="text-sm text-amber-700">Incident Management System</p>
              </div>
            </div>
            <Button
              onClick={() => setIsAuthenticated(false)}
              variant="outline"
              size="sm"
              className="text-amber-700 border-amber-300 hover:bg-amber-50 rounded-xl"
            >
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Stats Overview */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-amber-200 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-amber-900">3</p>
                  <p className="text-sm text-amber-700">Active Reports</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-amber-200 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-amber-900">1</p>
                  <p className="text-sm text-amber-700">Pending Review</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-amber-200 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-amber-900">1</p>
                  <p className="text-sm text-amber-700">Resolved</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-amber-200 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-amber-900">2</p>
                  <p className="text-sm text-amber-700">Anonymous</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Incident Reports Table */}
          <Card className="bg-white/80 backdrop-blur-sm border-amber-200 rounded-2xl shadow-lg">
            <div className="p-6 border-b border-amber-200">
              <h3 className="text-lg font-semibold text-amber-900">Recent Incident Reports</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-amber-50">
                  <tr>
                    <th className="text-left p-4 text-amber-800 font-medium">Reference ID</th>
                    <th className="text-left p-4 text-amber-800 font-medium">Type</th>
                    <th className="text-left p-4 text-amber-800 font-medium">Severity</th>
                    <th className="text-left p-4 text-amber-800 font-medium">Location</th>
                    <th className="text-left p-4 text-amber-800 font-medium">Time</th>
                    <th className="text-left p-4 text-amber-800 font-medium">Status</th>
                    <th className="text-left p-4 text-amber-800 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {incidents.map((incident) => (
                    <tr key={incident.id} className="border-b border-amber-100 hover:bg-amber-25">
                      <td className="p-4">
                        <span className="font-mono text-sm text-amber-900">{incident.id}</span>
                      </td>
                      <td className="p-4">
                        <span className="text-amber-900">{incident.type}</span>
                      </td>
                      <td className="p-4">
                        <Badge
                          variant="secondary"
                          className={`${
                            incident.severity === "High"
                              ? "bg-red-100 text-red-800 border-red-300"
                              : incident.severity === "Medium"
                                ? "bg-orange-100 text-orange-800 border-orange-300"
                                : "bg-yellow-100 text-yellow-800 border-yellow-300"
                          }`}
                        >
                          {incident.severity}
                        </Badge>
                      </td>
                      <td className="p-4 text-amber-700 text-sm max-w-48 truncate">{incident.location}</td>
                      <td className="p-4 text-amber-700 text-sm">{new Date(incident.time).toLocaleDateString()}</td>
                      <td className="p-4">
                        <Badge
                          variant="secondary"
                          className={`${
                            incident.status === "Resolved"
                              ? "bg-green-100 text-green-800 border-green-300"
                              : incident.status === "Under Investigation"
                                ? "bg-blue-100 text-blue-800 border-blue-300"
                                : "bg-gray-100 text-gray-800 border-gray-300"
                          }`}
                        >
                          {incident.status}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-amber-700 border-amber-300 hover:bg-amber-50 rounded-lg bg-transparent"
                        >
                          <Eye className="h-3 w-3 mr-1" />
                          View
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
