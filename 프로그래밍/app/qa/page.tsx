"use client"

import { useState } from "react"
import { Search, MessageCircle, ThumbsUp, Filter, Plus, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function QAPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showAskForm, setShowAskForm] = useState(false)

  const questions = [
    {
      id: 1,
      title: "Can my employer terminate me without cause during probation?",
      content:
        "I'm currently in my 3-month probation period at a new job. My employer mentioned they can terminate me without any reason during this time. Is this legal?",
      category: "Employment Law",
      author: "John D.",
      timeAgo: "2 hours ago",
      answers: 3,
      upvotes: 12,
      status: "answered",
      bestAnswer: {
        author: "Sarah Johnson",
        content:
          "During probation periods, employers typically have more flexibility in termination decisions. However, they still cannot terminate for discriminatory reasons...",
        upvotes: 8,
      },
    },
    {
      id: 2,
      title: "Landlord refusing to return security deposit - what are my options?",
      content:
        "My landlord is claiming damages that don't exist and refusing to return my $2,000 security deposit. I have photos proving the apartment was in good condition.",
      category: "Real Estate Law",
      author: "Maria S.",
      timeAgo: "5 hours ago",
      answers: 2,
      upvotes: 8,
      status: "answered",
    },
    {
      id: 3,
      title: "Do I need a lawyer for a simple will?",
      content:
        "I want to create a basic will leaving everything to my spouse. Is it worth hiring a lawyer or can I use online templates?",
      category: "Estate Planning",
      author: "Robert K.",
      timeAgo: "1 day ago",
      answers: 5,
      upvotes: 15,
      status: "answered",
    },
    {
      id: 4,
      title: "Car accident settlement - insurance company lowballing me",
      content:
        "I was rear-ended and the other driver's insurance is offering much less than my medical bills and car repairs cost.",
      category: "Personal Injury",
      author: "Lisa M.",
      timeAgo: "2 days ago",
      answers: 1,
      upvotes: 6,
      status: "open",
    },
  ]

  const categories = [
    "All Categories",
    "Employment Law",
    "Real Estate Law",
    "Personal Injury",
    "Family Law",
    "Criminal Defense",
    "Estate Planning",
    "Business Law",
  ]

  const filteredQuestions =
    selectedCategory === "all"
      ? questions
      : questions.filter((q) => q.category.toLowerCase() === selectedCategory.toLowerCase())

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
            <h1 className="text-xl font-bold text-slate-900">Legal Q&A</h1>
            <Button onClick={() => setShowAskForm(true)} className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Ask Question
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Ask Question Form */}
        {showAskForm && (
          <Card className="mb-8 border-2 border-blue-200">
            <CardHeader>
              <CardTitle>Ask a Legal Question</CardTitle>
              <CardDescription>Get expert answers from verified legal professionals</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Question Title</label>
                <Input placeholder="Summarize your legal question..." />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.slice(1).map((category) => (
                      <SelectItem key={category} value={category.toLowerCase()}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Detailed Description</label>
                <Textarea placeholder="Provide as much detail as possible about your situation..." rows={4} />
              </div>
              <div className="flex space-x-2">
                <Button className="bg-blue-600 hover:bg-blue-700">Post Question</Button>
                <Button variant="outline" onClick={() => setShowAskForm(false)}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <Input placeholder="Search questions..." className="pl-10" />
            </div>
          </div>
          <div className="flex gap-2">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.slice(1).map((category) => (
                  <SelectItem key={category} value={category.toLowerCase()}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-6">
          {filteredQuestions.map((question) => (
            <Card key={question.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2 hover:text-blue-600 cursor-pointer">{question.title}</CardTitle>
                    <CardDescription className="text-base mb-3">{question.content}</CardDescription>
                    <div className="flex items-center space-x-4 text-sm text-slate-500">
                      <span>Asked by {question.author}</span>
                      <span>•</span>
                      <span>{question.timeAgo}</span>
                      <Badge variant={question.status === "answered" ? "default" : "secondary"} className="ml-2">
                        {question.status === "answered" ? "Answered" : "Open"}
                      </Badge>
                    </div>
                  </div>
                  <Badge variant="outline">{question.category}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                {question.bestAnswer && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                    <div className="flex items-center mb-2">
                      <Avatar className="w-6 h-6 mr-2">
                        <AvatarImage src="/placeholder.svg?height=24&width=24" />
                        <AvatarFallback>SJ</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium text-green-800">
                        Best Answer by {question.bestAnswer.author}
                      </span>
                    </div>
                    <p className="text-sm text-green-700 mb-2">{question.bestAnswer.content}</p>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="ghost" className="text-green-600 h-6 px-2">
                        <ThumbsUp className="h-3 w-3 mr-1" />
                        {question.bestAnswer.upvotes}
                      </Button>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Button size="sm" variant="ghost" className="text-slate-600">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      {question.upvotes}
                    </Button>
                    <Button size="sm" variant="ghost" className="text-slate-600">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      {question.answers} answers
                    </Button>
                  </div>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Load More Questions
          </Button>
        </div>
      </div>
    </div>
  )
}
