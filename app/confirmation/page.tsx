"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Download, Trash2, Home, BookOpen } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function ConfirmationPage() {
  const searchParams = useSearchParams()
  const referenceNumber = searchParams.get("ref") || "REVA-123456"
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

  const handleDeleteData = () => {
    if (showDeleteConfirm) {
      // Simulate data deletion
      alert("All your data has been permanently deleted from our system.")
      window.location.href = "/"
    } else {
      setShowDeleteConfirm(true)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Success Message */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-amber-900 mb-4">Report Submitted Successfully</h1>
            <p className="text-lg text-amber-700">
              Your incident report has been forwarded to the REVA University administration.
            </p>
          </div>

          {/* Reference Number */}
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-amber-200 rounded-2xl shadow-lg mb-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Reference Number</h3>
              <div className="text-2xl font-mono font-bold text-amber-800 bg-amber-50 py-3 px-6 rounded-xl inline-block">
                {referenceNumber}
              </div>
              <p className="text-sm text-amber-600 mt-2">Save this reference number for future correspondence</p>
            </div>
          </Card>

          {/* Status Update */}
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-amber-200 rounded-2xl shadow-lg mb-8">
            <h3 className="text-lg font-semibold text-amber-900 mb-4">What Happens Next?</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-amber-700">Report received and processed by AI</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-amber-700">Forwarded to campus security and administration</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span className="text-amber-700">Investigation will begin within 24 hours</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <span className="text-amber-600">You will be contacted if additional information is needed</span>
              </div>
            </div>
          </Card>

          {/* Actions */}
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Button
                variant="outline"
                size="lg"
                className="w-full h-12 text-amber-700 border-amber-300 hover:bg-amber-50 rounded-xl bg-transparent"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Report Copy
              </Button>

              <Link href="/tutorial" className="w-full">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full h-12 text-amber-700 border-amber-300 hover:bg-amber-50 rounded-xl bg-transparent"
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  FIR Filing Guide
                </Button>
              </Link>
            </div>

            {/* Delete Data Option */}
            <Card className="p-4 bg-red-50 border-red-200 rounded-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-red-900 mb-1">Data Privacy</h4>
                  <p className="text-sm text-red-700">
                    {showDeleteConfirm
                      ? "Are you sure? This action cannot be undone."
                      : "Permanently delete all your data from our system"}
                  </p>
                </div>
                <Button
                  onClick={handleDeleteData}
                  variant="destructive"
                  size="sm"
                  className={`rounded-xl ${showDeleteConfirm ? "bg-red-600 hover:bg-red-700" : ""}`}
                >
                  <Trash2 className="mr-1 h-4 w-4" />
                  {showDeleteConfirm ? "Confirm Delete" : "Delete My Data"}
                </Button>
              </div>
              {showDeleteConfirm && (
                <Button
                  onClick={() => setShowDeleteConfirm(false)}
                  variant="outline"
                  size="sm"
                  className="mt-2 text-gray-600 border-gray-300 hover:bg-gray-50 rounded-xl"
                >
                  Cancel
                </Button>
              )}
            </Card>

            {/* Return Home */}
            <div className="text-center pt-4">
              <Link href="/">
                <Button
                  size="lg"
                  className="w-full max-w-md h-12 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-2xl"
                >
                  <Home className="mr-2 h-4 w-4" />
                  Return to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
