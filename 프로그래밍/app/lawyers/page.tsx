"use client"

import { useState } from "react"
import { Search, Filter, Star, MapPin, Calendar, Phone, Mail, ArrowLeft, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import Link from "next/link"

export default function LawyersPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("all")
  const [priceRange, setPriceRange] = useState([100, 800])
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  const lawyers = [
    {
      id: 1,
      name: "Sarah Johnson",
      specialty: "Corporate Law",
      rating: 4.9,
      reviews: 127,
      experience: "15+ years",
      location: "New York, NY",
      image: "/placeholder.svg?height=120&width=120",
      hourlyRate: 450,
      bio: "Specializing in corporate mergers, acquisitions, and business law with extensive experience in Fortune 500 companies.",
      education: "Harvard Law School, JD",
      barAdmissions: ["New York", "California"],
      languages: ["English", "Spanish"],
      availability: "Available today",
      nextAvailable: "2:00 PM",
    },
    {
      id: 2,
      name: "Michael Chen",
      specialty: "Criminal Defense",
      rating: 4.8,
      reviews: 89,
      experience: "12+ years",
      location: "Los Angeles, CA",
      image: "/placeholder.svg?height=120&width=120",
      hourlyRate: 380,
      bio: "Former prosecutor with deep understanding of criminal law and courtroom procedures.",
      education: "Stanford Law School, JD",
      barAdmissions: ["California", "Nevada"],
      languages: ["English", "Mandarin"],
      availability: "Available tomorrow",
      nextAvailable: "10:00 AM",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      specialty: "Family Law",
      rating: 4.9,
      reviews: 156,
      experience: "18+ years",
      location: "Chicago, IL",
      image: "/placeholder.svg?height=120&width=120",
      hourlyRate: 420,
      bio: "Compassionate family law attorney specializing in divorce, custody, and adoption cases.",
      education: "University of Chicago Law School, JD",
      barAdmissions: ["Illinois", "Wisconsin"],
      languages: ["English", "Spanish"],
      availability: "Available today",
      nextAvailable: "4:30 PM",
    },
    {
      id: 4,
      name: "David Thompson",
      specialty: "Personal Injury",
      rating: 4.7,
      reviews: 203,
      experience: "20+ years",
      location: "Houston, TX",
      image: "/placeholder.svg?height=120&width=120",
      hourlyRate: 350,
      bio: "Dedicated personal injury attorney with a track record of securing substantial settlements.",
      education: "University of Texas Law School, JD",
      barAdmissions: ["Texas", "Louisiana"],
      languages: ["English"],
      availability: "Available in 2 days",
      nextAvailable: "9:00 AM",
    },
  ]

  const specialties = [
    "All Specialties",
    "Corporate Law",
    "Criminal Defense",
    "Family Law",
    "Personal Injury",
    "Real Estate Law",
    "Employment Law",
    "Estate Planning",
  ]

  const filteredLawyers =
    selectedSpecialty === "all"
      ? lawyers.filter((lawyer) => lawyer.hourlyRate >= priceRange[0] && lawyer.hourlyRate <= priceRange[1])
      : lawyers.filter(
          (lawyer) =>
            lawyer.specialty.toLowerCase() === selectedSpecialty.toLowerCase() &&
            lawyer.hourlyRate >= priceRange[0] &&
            lawyer.hourlyRate <= priceRange[1],
        )

  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5 text-slate-600" />
              <span className="text-slate-600">Back to Home</span>
            </Link>
            <h1 className="text-xl font-bold text-slate-900">Find Lawyers</h1>
            <div className="w-24"></div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div>
                  <label className="block text-sm font-medium mb-2">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                    <Input placeholder="Lawyer name or firm..." className="pl-10" />
                  </div>
                </div>

                {/* Specialty */}
                <div>
                  <label className="block text-sm font-medium mb-2">Specialty</label>
                  <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Specialties</SelectItem>
                      {specialties.slice(1).map((specialty) => (
                        <SelectItem key={specialty} value={specialty.toLowerCase()}>
                          {specialty}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Hourly Rate: ${priceRange[0]} - ${priceRange[1]}
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={800}
                    min={100}
                    step={50}
                    className="mt-2"
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <Input placeholder="City, State" />
                </div>

                {/* Availability */}
                <div>
                  <label className="block text-sm font-medium mb-2">Availability</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="today">Available today</SelectItem>
                      <SelectItem value="week">This week</SelectItem>
                      <SelectItem value="month">This month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">Apply Filters</Button>
              </CardContent>
            </Card>
          </div>

          {/* Lawyers List */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">{filteredLawyers.length} Lawyers Found</h2>
              <p className="text-slate-600">Connect with qualified legal professionals in your area</p>
            </div>

            <div className="space-y-6">
              {filteredLawyers.map((lawyer) => (
                <Card key={lawyer.id} className="hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      {/* Lawyer Info */}
                      <div className="md:col-span-2">
                        <div className="flex items-start space-x-4">
                          <Avatar className="w-16 h-16">
                            <AvatarImage src={lawyer.image || "/placeholder.svg"} alt={lawyer.name} />
                            <AvatarFallback>
                              {lawyer.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-xl font-semibold">{lawyer.name}</h3>
                              <div className="flex items-center">
                                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                <span className="ml-1 text-sm font-medium">{lawyer.rating}</span>
                                <span className="ml-1 text-sm text-slate-500">({lawyer.reviews})</span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-slate-600 mb-3">
                              <Badge variant="secondary">{lawyer.specialty}</Badge>
                              <span className="flex items-center">
                                <MapPin className="h-3 w-3 mr-1" />
                                {lawyer.location}
                              </span>
                              <span>{lawyer.experience}</span>
                            </div>
                            <p className="text-slate-600 mb-4">{lawyer.bio}</p>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="font-medium">Education:</span>
                                <p className="text-slate-600">{lawyer.education}</p>
                              </div>
                              <div>
                                <span className="font-medium">Bar Admissions:</span>
                                <p className="text-slate-600">{lawyer.barAdmissions.join(", ")}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Booking Section */}
                      <div className="border-l border-slate-200 pl-6">
                        <div className="text-center mb-4">
                          <div className="text-3xl font-bold text-slate-900">${lawyer.hourlyRate}</div>
                          <div className="text-slate-600">per hour</div>
                        </div>

                        <div className="mb-4">
                          <div className="flex items-center text-sm text-green-600 mb-2">
                            <Clock className="h-4 w-4 mr-1" />
                            {lawyer.availability}
                          </div>
                          <div className="text-sm text-slate-600">Next available: {lawyer.nextAvailable}</div>
                        </div>

                        <div className="space-y-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                <Calendar className="h-4 w-4 mr-2" />
                                Book Consultation
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-md">
                              <DialogHeader>
                                <DialogTitle>Book Consultation with {lawyer.name}</DialogTitle>
                                <DialogDescription>Select your preferred date and time</DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div>
                                  <label className="block text-sm font-medium mb-2">Select Date</label>
                                  <CalendarComponent
                                    mode="single"
                                    selected={selectedDate}
                                    onSelect={setSelectedDate}
                                    className="rounded-md border"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium mb-2">Available Times</label>
                                  <div className="grid grid-cols-2 gap-2">
                                    {timeSlots.map((time) => (
                                      <Button key={time} variant="outline" size="sm">
                                        {time}
                                      </Button>
                                    ))}
                                  </div>
                                </div>
                                <Button className="w-full bg-blue-600 hover:bg-blue-700">Confirm Booking</Button>
                              </div>
                            </DialogContent>
                          </Dialog>

                          <Button variant="outline" className="w-full bg-transparent">
                            <Phone className="h-4 w-4 mr-2" />
                            Call Now
                          </Button>

                          <Button variant="outline" className="w-full bg-transparent">
                            <Mail className="h-4 w-4 mr-2" />
                            Send Message
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Load More Lawyers
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
