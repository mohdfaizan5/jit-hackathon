"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type FilterCategory = "Industry" | "Company size" | "Speciality" | "City" | "Technology"
type SortOption = "popularity" | "rating" | "deliveryTime" | "costLowToHigh" | "costHighToLow"

const filterCategories: Record<FilterCategory, string[]> = {
  Industry: ["Technology", "Finance", "Healthcare", "Education", "Retail"],
  "Company size": ["1-10", "11-50", "51-200", "201-500", "500+"],
  Speciality: ["Web Development", "Mobile Apps", "AI/ML", "Data Science", "Cloud Computing"],
  City: ["New York", "San Francisco", "London", "Tokyo", "Berlin"],
  Technology: ["React", "Node.js", "Python", "Java", "AWS"]
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "popularity", label: "Popularity" },
  { value: "rating", label: "Rating: High to Low" },
  { value: "deliveryTime", label: "Delivery Time" },
  { value: "costLowToHigh", label: "Cost: Low to High" },
  { value: "costHighToLow", label: "Cost: High to Low" },
]

export default function AdvancedFilterSystem() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<FilterCategory>("Industry")
  const [sortBy, setSortBy] = useState<SortOption>("rating")
  const [filters, setFilters] = useState<Record<FilterCategory, string[]>>(
    Object.fromEntries(
      Object.keys(filterCategories).map(category => [category, []])
    ) as Record<FilterCategory, string[]>
  )
  const [isOpen, setIsOpen] = useState(true)

  const handleFilterChange = (category: FilterCategory, item: string) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(item)
        ? prev[category].filter(i => i !== item)
        : [...prev[category], item]
    }))
  }

  const handleApply = () => {
    const queryParams = new URLSearchParams()

    Object.entries(filters).forEach(([category, items]) => {
      if (items.length > 0) {
        queryParams.append(category.toLowerCase().replace(' ', '_'), items.join(','))
      }
    })

    queryParams.append('sort', sortBy)

    router.push(`/search/?${queryParams.toString()}`)
  }

  const handleClearAll = () => {
    setFilters(Object.fromEntries(
      Object.keys(filterCategories).map(category => [category, []])
    ) as Record<FilterCategory, string[]>)
    setSortBy("rating")
  }

  if (!isOpen) return null

  return (
    <Card className="w-[340px] sm:w-[500px]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Filters</CardTitle>
        <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={(value: FilterCategory) => setActiveTab(value)}>
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-5 gap-2">
            {(Object.keys(filterCategories) as FilterCategory[]).map((category) => (
              <TabsTrigger key={category} value={category} className="text-xs sm:text-sm">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          {(Object.entries(filterCategories) as [FilterCategory, string[]][]).map(([category, items]) => (
            <TabsContent key={category} value={category} className="mt-10 md:mt-4">
              <div className="grid grid-cols-2 gap-2">
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
        <div className="mt-6">
          <h3 className="mb-2 text-sm font-medium">Sort by</h3>
          <RadioGroup value={sortBy} onValueChange={(value: SortOption) => setSortBy(value)}>
            {sortOptions.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={option.value} />
                <Label htmlFor={option.value}>{option.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" onClick={handleClearAll}>
          Clear all
        </Button>
        <Button size="sm" onClick={handleApply}>
          Apply
        </Button>
      </CardFooter>
    </Card>
  )
}