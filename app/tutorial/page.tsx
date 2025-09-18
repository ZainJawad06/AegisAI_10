"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, BookOpen, CheckCircle, AlertTriangle, Phone, FileText, Clock, MapPin } from "lucide-react"
import Link from "next/link"

export default function TutorialPage() {
  const steps = [
    {
      title: "Immediate Safety First",
      description: "Ensure you are in a safe location before proceeding with any reporting.",
      icon: AlertTriangle,
      details: [
        "Move to a secure area if possible",
        "Call emergency services (100/101/102) if immediate danger exists",
        "Seek medical attention if injured",
      ],
    },
    {
      title: "Gather Evidence",
      description: "Collect all available evidence related to the incident.",
      icon: FileText,
      details: [
        "Take photographs of any injuries or damage",
        "Collect CCTV footage if available",
        "Note down witness contact information",
        "Preserve any physical evidence",
      ],
    },
    {
      title: "Document Details",
      description: "Record all relevant information about the incident.",
      icon: Clock,
      details: [
        "Exact date and time of incident",
        "Precise location where it occurred",
        "Description of what happened",
        "Details about perpetrator(s) if known",
      ],
    },
    {
      title: "Visit Police Station",
      description: "Go to the nearest police station to file your FIR.",
      icon: MapPin,
      details: [
        "Bring all collected evidence and documentation",
        "Request to speak with the duty officer",
        "Clearly state you want to file an FIR",
        "Provide all details accurately",
      ],
    },
    {
      title: "FIR Registration Process",
      description: "Understand what happens during FIR registration.",
      icon: BookOpen,
      details: [
        "Police will record your statement",
        "You will receive a copy of the FIR",
        "Note down the FIR number for reference",
        "Keep the FIR copy safely",
      ],
    },
    {
      title: "Follow-up Actions",
      description: "Stay engaged with the investigation process.",
      icon: CheckCircle,
      details: [
        "Regularly check case status with investigating officer",
        "Provide additional information if requested",
        "Maintain copies of all documents",
        "Consider legal consultation if needed",
      ],
    },
  ]

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
              <h1 className="text-xl font-bold text-amber-900">FIR Filing Guide</h1>
              <p className="text-sm text-amber-700">Step-by-step procedure for filing a First Information Report</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <Card className="p-8 bg-white/80 backdrop-blur-sm border-amber-200 rounded-2xl shadow-lg mb-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <BookOpen className="h-8 w-8 text-amber-600" />
              </div>
              <h2 className="text-2xl font-bold text-amber-900 mb-4">How to File an FIR</h2>
              <p className="text-amber-700 max-w-2xl mx-auto text-pretty">
                A First Information Report (FIR) is the first step in the criminal justice process. Follow this
                comprehensive guide to ensure your complaint is properly registered and investigated.
              </p>
            </div>
          </Card>

          {/* Emergency Contacts */}
          <Card className="p-6 bg-red-50 border-red-200 rounded-2xl shadow-lg mb-8">
            <h3 className="text-lg font-semibold text-red-900 mb-4 flex items-center">
              <Phone className="mr-2 h-5 w-5" />
              Emergency Contacts
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-red-800">100</p>
                <p className="text-sm text-red-700">Police</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-red-800">101</p>
                <p className="text-sm text-red-700">Fire</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-red-800">102</p>
                <p className="text-sm text-red-700">Ambulance</p>
              </div>
            </div>
            <p className="text-center text-red-700 text-sm mt-4">
              <strong>REVA Campus Security:</strong> 080-XXXX-XXXX (Available 24/7)
            </p>
          </Card>

          {/* Step-by-Step Guide */}
          <div className="space-y-6">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <Card key={index} className="p-6 bg-white/80 backdrop-blur-sm border-amber-200 rounded-2xl shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-amber-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-amber-600 text-white text-sm font-bold rounded-full">
                          {index + 1}
                        </span>
                        <h3 className="text-lg font-semibold text-amber-900">{step.title}</h3>
                      </div>
                      <p className="text-amber-700 mb-4">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-amber-800 text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Important Notes */}
          <Card className="p-6 bg-amber-50 border-amber-200 rounded-2xl shadow-lg mt-8">
            <h3 className="text-lg font-semibold text-amber-900 mb-4">Important Notes</h3>
            <div className="space-y-3 text-amber-800">
              <p className="flex items-start space-x-2">
                <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  <strong>Zero FIR:</strong> If the incident occurred outside the police station's jurisdiction, you can
                  still file a "Zero FIR" which will be transferred to the appropriate station.
                </span>
              </p>
              <p className="flex items-start space-x-2">
                <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  <strong>Time Limit:</strong> There's no time limit for filing an FIR, but earlier reporting helps in
                  better investigation and evidence collection.
                </span>
              </p>
              <p className="flex items-start space-x-2">
                <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  <strong>Free Service:</strong> Filing an FIR is completely free. Do not pay any money to police
                  officers for registering your complaint.
                </span>
              </p>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/report" className="flex-1">
              <Button
                size="lg"
                className="w-full h-12 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-xl"
              >
                <AlertTriangle className="mr-2 h-4 w-4" />
                Report an Incident Now
              </Button>
            </Link>
            <Link href="/" className="flex-1">
              <Button
                variant="outline"
                size="lg"
                className="w-full h-12 text-amber-700 border-amber-300 hover:bg-amber-50 rounded-xl bg-transparent"
              >
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
