"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Briefcase, GraduationCap, Upload } from "lucide-react"

export default function WorkStatusForm() {
  const [workStatus, setWorkStatus] = useState("experienced")

  return (
    <Tabs defaultValue="work-status" className="w-3xl">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="work-status">Work Status</TabsTrigger>
        <TabsTrigger value="resume">Resume</TabsTrigger>
      </TabsList>
      <TabsContent value="work-status" className="w-3xl">
        <Card>
          <CardContent className="pt-6">
            <CardDescription className="mb-4">Select your current work status</CardDescription>
            <RadioGroup value={workStatus} onValueChange={setWorkStatus} className="grid grid-cols-2 gap-4">
              <Label
                htmlFor="experienced"
                className={`flex flex-col items-center justify-center rounded-md border-2 scale-90 max-w-52 p-4 hover:bg-accent ${workStatus === "experienced" ? "border-primary" : "border-muted"
                  }`}
              >
                <RadioGroupItem value="experienced" id="experienced" className="sr-only" />
                <Briefcase className="mb-2 h-6 w-6" />
                <span className="font-semibold">I{"'"}m experienced</span>
                <span className="text-sm text-muted-foreground">I have work experience (excluding internships)</span>
              </Label>
              <Label
                htmlFor="fresher"
                className={`flex flex-col items-center justify-center rounded-md border-2  scale-90 max-w-52 p-4 hover:bg-accent ${workStatus === "fresher" ? "border-primary" : "border-muted"
                  }`}
              >
                <RadioGroupItem value="fresher" id="fresher" className="sr-only" />
                <GraduationCap className="mb-2 h-6 w-6" />
                <span className="font-semibold">I{"'"}m a fresher</span>
                <span className="text-sm text-muted-foreground">I am a student/ Haven{"'"}t worked after graduation</span>
              </Label>
            </RadioGroup>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="resume">
        <Card>
          <CardContent className="pt-6">
            <CardDescription className="mb-4">Upload your resume</CardDescription>
            <div className="flex items-center justify-center w-full">
              <Label
                htmlFor="resume-upload"
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-accent"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                  <p className="mb-2 text-sm text-muted-foreground">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground">DOC, DOCX, PDF, RTF (MAX. 2MB)</p>
                </div>
                <input id="resume-upload" type="file" className="hidden" />
              </Label>
            </div>
            <p className="mt-4 text-xs text-muted-foreground text-center">
              Recruiters prefer candidates who have a resume on their profile
            </p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}