"use client"

import { useMediaQuery } from "@/hooks/use-media-query"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts"

const skillsData = [
  { subject: "Data Science", A: 90 },
  
  { subject: ".       MLOps", A: 80 },
  { subject: "AI/ML", A: 85 },
  { subject: "Data Engineering", A: 85 },
  { subject: "DevOps", A: 80 },
  { subject: "Development", A: 75 },
]

export function SkillsRadarChart() {
  const { theme } = useTheme()
  const [chartColor, setChartColor] = useState("#1A237E")
  const isMobile = useMediaQuery("(max-width: 640px)")

  useEffect(() => {
    setChartColor(theme === "dark" ? "#66B2FF" : "#1A237E")
  }, [theme])

  return (
    <div className="h-[450px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart 
          cx="50%" 
          cy="45%" 
          outerRadius={isMobile ? "65%" : "75%"} 
          data={skillsData}
          margin={{ top: 20, right: 30, bottom: 60, left: 30 }}
        >
          <PolarGrid stroke={theme === "dark" ? "#444" : "#ddd"} />
          <PolarAngleAxis
            dataKey="subject"
            tick={{
              fill: theme === "dark" ? "#ccc" : "#333",
              fontSize: isMobile ? 11 : 13,
            }}
            tickFormatter={(value) => `${value}`}
            tickLine={false}
            axisLine={false}
            dy={16}
          />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 100]}
            tick={{
              fill: theme === "dark" ? "#ccc" : "#333",
              fontSize: isMobile ? 10 : 12,
            }}
            tickCount={5}
          />
          <Radar name="Skills" dataKey="A" stroke={chartColor} fill={chartColor} fillOpacity={0.5} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
