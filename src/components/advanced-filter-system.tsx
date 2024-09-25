// @ts-nocheck
// TODO: Remove the above comment after resolving the issue, (👋 work on why you're not able to figure out things here)
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useSession } from "next-auth/react"
import UpdateForPro from "./update-for-pro"

type FilterCategory = "City" | "Industry" | "Company size" | "Speciality" | "Technology"

const filterCategories: Record<FilterCategory, string[]> = {
  City: ["Delhi, IN", "Hydrabad", "Bangalore", "New York", "San Francisco", "London", "Tokyo", "Berlin"],
  Industry: ["Technology", "Social Media", "Semiconductors", "Finance", "Healthcare", "Education", "Retail"],
  "Company size": ["10", "50", "200", "500", "1000", "5000"],
  Speciality: ["Search Engine", "Cloud Computing", "Advertising", "Software", "Hardware", "Web Development", "Mobile Apps", "AI/ML", "Data Science", "Cloud Computing"],
  Technology: ["React", "Node.js", "TS", "C++", "Verilog", "VHDL", "Python", "Java", "AWS"]
}


export default function AdvancedFilterSystem() {
  const router = useRouter()
  const { data: session } = useSession()

  const [activeTab, setActiveTab] = useState<FilterCategory>("Industry")
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


    router.push(`/search/?${queryParams.toString()}`)
  }

  const handleClearAll = () => {
    setFilters(Object.fromEntries(
      Object.keys(filterCategories).map(category => [category, []])
    ) as Record<FilterCategory, string[]>)
  }

  if (!isOpen) return null




  return (
    <Card className="w-[340px] sm:w-[500px]">
      <Tabs value={activeTab}
        onValueChange={(value: FilterCategory) => setActiveTab(value)}
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-5 gap-2">
            {(Object.keys(filterCategories) as FilterCategory[]).map((category) => (
              <TabsTrigger key={category} value={category} className="text-xs sm:text-sm">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </CardHeader>
        <CardContent>

          {(Object.entries(filterCategories) as [FilterCategory, string[]][]).map(([category, items]) => {
            console.log(session?.user)
            if (session?.user?.isPremium)
              // console.log(category, items)
              return <TabsContent key={category} value={category} className="mt-10 md:mt-4">
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
            else {
              if (category == "City") {
                return <TabsContent key={category} value={category} className="mt-10 md:mt-4">
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
              }
              else {
                return <TabsContent key={category} value={category} className="mt-10 md:mt-4">
                  <UpdateForPro />
                </TabsContent>
              }
            }
          })

          }

        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" size="sm" onClick={handleClearAll}>
            Clear all
          </Button>
          <Button size="sm" onClick={handleApply}>
            Apply
          </Button>
        </CardFooter>
      </Tabs>
    </Card >
  )
}