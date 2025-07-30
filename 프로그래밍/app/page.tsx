"use client"

import { useState } from "react"
import { Search, MessageCircle, Calendar, Shield, Users, Star, ArrowRight, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.length > 2) {
      // Simulate search results based on query
      const mockResults = [
        {
          title: "Employment Law Consultation",
          description: "Get expert advice on workplace disputes, wrongful termination, and employment contracts.",
          steps: [
            "Document the incident",
            "Gather evidence",
            "Consult with employment lawyer",
            "File complaint if necessary",
          ],
          relevantLaws: ["Fair Labor Standards Act", "Title VII", "Americans with Disabilities Act"],
        },
        {
          title: "Personal Injury Claims",
          description: "Navigate personal injury cases with professional legal guidance.",
          steps: [
            "Seek medical attention",
            "Document injuries",
            "Contact insurance",
            "Consult personal injury attorney",
          ],
          relevantLaws: ["Negligence Law", "Statute of Limitations", "Comparative Fault Rules"],
        },
      ]
      setSearchResults(mockResults)
    } else {
      setSearchResults([])
    }
  }

  const featuredLawyers = [
    {
      id: 1,
      name: "Sarah Johnson",
      specialty: "Corporate Law",
      rating: 4.9,
      reviews: 127,
      experience: "15+ years",
      image: "/placeholder.svg?height=100&width=100",
      hourlyRate: "$450",
    },
    {
      id: 2,
      name: "Michael Chen",
      specialty: "Criminal Defense",
      rating: 4.8,
      reviews: 89,
      experience: "12+ years",
      image: "/placeholder.svg?height=100&width=100",
      hourlyRate: "$380",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      specialty: "Family Law",
      rating: 4.9,
      reviews: 156,
      experience: "18+ years",
      image: "/placeholder.svg?height=100&width=100",
      hourlyRate: "$420",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-slate-900">LegalConsult</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#services" className="text-slate-600 hover:text-blue-600 transition-colors">
                Services
              </Link>
              <Link href="#lawyers" className="text-slate-600 hover:text-blue-600 transition-colors">
                Find Lawyers
              </Link>
              <Link href="#qa" className="text-slate-600 hover:text-blue-600 transition-colors">
                Q&A
              </Link>
              <Link href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">
                About
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-slate-600">
                Sign In
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Legal Solutions
              <span className="block text-blue-600">Made Simple</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Connect with expert lawyers, get instant answers, and resolve your legal matters with confidence.
            </p>
          </div>

          {/* Dynamic Search Bar */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <Input
                placeholder="Describe your legal situation... (e.g., 'workplace harassment', 'divorce proceedings')"
                className="pl-12 pr-4 py-4 text-lg border-2 border-slate-200 focus:border-blue-500 rounded-xl shadow-lg"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>

            {/* Search Results */}
            {searchResults.length > 0 && (
              <div className="mt-6 space-y-4 animate-in slide-in-from-top-2 duration-300">
                {searchResults.map((result, index) => (
                  <Card key={index} className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{result.title}</CardTitle>
                      <CardDescription>{result.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-slate-700">Recommended Steps:</h4>
                          <ul className="space-y-1">
                            {result.steps.map((step: string, stepIndex: number) => (
                              <li key={stepIndex} className="text-sm text-slate-600 flex items-center">
                                <ArrowRight className="h-3 w-3 mr-2 text-blue-500" />
                                {step}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-slate-700">Relevant Laws:</h4>
                          <div className="flex flex-wrap gap-2">
                            {result.relevantLaws.map((law: string, lawIndex: number) => (
                              <Badge key={lawIndex} variant="secondary" className="text-xs">
                                {law}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex space-x-2">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          Find Specialist
                        </Button>
                        <Button size="sm" variant="outline">
                          Ask Question
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-blue-200">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <MessageCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Ask Legal Questions</h3>
                <p className="text-slate-600 mb-4">Get instant answers from verified legal professionals</p>
                <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
                  Start Q&A <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-green-200">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <Calendar className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Book Consultation</h3>
                <p className="text-slate-600 mb-4">Schedule appointments with top-rated lawyers</p>
                <Button variant="ghost" className="text-green-600 hover:text-green-700">
                  Book Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-purple-200">
              <CardContent className="p-8 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Find Lawyers</h3>
                <p className="text-slate-600 mb-4">Browse and hire qualified legal professionals</p>
                <Button variant="ghost" className="text-purple-600 hover:text-purple-700">
                  Browse <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Lawyers */}
      <section id="lawyers" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Legal Experts</h2>
            <p className="text-xl text-slate-600">Connect with top-rated lawyers in your area</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredLawyers.map((lawyer) => (
              <Card key={lawyer.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <Avatar className="w-20 h-20 mx-auto mb-4">
                      <AvatarImage src={lawyer.image || "/placeholder.svg"} alt={lawyer.name} />
                      <AvatarFallback>
                        {lawyer.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-semibold">{lawyer.name}</h3>
                    <p className="text-blue-600 font-medium">{lawyer.specialty}</p>
                    <p className="text-slate-500 text-sm">{lawyer.experience}</p>
                  </div>

                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-medium">{lawyer.rating}</span>
                    </div>
                    <span className="text-slate-400">•</span>
                    <span className="text-sm text-slate-600">{lawyer.reviews} reviews</span>
                  </div>

                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold text-slate-900">{lawyer.hourlyRate}</span>
                    <span className="text-slate-600">/hour</span>
                  </div>

                  <div className="space-y-2">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Book Consultation</Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      View Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Q&A Section Preview */}
      <section id="qa" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Legal Q&A Community</h2>
            <p className="text-xl text-slate-600">Get answers from experienced legal professionals</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">Employment Contract Review</CardTitle>
                    <CardDescription>Asked 2 hours ago by John D.</CardDescription>
                  </div>
                  <Badge variant="secondary">Employment Law</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  {
                    "I've been offered a new position and need help understanding the non-compete clause in my contract..."
                  }
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src="/placeholder.svg?height=24&width=24" />
                      <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-slate-600">Answered by Sarah Johnson</span>
                  </div>
                  <Button size="sm" variant="ghost" className="text-blue-600">
                    Read Answer
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">Landlord Dispute Resolution</CardTitle>
                    <CardDescription>Asked 5 hours ago by Maria S.</CardDescription>
                  </div>
                  <Badge variant="secondary">Real Estate Law</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  {"My landlord is refusing to return my security deposit despite no damages to the property..."}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src="/placeholder.svg?height=24&width=24" />
                      <AvatarFallback>MC</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-slate-600">Answered by Michael Chen</span>
                  </div>
                  <Button size="sm" variant="ghost" className="text-blue-600">
                    Read Answer
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Browse All Questions
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">LegalConsult</span>
              </div>
              <p className="text-slate-400 mb-4">
                Professional legal consultation platform connecting you with expert lawyers.
              </p>
              <div className="flex space-x-4">
                <Phone className="h-5 w-5 text-slate-400" />
                <Mail className="h-5 w-5 text-slate-400" />
                <MapPin className="h-5 w-5 text-slate-400" />
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Legal Consultation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Document Review
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Court Representation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Legal Research
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Practice Areas</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Corporate Law
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Family Law
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Criminal Defense
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Personal Injury
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 LegalConsult. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
