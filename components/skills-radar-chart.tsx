"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts"
import { useMediaQuery } from "@/hooks/use-media-query"

const skillsData = [
  { subject: "Data Science", A: 90 },
  { subject: "Data Engineering", A: 85 },
  { subject: "MLOps", A: 80 },
  { subject: "AI/ML", A: 85 },
  { subject: "DevOps", A: 80 },
  { subject: "Development", A: 60 },
]

export function SkillsRadarChart() {
  const { theme } = useTheme()
  const [chartColor, setChartColor] = useState("#1A237E")
  const isMobile = useMediaQuery("(max-width: 640px)")

  useEffect(() => {
    setChartColor(theme === "dark" ? "#66B2FF" : "#1A237E")
  }, [theme])

  return (
    <div className="h-[350px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius={isMobile ? "70%" : "80%"} data={skillsData}>
          <PolarGrid stroke={theme === "dark" ? "#444" : "#ddd"} />
          <PolarAngleAxis
            dataKey="subject"
            tick={{
              fill: theme === "dark" ? "#ccc" : "#333",
              fontSize: isMobile ? 10 : 12,
              dy: isMobile ? 3 : 0,
            }}
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
