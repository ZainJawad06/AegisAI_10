"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AlertTriangle, Shield, Users, BookOpen } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [isPressed, setIsPressed] = useState(false)

  const handleReportPress = () => {
    setIsPressed(true)
    setTimeout(() => setIsPressed(false), 200)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-amber-600" />
              <div>
                <h1 className="text-xl font-bold text-amber-900">REVA SafeGuard</h1>
                <p className="text-sm text-amber-700">Emergency Reporting System</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-amber-800 font-medium">REVA University</p>
              <p className="text-xs text-amber-600">Campus Safety Initiative</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-100 rounded-full mb-6">
              <AlertTriangle className="h-10 w-10 text-amber-600" />
            </div>
            <h2 className="text-4xl font-bold text-amber-900 mb-4 text-balance">Emergency Reporting Made Simple</h2>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto text-pretty">
              Quick, secure, and anonymous incident reporting with AI-powered footage analysis for the REVA University
              community.
            </p>
          </div>

          {/* Main Action Buttons */}
          <div className="flex flex-col items-center space-y-6 mb-16">
            {/* Primary Report Button */}
            <Link href="/report" className="w-full max-w-md">
              <Button
                size="lg"
                className={`w-full h-20 text-2xl font-bold bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-2xl rounded-3xl border-4 border-red-300 transition-all duration-200 transform ${
                  isPressed ? "scale-95 shadow-lg" : "hover:scale-105"
                }`}
                onClick={handleReportPress}
              >
                <AlertTriangle className="mr-3 h-8 w-8" />
                REPORT INCIDENT
              </Button>
            </Link>

            {/* Admin Portal Access */}
            <Link href="/admin" className="w-full max-w-md">
              <Button
                variant="outline"
                size="lg"
                className="w-full h-14 text-lg font-semibold bg-white/80 hover:bg-amber-50 text-amber-800 border-2 border-amber-300 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Users className="mr-2 h-5 w-5" />
                Admin Portal Access
              </Button>
            </Link>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-amber-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-amber-900">Anonymous Reporting</h3>
              </div>
              <p className="text-amber-700">
                Report incidents while maintaining complete anonymity and privacy protection.
              </p>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-amber-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-amber-900">AI-Powered Analysis</h3>
              </div>
              <p className="text-amber-700">
                Advanced AI analyzes footage to automatically detect incident types and details.
              </p>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-amber-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-amber-900">Immediate Response</h3>
              </div>
              <p className="text-amber-700">
                Direct connection to campus security and administrative personnel for quick action.
              </p>
            </Card>
          </div>

          {/* Tutorial Link */}
          <div className="text-center">
            <Link href="/tutorial">
              <Button
                variant="ghost"
                size="lg"
                className="text-amber-700 hover:text-amber-900 hover:bg-amber-100 rounded-xl"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                How to File an FIR - Step by Step Guide
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/60 backdrop-blur-sm border-t border-amber-200 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-amber-700 mb-2">© 2024 REVA University - Emergency Reporting System</p>
            <p className="text-sm text-amber-600">
              Managed by the Office of the President | For emergencies, call Campus Security: 080-XXXX-XXXX
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
