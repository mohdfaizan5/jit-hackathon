import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Assume this function is imported from your API layer
import { filterJobs } from '@/lib/api'

const filterCategories = {
  Industry: ["Technology", "Finance", "Healthcare", "Education", "Retail"],
  "Company size": ["1-10", "11-50", "51-200", "201-500", "500+"],
  Speciality: ["Web Development", "Mobile Apps", "AI/ML", "Data Science", "Cloud Computing"],
  City: ["New York", "San Francisco", "London", "Tokyo", "Berlin"],
  Technology: ["React", "Node.js", "Python", "Java", "AWS"]
}

export default function JobFilter() {
  const [activeTab, setActiveTab] = useState("Industry")
  const [filters, setFilters] = useState({
    Industry: [],
    "Company size": [],
    Speciality: [],
    City: [],
    Technology: []
  })
  const [jobs, setJobs] = useState([])

  const handleFilterChange = (category, item) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(item)
        ? prev[category].filter(i => i !== item)
        : [...prev[category], item]
    }))
  }

  const handleApply = async () => {
    const filteredJobs = await filterJobs(
      filters.Industry[0],
      filters["Company size"][0],
      filters.Speciality[0],
      filters.City[0],
      filters.Technology[0]
    )
    setJobs(filteredJobs)
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Job Filters</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            {Object.keys(filterCategories).map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(filterCategories).map(([category, items]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-2 gap-4">
                {items.map((item) => (
                  <div key={item} className="flex items-center space-x-2">
                    <Checkbox
                      id={`${category}-${item}`}
                      checked={filters[category].includes(item)}
                      onCheckedChange={() => handleFilterChange(category, item)}
                    />
                    <Label htmlFor={`${category}-${item}`}>{item}</Label>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
      <CardFooter>
        <Button onClick={handleApply}>Apply Filters</Button>
      </CardFooter>
    </Card>
  )
}